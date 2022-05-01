import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 600;
    color: var(--DarkerBlue);
    font-size: 1.6rem;
    margin-bottom: 2rem;

  }
    div{
      /* border: 1px solid var(--background); */

      div{
        display: flex;
        background: var(--MosterDarkestWhite);
        
        & + div{
          margin-top: 1rem;
        }
        
        p{
          width: 62%;
          padding: 0 1rem;
          height: 3rem;
          border-radius: 0.25rem;
          font-size: 1rem;
          font-weight: 600;
          border: 1px solid var(--LigthInk);
          color: var(--LigthInk);
          display: flex;
          align-items: center;
          :hover{
            filter: brightness(0.9);
          }

        }
        .description{
          height: 4rem;
        }
       input{
         width: 100%;
         padding: 0 1rem;
         height: 3rem;
         border-radius: 0.25rem;
         background: var(--white);
         border: 1px solid var(--LigthInk);
         /* font-weight: 400; */
         font-size: 1rem;
        }
        
      }
    
      button{
        width: 100%;
        padding: 0 1.5rem;
        height: 3.5rem;
        background: var(--Blue);
        color: var(--white);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        font-weight:600;
        
        :hover{
          filter: brightness(0.9);
        }
      }
    }

`;
