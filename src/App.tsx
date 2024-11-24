import "./App.css";
import React, { useState, useRef } from "react";

import contrureal from "./assets/construreal.jpg";
import imagem1 from "./assets/imagem1.jpg";
import imagem2 from "./assets/imagem2.jpg";
import imagem3 from "./assets/imagem3.jpg";


const ConstruReal = () => {
  
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
          <img
            src={contrureal}
            className="img-banner"
            alt="ConstruReal Logo"
          />
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

          <form>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="telefone">Telefone:</label>
            <input type="text" id="telefone" name="telefone" required />

            <p>Você reside em Montes Claros?</p>
            <label>
              <input type="radio" name="reside" value="sim" /> Sim
            </label>
            <label>
              <input type="radio" name="reside" value="nao" /> Não
            </label>

            <p>Qual Bairro?</p>
            <select name="bairro" id="bairro">
              <option value="acacias">Acácias</option>
              <option value="alcides-rabelo">Alcides Rabelo</option>
              <option value="alice-maia">Alice Maia</option>
              <option value="alterosas">Alterosas</option>
              <option value="alto-da-boa-vista">Alto da Boa Vista</option>
              <option value="alto-floresta">Alto Floresta</option>
              <option value="alto-sao-joao">Alto São João</option>
              <option value="amazonas">Amazonas</option>
              <option value="antonio-pimenta">Antônio Pimenta</option>
              <option value="area-rural-montes-claros">
                Área Rural de Montes Claros
              </option>
              <option value="augusta-mota">Augusta Mota</option>
              <option value="barcelona-park">Barcelona Park</option>
              <option value="bela-paisagem">Bela Paisagem</option>
              <option value="bela-vista">Bela Vista</option>
              <option value="belvedere">Belvedere</option>
              <option value="camilo-prates">Camilo Prates</option>
              <option value="candida-camara">Cândida Câmara</option>
              <option value="canelas">Canelas</option>
              <option value="carmelo">Carmelo</option>
              <option value="centro">Centro</option>
              <option value="chacara-ceres">Chácara Ceres</option>
              <option value="chacara-recanto-dos-aracas">
                Chácara Recanto dos Araçás
              </option>
              <option value="chacaras-paineiras">Chácaras Paineiras</option>
              <option value="chacaras-paraiso">Chácaras Paraíso</option>
              <option value="cidade-industrial">Cidade Industrial</option>
              <option value="cidade-nova">Cidade Nova</option>
              <option value="cidade-santa-maria">Cidade Santa Maria</option>
              <option value="cintra">Cintra</option>
              <option value="clarindo-lopes">Clarindo Lopes</option>
              <option value="colorado">Colorado</option>
              <option value="condominio-pai-joao">Condomínio Pai João</option>
              <option value="conjunto-chiquinho-guimaraes">
                Conjunto Chiquinho Guimarães
              </option>
              <option value="conjunto-ciro-dos-anjos">
                Conjunto Ciro dos Anjos
              </option>
              <option value="conjunto-clarice-alves-vieira">
                Conjunto Clarice Alves Vieira
              </option>
              <option value="conjunto-cristo-rei">Conjunto Cristo Rei</option>
              <option value="conjunto-havai">Conjunto Havaí</option>
              <option value="conjunto-joaquim-costa">
                Conjunto Joaquim Costa
              </option>
              <option value="conjunto-olga-benario">
                Conjunto Olga Benário
              </option>
              <option value="conjunto-residencial-jk">
                Conjunto Residencial JK
              </option>
              <option value="delfino-magalhaes">Delfino Magalhães</option>
              <option value="distrito-industrial">Distrito Industrial</option>
              <option value="dona-gregoria">Dona Gregória</option>
              <option value="dos-mangues">Dos Mangues</option>
              <option value="duque-de-caxias">Duque de Caxias</option>
              <option value="edgar-pereira">Edgar Pereira</option>
              <option value="eldorado">Eldorado</option>
              <option value="esplanada">Esplanada</option>
              <option value="francisco-peres-i">Francisco Peres I</option>
              <option value="funcionarios">Funcionários</option>
              <option value="guaruja">Guarujá</option>
              <option value="ibituruna">Ibituruna</option>
              <option value="inconfidentes">Inconfidentes</option>
              <option value="independencia">Independência</option>
              <option value="interlagos">Interlagos</option>
              <option value="ipiranga">Ipiranga</option>
              <option value="jaragua">Jaraguá</option>
              <option value="jardim-alegre">Jardim Alegre</option>
              <option value="jardim-alvorada">Jardim Alvorada</option>
              <option value="jardim-brasil">Jardim Brasil</option>
              <option value="jardim-italia">Jardim Itália</option>
              <option value="jardim-liberdade">Jardim Liberdade</option>
              <option value="jardim-olimpico">Jardim Olímpico</option>
              <option value="jardim-palmeiras">Jardim Palmeiras</option>
              <option value="jardim-panorama">Jardim Panorama</option>
              <option value="jardim-parque-morada-do-sol">
                Jardim Parque Morada do Sol
              </option>
              <option value="jardim-planalto">Jardim Planalto</option>
              <option value="jardim-primavera">Jardim Primavera</option>
              <option value="jardim-sao-geraldo">Jardim São Geraldo</option>
              <option value="jardim-sao-luiz">Jardim São Luiz</option>
              <option value="joao-alves">João Alves</option>
              <option value="joao-botelho">João Botelho</option>
              <option value="joao-gordo">João Gordo</option>
              <option value="jose-carlos-vale-de-lima">
                José Carlos Vale de Lima
              </option>
              <option value="jose-correia-machado">José Correia Machado</option>
              <option value="juscelino-kubitschek">Juscelino Kubitschek</option>
              <option value="loteamento-jardim-niemeyer">
                Loteamento Jardim Niemeyer
              </option>
              <option value="loteamento-novo-jaragua">
                Loteamento Novo Jaraguá
              </option>
              <option value="loteamento-recanto-das-aguas">
                Loteamento Recanto das Águas
              </option>
              <option value="loteamento-reserva-real">
                Loteamento Reserva Real
              </option>
              <option value="lourdes">Lourdes</option>
              <option value="major-prates">Major Prates</option>
              <option value="maracana">Maracanã</option>
              <option value="melo">Melo</option>
              <option value="monte-alegre">Monte Alegre</option>
              <option value="monte-carmelo">Monte Carmelo</option>
              <option value="morada-da-serra">Morada da Serra</option>
              <option value="morada-do-parque">Morada do Parque</option>
              <option value="morada-do-sol">Morada do Sol</option>
              <option value="morada-do-sol-ii">Morada do Sol II</option>
              <option value="morrinhos">Morrinhos</option>
              <option value="nossa-senhora-aparecida">
                Nossa Senhora Aparecida
              </option>
              <option value="nossa-senhora-das-gracas">
                Nossa Senhora das Graças
              </option>
              <option value="nossa-senhora-de-fatima">
                Nossa Senhora de Fátima
              </option>
              <option value="nova-america">Nova América</option>
              <option value="nova-morada">Nova Morada</option>
              <option value="nova-suica">Nova Suiça</option>
              <option value="novo-delfino">Novo Delfino</option>
              <option value="panorama-ii">Panorama II</option>
              <option value="parque-pampulha">Parque Pampulha</option>
              <option value="planalto">Planalto</option>
              <option value="raul-lourenco">Raul Lourenço</option>
              <option value="regina-peres">Regina Peres</option>
              <option value="renascenca">Renascença</option>
              <option value="residencial-minas-gerais">
                Residencial Minas Gerais
              </option>
              <option value="residencial-monte-siao">
                Residencial Monte Sião
              </option>
              <option value="residencial-sul-ipês">Residencial Sul Ipês</option>
              <option value="residencial-vitoria">Residencial Vitória</option>
              <option value="roxo-verde">Roxo Verde</option>
              <option value="sagrada-familia">Sagrada Família</option>
              <option value="santa-cecilia">Santa Cecília</option>
              <option value="santa-eugenia">Santa Eugênia</option>
              <option value="santa-laura">Santa Laura</option>
              <option value="santa-lucia">Santa Lúcia</option>
              <option value="santa-rafaela">Santa Rafaela</option>
              <option value="santa-rita-i">Santa Rita I</option>
              <option value="santa-rita-ii">Santa Rita II</option>
              <option value="santo-amaro">Santo Amaro</option>
              <option value="santo-antonio">Santo Antônio</option>
              <option value="santo-expedito">Santo Expedito</option>
              <option value="santo-inacio">Santo Inácio</option>
              <option value="santo-inacio-ii">Santo Inácio II</option>
              <option value="santos-dumont">Santos Dumont</option>
              <option value="santos-reis">Santos Reis</option>
              <option value="sao-bento">São Bento</option>
              <option value="sao-geraldo">São Geraldo</option>
              <option value="sao-geraldo-ii">São Geraldo II</option>
              <option value="sao-jose">São José</option>
              <option value="sao-judas-tadeu">São Judas Tadeu</option>
              <option value="sao-lucas">São Lucas</option>
              <option value="sao-mateus">São Mateus</option>
              <option value="sapucaia">Sapucaia</option>
              <option value="tancredo-neves">Tancredo Neves</option>
              <option value="todos-os-santos">Todos os Santos</option>
              <option value="universitario">Universitário</option>
              <option value="vargem-grande-ii">Vargem Grande II</option>
              <option value="veneza-parque">Veneza Parque</option>
              <option value="vera-cruz">Vera Cruz</option>
              <option value="vila-analia">Vila Anália</option>
              <option value="vila-antonio-narciso">Vila Antônio Narciso</option>
              <option value="vila-atlantida">Vila Atlântida</option>
              <option value="vila-aurea">Vila Áurea</option>
              <option value="vila-brasilia">Vila Brasília</option>
              <option value="vila-campos">Vila Campos</option>
              <option value="vila-castelo-branco">Vila Castelo Branco</option>
              <option value="vila-exposicao">Vila Exposição</option>
              <option value="vila-fenix">Vila Fenix</option>
              <option value="vila-greice">Vila Greice</option>
              <option value="vila-guilhermina">Vila Guilhermina</option>
              <option value="vila-ipiranga">Vila Ipiranga</option>
              <option value="vila-itatiaia">Vila Itatiaia</option>
              <option value="vila-luiza">Vila Luiza</option>
              <option value="vila-maria-candida">Vila Maria Cândida</option>
              <option value="vila-mauriceia">Vila Mauricéia</option>
              <option value="vila-oliveira">Vila Oliveira</option>
              <option value="vila-real">Vila Real</option>
              <option value="vila-regina">Vila Regina</option>
              <option value="vila-santa-cruz">Vila Santa Cruz</option>
              <option value="vila-santa-monica">Vila Santa Mônica</option>
              <option value="vila-senhor-do-bonfim">
                Vila Senhor do Bonfim
              </option>
              <option value="vila-sion">Vila Sion</option>
              <option value="vila-sumare">Vila Sumaré</option>
              <option value="vila-telma">Vila Telma</option>
              <option value="vila-tiradentes">Vila Tiradentes</option>
              <option value="vila-toncheff">Vila Toncheff</option>
              <option value="vila-tupa">Vila Tupã</option>
              <option value="village-do-lago-i">Village do Lago I</option>
              <option value="village-do-lago-ii">Village do Lago II</option>
            </select>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdKf_Qlbu6JHxmdumFV-X72N9K3LeKC08FbHai-ghB1wXUv9w/viewform?embedded=true" width="640" height="1000" >Carregando…</iframe>
            <input type="submit" value="Enviar" />
            <input type="reset" value="Limpar" />
          </form>

        </div>
      </body>
    </>
  );
};

export default ConstruReal;
