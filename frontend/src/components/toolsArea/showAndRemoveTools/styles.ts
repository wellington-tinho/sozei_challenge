import styled from 'styled-components';

export const Container = styled.div`
  ul{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    li{
      width: 100%;
      border: 1px solid black;
      border-radius: 0.5rem;
      padding: 1rem;
      background-color: #f5f5f5;
      margin-top: 1rem;

      .head{
        margin: 0 0 .5rem;
        display: flex;
        justify-content: space-between;

        button{
          padding: 0 1.5rem;
          height: 2.5rem;
          background: var(--Blue);
          color: var(--white);
          border-radius: 0.25rem;
          border: 0;
          font-size: 1rem;
          transition: filter 0.2s;
          font-weight:600;
          
          :hover{
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`