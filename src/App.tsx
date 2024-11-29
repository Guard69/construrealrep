import "./App.css";
import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import contrureal from "./assets/construreal.jpg";
import imagem1 from "./assets/imagem1.jpg";
import imagem2 from "./assets/imagem2.jpg";
import imagem3 from "./assets/imagem3.jpg";

const ConstruReal = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mora, setMora] = useState("");
  const [bairro, setBairro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.170427251", nome);
    formData.append("entry.1274605923", telefone);
    formData.append("entry.520798885", mora);
    formData.append("entry.160532975", bairro);

    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKf_Qlbu6JHxmdumFV-X72N9K3LeKC08FbHai-ghB1wXUv9w/formResponse",
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
    <div>
      <header>
        <img src={contrureal} className="img-banner" alt="ConstruReal Logo" />
        <h1>ConstruReal</h1>
        <p>Tudo o que você precisa para construir seu sonho</p>
      </header>
      <Carousel>
        <div>
          <img src={imagem1} alt="Imagem 1" />
          <p className="legend">Imagem 1</p>
        </div>
        <div>
          <img src={imagem2} alt="Imagem 2" />
          <p className="legend">Imagem 2</p>
        </div>
        <div>
          <img src={imagem3} alt="Imagem 3" />
          <p className="legend">Imagem 3</p>
        </div>
      </Carousel>

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
      >
        Venha nos visitar!!
      </a>

      <table>
        <tr>
          <td>Av: Leonel Beirão de Jesus - 1940, Dr. João Alves</td>
        </tr>
        <tr>
          <td>Telefone: (38) 98823-4559</td>
        </tr>
      </table>

      <form onSubmit={handleSubmit}>
        Nome
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        Telefone
        <input
          type="text"
          id="telefone"
          name="telefone"
          placeholder="Digite seu telefone"
          required
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <p>Você reside em Montes Claros?</p>
        <label>
          <input
            type="radio"
            name="reside"
            value="Sim"
            checked={mora === "Sim"}
            onChange={(e) => setMora(e.target.value)}
          />{" "}
          Sim
        </label>
        <label>
          <input
            type="radio"
            name="reside"
            value="Nao"
            checked={mora === "Nao"}
            onChange={(e) => setMora(e.target.value)}
          />{" "}
          Não
        </label>
        <p>Qual Bairro?</p>
        <select
          name="bairro"
          id="bairro"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        >
          <option value="Acácias">Acácias</option>
          <option value="Alcides Rabelo">Alcides Rabelo</option>
          <option value="Alice Maia">Alice Maia</option>
          <option value="Alterosas">Alterosas</option>
          <option value="Alto da Boa Vista">Alto da Boa Vista</option>
          <option value="Alto Floresta">Alto Floresta</option>
          <option value="Alto São João">Alto São João</option>
          <option value="Amazonas">Amazonas</option>
          <option value="Antônio Pimenta">Antônio Pimenta</option>
          <option value="Área Rural de Montes Claros">
            Área Rural de Montes Claros
          </option>
          <option value="Augusta Mota">Augusta Mota</option>
          <option value="Barcelona Park">Barcelona Park</option>
          <option value="Bela Paisagem">Bela Paisagem</option>
          <option value="Bela Vista">Bela Vista</option>
          <option value="Belvedere">Belvedere</option>
          <option value="Camilo Prates">Camilo Prates</option>
          <option value="Cândida Câmara">Cândida Câmara</option>
          <option value="Canelas">Canelas</option>
          <option value="Carmelo">Carmelo</option>
          <option value="Centro">Centro</option>
          <option value="Chácara Ceres">Chácara Ceres</option>
          <option value="Chácara Recanto dos Araçás">
            Chácara Recanto dos Araçás
          </option>
          <option value="Chácaras Paineiras">Chácaras Paineiras</option>
          <option value="Chácaras Paraíso">Chácaras Paraíso</option>
          <option value="Cidade Industrial">Cidade Industrial</option>
          <option value="Cidade Nova">Cidade Nova</option>
          <option value="Cidade Santa Maria">Cidade Santa Maria</option>
          <option value="Cintra">Cintra</option>
          <option value="Clarindo Lopes">Clarindo Lopes</option>
          <option value="Colorado">Colorado</option>
          <option value="Condomínio Pai João">Condomínio Pai João</option>
          <option value="Conjunto Chiquinho Guimarães">
            Conjunto Chiquinho Guimarães
          </option>
          <option value="Conjunto Ciro dos Anjos">
            Conjunto Ciro dos Anjos
          </option>
          <option value="Conjunto Clarice Alves Vieira">
            Conjunto Clarice Alves Vieira
          </option>
          <option value="Conjunto Cristo Rei">Conjunto Cristo Rei</option>
          <option value="Conjunto Havaí">Conjunto Havaí</option>
          <option value="Conjunto Joaquim Costa">Conjunto Joaquim Costa</option>
          <option value="Conjunto Olga Benário">Conjunto Olga Benário</option>
          <option value="Conjunto Residencial JK">
            Conjunto Residencial JK
          </option>
          <option value="Delfino Magalhães">Delfino Magalhães</option>
          <option value="Distrito Industrial">Distrito Industrial</option>
          <option value="Dona Gregória">Dona Gregória</option>
          <option value="Dos Mangues">Dos Mangues</option>
          <option value="Duque de Caxias">Duque de Caxias</option>
          <option value="Edgar Pereira">Edgar Pereira</option>
          <option value="Eldorado">Eldorado</option>
          <option value="Esplanada">Esplanada</option>
          <option value="Francisco Peres I">Francisco Peres I</option>
          <option value="Funcionários">Funcionários</option>
          <option value="Guarujá">Guarujá</option>
          <option value="Ibituruna">Ibituruna</option>
          <option value="Inconfidentes">Inconfidentes</option>
          <option value="Independência">Independência</option>
          <option value="Interlagos">Interlagos</option>
          <option value="Ipiranga">Ipiranga</option>
          <option value="Jaraguá">Jaraguá</option>
          <option value="Jardim Alegre">Jardim Alegre</option>
          <option value="Jardim Alvorada">Jardim Alvorada</option>
          <option value="Jardim Brasil">Jardim Brasil</option>
          <option value="Jardim Itália">Jardim Itália</option>
          <option value="Jardim Liberdade">Jardim Liberdade</option>
          <option value="Jardim Olímpico">Jardim Olímpico</option>
          <option value="Jardim Palmeiras">Jardim Palmeiras</option>
          <option value="Jardim Panorama">Jardim Panorama</option>
          <option value="Jardim Parque Morada do Sol">
            Jardim Parque Morada do Sol
          </option>
          <option value="Jardim Planalto">Jardim Planalto</option>
          <option value="Jardim Primavera">Jardim Primavera</option>
          <option value="Jardim São Geraldo">Jardim São Geraldo</option>
          <option value="Jardim São Luiz">Jardim São Luiz</option>
          <option value="João Alves">João Alves</option>
          <option value="João Botelho">João Botelho</option>
          <option value="João Gordo">João Gordo</option>
          <option value="José Carlos Vale de Lima">
            José Carlos Vale de Lima
          </option>
          <option value="José Correia Machado">José Correia Machado</option>
          <option value="Juscelino Kubitschek">Juscelino Kubitschek</option>
          <option value="Loteamento Jardim Niemeyer">
            Loteamento Jardim Niemeyer
          </option>
          <option value="Loteamento Novo Jaraguá">
            Loteamento Novo Jaraguá
          </option>
          <option value="Loteamento Recanto das Águas">
            Loteamento Recanto das Águas
          </option>
          <option value="Loteamento Reserva Real">
            Loteamento Reserva Real
          </option>
          <option value="Lourdes">Lourdes</option>
          <option value="Major Prates">Major Prates</option>
          <option value="Maracanã">Maracanã</option>
          <option value="Melo">Melo</option>
          <option value="Monte Alegre">Monte Alegre</option>
          <option value="Monte Carmelo">Monte Carmelo</option>
          <option value="Morada da Serra">Morada da Serra</option>
          <option value="Morada do Parque">Morada do Parque</option>
          <option value="Morada do Sol">Morada do Sol</option>
          <option value="Morada do Sol II">Morada do Sol II</option>
          <option value="Morrinhos">Morrinhos</option>
          <option value="Nossa Senhora Aparecida">
            Nossa Senhora Aparecida
          </option>
          <option value="Nossa Senhora das Graças">
            Nossa Senhora das Graças
          </option>
          <option value="Nossa Senhora de Fátima">
            Nossa Senhora de Fátima
          </option>
          <option value="Nova América">Nova América</option>
          <option value="Nova Morada">Nova Morada</option>
          <option value="Nova Suiça">Nova Suiça</option>
          <option value="Novo Delfino">Novo Delfino</option>
          <option value="Panorama II">Panorama II</option>
          <option value="Parque Pampulha">Parque Pampulha</option>
          <option value="Planalto">Planalto</option>
          <option value="Raul Lourenço">Raul Lourenço</option>
          <option value="Regina Peres">Regina Peres</option>
          <option value="Renascença">Renascença</option>
          <option value="Residencial Minas Gerais">
            Residencial Minas Gerais
          </option>
          <option value="Residencial Monte Sião">Residencial Monte Sião</option>
          <option value="Residencial Sul Ipês">Residencial Sul Ipês</option>
          <option value="Residencial Vitória">Residencial Vitória</option>
          <option value="Roxo Verde">Roxo Verde</option>
          <option value="Sagrada Família">Sagrada Família</option>
          <option value="Santa Cecília">Santa Cecília</option>
          <option value="Santa Eugênia">Santa Eugênia</option>
          <option value="Santa Laura">Santa Laura</option>
          <option value="Santa Lúcia">Santa Lúcia</option>
          <option value="Santa Rafaela">Santa Rafaela</option>
          <option value="Santa Rita I">Santa Rita I</option>
          <option value="Santa Rita II">Santa Rita II</option>
          <option value="Santo Amaro">Santo Amaro</option>
          <option value="Santo Antônio">Santo Antônio</option>
          <option value="Santo Expedito">Santo Expedito</option>
          <option value="Santo Inácio">Santo Inácio</option>
          <option value="Santo Inácio II">Santo Inácio II</option>
          <option value="Santos Dumont">Santos Dumont</option>
          <option value="Santos Reis">Santos Reis</option>
          <option value="São Bento">São Bento</option>
          <option value="São Geraldo">São Geraldo</option>
          <option value="São Geraldo II">São Geraldo II</option>
          <option value="São José">São José</option>
          <option value="São Judas Tadeu">São Judas Tadeu</option>
          <option value="São Lucas">São Lucas</option>
          <option value="São Mateus">São Mateus</option>
          <option value="Sapucaia">Sapucaia</option>
          <option value="Tancredo Neves">Tancredo Neves</option>
          <option value="Todos os Santos">Todos os Santos</option>
          <option value="Universitário">Universitário</option>
          <option value="Vargem Grande II">Vargem Grande II</option>
          <option value="Veneza Parque">Veneza Parque</option>
          <option value="Vera Cruz">Vera Cruz</option>
          <option value="Vila Anália">Vila Anália</option>
          <option value="Vila Antônio Narciso">Vila Antônio Narciso</option>
          <option value="Vila Atlântida">Vila Atlântida</option>
          <option value="Vila Áurea">Vila Áurea</option>
          <option value="Vila Brasília">Vila Brasília</option>
          <option value="Vila Campos">Vila Campos</option>
          <option value="Vila Castelo Branco">Vila Castelo Branco</option>
          <option value="Vila Exposição">Vila Exposição</option>
          <option value="Vila Fenix">Vila Fenix</option>
          <option value="Vila Greice">Vila Greice</option>
          <option value="Vila Guilhermina">Vila Guilhermina</option>
          <option value="Vila Ipiranga">Vila Ipiranga</option>
          <option value="Vila Itatiaia">Vila Itatiaia</option>
          <option value="Vila Luiza">Vila Luiza</option>
          <option value="Vila Maria Cândida">Vila Maria Cândida</option>
          <option value="Vila Mauricéia">Vila Mauricéia</option>
          <option value="Vila Oliveira">Vila Oliveira</option>
          <option value="Vila Real">Vila Real</option>
          <option value="Vila Regina">Vila Regina</option>
          <option value="Vila Santa Cruz">Vila Santa Cruz</option>
          <option value="Vila Santa Mônica">Vila Santa Mônica</option>
          <option value="Vila Senhor do Bonfim">Vila Senhor do Bonfim</option>
          <option value="Vila Sion">Vila Sion</option>
          <option value="Vila Sumaré">Vila Sumaré</option>
          <option value="Vila Telma">Vila Telma</option>
          <option value="Vila Tiradentes">Vila Tiradentes</option>
          <option value="Vila Toncheff">Vila Toncheff</option>
          <option value="Vila Tupã">Vila Tupã</option>
          <option value="Village do Lago I">Village do Lago I</option>
          <option value="Village do Lago II">Village do Lago II</option>
        </select>
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpar" onClick={() => {
              setTelefone("");
              setMora("");
              setBairro("");
              setNome("");
            }} />
      </form>
    </div>
  );
};

export default ConstruReal;
