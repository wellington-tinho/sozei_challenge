import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;



  

  div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    /* gap: 1rem; */

    input.search{
      margin-right: 1rem;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      background-color: #f5f5f5;
    }

    input[type="checkbox"]{
      //estilo do checkbox
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      margin: 0 1rem;
      accent-color: #74992e;
      
    }
    label{
      margin-right: 1rem;
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      background-color: #f5f5f5;
    }
  }
  button{
    //Estilo do botão
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;
    
  }
`

