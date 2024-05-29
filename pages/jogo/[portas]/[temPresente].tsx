import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/porta";
import styles from "../../../styles/Jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function jogo() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [valido, setValido] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [portas, setPortas] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const portas = +router?.query.portas;
    const temPresente = +router?.query.temPresente;

    const qtePortaValida = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;
    setValido(qtePortaValida && temPresenteValido);
  }, [portas, router?.query.portas, router?.query.temPresente]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const portas = +router?.query.portas;
    const temPresente = +router?.query.temPresente;

    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

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
      <div className={styles.portas}>
        {valido ? rederinzarPortas() : <h1>Valores Inválidos</h1>}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
