import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { ToolInput, ToolType } from '../types/tools';
 
interface ToolsProviderProps{
  children: ReactNode;
}


interface ToolsContextData{
  tools: ToolType[];
  removeTools: (toolId: number) => void;
  addTools: (tool: ToolInput) => void;
  searchTools: (text: string) => void;
}

const ToolsContext = createContext<ToolsContextData>({} as ToolsContextData);



export function ToolsProvider({ children }: ToolsProviderProps){
  const [tools, setTools] = useState<ToolType[]>([]);

  
  useEffect(() => {
    api.get('/')
      .then(response => setTools(response.data))
      .catch((err) => console.warn('Não foi possivel se conectar com a API, \n\n',err)
    )
  }, []);

    const removeTools = async (toolId:number) =>{
      const response = await api.delete(`/${toolId}`);
      const { status } = response;
  
      if (status === 200) {
        const auxTools = tools.filter(tool => tool.id !== toolId);
        setTools(auxTools);
      }
    }


    const addTools = async (toll:ToolInput)=>{
      const response = await api.post('',toll);
      const { data } = response;
      
      setTools([...tools,data]);
    }


    const searchTools = async (text: string) =>{
      const response = await api.get(`${text}`)
      const { status,data } = response;
      
      if (status === 200) {
        setTools(data)
      }
    }

   

  return (
    <ToolsContext.Provider value={{ tools, removeTools, addTools, searchTools }}>
      {children}
    </ToolsContext.Provider>
  );
}


export function useTools(){
  const context = useContext(ToolsContext);
  return context;
}