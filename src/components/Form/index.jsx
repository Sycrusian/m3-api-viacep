import styles from "./style.module.scss";
import { useState } from "react";

export const Form = ({setCep}) => {
  const [ cep1, setCep1 ] = useState("");
  const [ cep2, setCep2 ] = useState("");

  const submit = e => {
    e.preventDefault();
    setCep(cep1 + cep2);
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div>
        <input type="number" maxLength="5" value={cep1} onChange={e => setCep1(e.target.value)} />
        -
        <input type="number" maxLength="3" value={cep2} onChange={e => setCep2(e.target.value)} />
      </div>
      <button type="submit">Carregar</button>
    </form>
  );
}