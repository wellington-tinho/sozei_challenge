import styled from 'styled-components';
import { SearchAndAddTools } from './searchAndAddTools';
import { ShowAndRemoveTools } from './showAndRemoveTools';

const Container = styled.div`
  background: var(--color-primary);
  margin: 2rem auto 0;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  /* align-items: center; */
  width: 60rem;


  @media (max-width: 1080px){
      width: 50rem;
    }
`;


export function ToolsArea(){
 

  return (
    <Container>
      <SearchAndAddTools />
      <ShowAndRemoveTools/> 
    </Container>

  );

} 
