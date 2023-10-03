import styles from "./style.module.scss";

export const Address = ({address}) => {
  return (
    <div className={styles.address}>
      <h2>{address.logradouro}</h2>
      <ul>
        <li><span><b>Complemento: </b>{address.complemento}</span></li>
        <li><span><b>CEP: </b>{address.cep}</span></li>
        <li><span><b>Bairro: </b>{address.bairro}</span></li>
        <li><span><b>Cidade: </b>{address.localidade}</span></li>
        <li><span><b>Estado: </b>{address.uf}</span></li>
        <li><span><b>IBGE: </b>{address.ibge}</span></li>
        <li><span><b>GIA: </b>{address.gia}</span></li>
        <li><span><b>DDD: </b>{address.ddd}</span></li>
        <li><span><b>Siafi: </b>{address.siafi}</span></li>
      </ul>
    </div>
  );
}