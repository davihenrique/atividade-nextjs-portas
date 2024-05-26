import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/porta";
import styles from "../styles/Jogo.module.css";

export default function jogo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [portas, setPortas] = useState(criarPortas(4, 3));

  function rederinzarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>{rederinzarPortas()}</div>
      <div className={styles.botoes}></div>
    </div>
  );
}
