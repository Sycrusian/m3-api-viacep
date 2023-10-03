import "./styles/index.scss";
import { useEffect, useState } from "react";
import { viacep } from "./services/api";
import { setCursor } from "./services/cursor";
import { Form } from "./components/Form";
import { Address } from "./components/Address";

const App = () => {
  const [ cep, setCep ] = useState("");
  const [ address, setAddress ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const loadData = async cepValue => {
    try {
      setLoading(true);
      if (!cepValue) {
        cepValue = localStorage.getItem("@viacep");
        if (!cepValue) {
          return;
        }
      }
      const { data } = await viacep.get(`/${cepValue}/json/`);
      localStorage.setItem("@viacep", cepValue);
      setAddress(data);
    }
    catch(error) {
      console.error(error);
    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, [])

  useEffect(() => {
    loadData(cep);
  }, [cep]);

  useEffect(() => {
    setCursor(loading);
  }, [loading]);

  return (
    <>
      <section className="container">
        <h1>Busca CEP</h1>
        <Form setCep={setCep}/>
        {address && <Address address={address}/>}
      </section>
    </>
  );
}

export default App;
