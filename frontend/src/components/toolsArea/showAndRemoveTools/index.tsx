import { useTools } from '../../hooks/useTools';
import { Container } from './styles';




export function ShowAndRemoveTools(){
  const { tools:toolsList, removeTools } = useTools();

  
  return (
    <Container>
     
     <ul>
        {toolsList?.map(tool => {
          
          return(

            <li key={tool.id}>

              <div className="head">
                <a href={tool.link} className="link">{tool.title}</a>
                <button className="remove" onClick={()=>removeTools(tool.id)}>Remover</button>
              </div>

              <p>{tool.description}</p>
              
              <div className="tags">
                {tool.tags.map(tag => {
                  return(
                    <span key={tag}> #{tag}</span>
                  )
                })}
              </div>

            </li>
          )
        })}
     </ul>
    </Container>
  );
}