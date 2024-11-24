import "./App.css";
import React, { useState, useRef } from "react";

import contrureal from "./assets/construreal.jpg";
import imagem1 from "./assets/imagem1.jpg";
import imagem2 from "./assets/imagem2.jpg";
import imagem3 from "./assets/imagem3.jpg";

const ConstruReal = () => {
  const [telefone, setTelefone] = useState("");
  const [reside, setReside] = useState("");
  const [bairro, setBairro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1234567890", telefone); // Substitua pelo ID do campo de telefone no Google Forms
    formData.append("entry.0987654321", reside); // Substitua pelo ID do campo de reside no Google Forms
    formData.append("entry.1122334455", bairro); // Substitua pelo ID do campo de bairro no Google Forms

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdKf_Qlbu6JHxmdumFV-X72N9K3LeKC08FbHai-ghB1wXUv9w/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    )
      .then(() => {
        alert("Formulário enviado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao enviar o formulário:", error);
      });
  };

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ConstruReal</title>
        <link rel="stylesheet" href="estilo.css" />
      </head>
      <body>
        <header>
          <img src={contrureal} className="img-banner" alt="ConstruReal Logo" />
          <h1>ConstruReal</h1>
          <p>Tudo o que você precisa para construir seu sonho</p>
        </header>
        <div className="container">
          <div className="carousel">
            <div className="carousel-images">
              <img src={imagem1} alt="Imagem 1" />
              <img src={imagem2} alt="Imagem 2" />
              <img src={imagem3} alt="Imagem 3" />
            </div>
            <button className="carousel-button left">&#10094;</button>
            <button className="carousel-button right">&#10095;</button>
          </div>

          <hr />

          <p>Conheça nossas categorias</p>

          <hr />

          <ul>
            <li>Hidráulico</li>
            <li>Elétrico</li>
            <li>Pinturas</li>
            <li>Fundação</li>
          </ul>

          <a
            href="https://www.instagram.com/construrealmoc/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Venha nos visitar!!
          </a>

          <table>
            <tbody>
              <tr>
                <td>Av: Leonel Beirão de Jesus - 1940, Dr. João Alves</td>
              </tr>
              <tr>
                <td>Telefone: (38) 98823-4559</td>
              </tr>
            </tbody>
          </table>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="telefone"
              name="telefone"
              required
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />

            <p>Você reside em Montes Claros?</p>
            <label>
              <input
                type="radio"
                name="reside"
                value="sim"
                checked={reside === "sim"}
                onChange={(e) => setReside(e.target.value)}
              /> Sim
            </label>
            <label>
              <input
                type="radio"
                name="reside"
                value="nao"
                checked={reside === "nao"}
                onChange={(e) => setReside(e.target.value)}
              /> Não
            </label>

            <p>Qual Bairro?</p>
            <select
              name="bairro"
              id="bairro"
              value={bairro}
              onChange={(e) => setBairro(e.target.value)}
            >
              <option value="acacias">Acácias</option>
              <option value="alcides-rabelo">Alcides Rabelo</option>
            </select>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdKf_Qlbu6JHxmdumFV-X72N9K3LeKC08FbHai-ghB1wXUv9w/viewform?embedded=true"
              width="640"
              height="1000"
            >
              Carregando…
            </iframe>
            <input type="submit" value="Enviar" />
            <input
              type="reset"
              value="Limpar"
              onClick={() => {
                setTelefone("");
                setReside("");
                setBairro("");
              }}
            />
          </form>
        </div>
      </body>
    </>
  );
};

export default ConstruReal;
