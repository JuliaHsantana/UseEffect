import React, { useState, useEffect } from 'react'
import Amazon from "./assets/amazon.png"
import Sirio from "./assets/sirio.png"
import Vnw from "./assets/vnw.png"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

}
`
const Main = styled.main`
`
const Informacao = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
height: 40vh;
`
const Patrocinadores = styled.section` 
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60vh;
`

function App() {
  //     estado, setEstado 
  const [marca, setMarca] = useState(Vnw)

  useEffect(() => {

    if (marca === Vnw) {
      document.querySelector("div").style.backgroundColor = "#ff477e";
      document.querySelector("div").style.transition = "ease-in-out 0.8s";
    } 
    
    else if(marca === Amazon){
      document.querySelector("div").style.backgroundColor="#ff6d00"
    } 

    else if(marca === Sirio){
      document.querySelector("div").style.backgroundColor="#97dffc"
    }

  })



  return (
    <Main>

      <GlobalStyle />

      <Informacao>
        <img src={marca} alt="" />
        <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'
        </h2>
      </Informacao>

      <Patrocinadores>
        <img onClick={() => { setMarca(Amazon) }} src={Amazon} alt="" />
        <img onClick={() => { setMarca(Vnw) }} src={Vnw} alt="" />
        <img onClick={() => { setMarca(Sirio) }} src={Sirio} alt="" />
      </Patrocinadores>

    </Main>
  )
}

export default App