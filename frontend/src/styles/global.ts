import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


/*==== GLOBAL ==== */
:root {
  --Ink: #170C3A;
  --LigthInk: #8F8A9B;
  
  --DarkerBlue: #244AA8; 
  --Blue: #365DF0;
  --LightestBlue: #CAD6FC
  --MostLightestBlue: #E1E7FD

  --MosterDarkestWhite: #DEDCE1;
  --DarkerWhite: #F5F4F6  ;
  --white: #FFFFFF

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

html { 
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body {
  font-size: 93.75%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-font-smooth: antialiased;
  background-color: var(--DarkerWhite);
  /* background-image: linear-gradient(black, #544587);  */
  display: flex;
  flex-flow: column;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  font-weight: 700;
  font-family: 'Roboto Slab', serif; 
}

ul li{
  list-style-type: none;
}


.react-modal-overlay{
  background: rgba(0,0,0,0.5);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;

}
.react-modal-content{
  font-family: 'Source Sans Pro', sans-serif;
  width: 100%;
  max-width: 50rem;
  background: var(--DarkerWhite);
  padding: 3rem;
  position: relative;
  border-radius:  0.25rem;
  width: 42rem;
  height: 35rem;
  overflow:auto; 
}
.react-modal-close{
  color: var(--LigthInk);
  position: absolute;
  font-size: 1rem;
  right: 1.5rem;
  top:1.5rem;
  border: 0;
  background: transparent;
  cursor: pointer;

  &:hover{
    filter: brightness(0.7);
  }
}

/* .tooltip {
  position: relative;
  display: inline-block;
  :hover .tooltiptext {
    visibility: visible;
    animation: cssAnimation 7s forwards;
    }
    @keyframes cssAnimation {
      0%   {opacity: 1;}
      90%  {opacity: 0.8;}
      100% {opacity: 0;}
    }
    @-webkit-keyframes cssAnimation {
      0%   {opacity: 1;}
      90%  {opacity: 0.8;}
      100% {opacity: 0;}
    }
  .tooltiptext {
    visibility: hidden;
    width: auto;
    background-color: var(--gray-3);
    color: var(--white-1);
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -50%;
    opacity: 0;
    transition: opacity 0.3s;
  
    ::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: var(--gray-3) transparent transparent transparent;
    }
  }
} 
*/
`