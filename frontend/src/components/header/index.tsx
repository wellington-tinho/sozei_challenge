import styled from 'styled-components';

const Container = styled.header`
  color: var(--white) ;
  background: #170C3A;  
  padding: 1rem 0;
  

  .header{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* justify-content: center; */
    
    width: 80%;
    margin: 0 auto ;

    h1,h2{
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 2.4rem;
    }
    div{
      display: flex;
      align-items: baseline;
      gap: 1rem;

      h2{
        font-size: 1.4rem;
      }
      h3{
        font-family: 'PT Mono', monospace;
        font-size: .8rem;
      }
    }

    @media (max-width: 1080px){
      width: 60%;
    }
  
  }
`

export function Header(){
  return (
    <Container>
      <div className="header">

        <h1>VUTTR</h1>
        <div>
          <h2>Very useful tools to remember</h2> 
          -
          <h3>Sozei™</h3>
        </div>
      </div>
    </Container>
  );
}


