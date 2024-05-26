import { useState } from "react";
import Porta from "../components/Porta";
import PortaModel from "../model/porta";
import { atualizarPortas, criarPortas } from "../functions/porta";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(4, 3));

  function rederinzarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) => setPortas(atualizarPortas(portas, novaPorta))}
        />
      );
    });
  }

  return <div style={{ display: "flex" }}>{rederinzarPortas()}</div>;
}
