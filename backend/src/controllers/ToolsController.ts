import { randomInt } from 'crypto';
import { Request, Response } from 'express';
import { tools } from '../api/db.json';

export interface ToolType {
  id: number;
  title: string;
  link: string; 
  description: string;
  tags: string[];
}

export type ToolInput = Omit<ToolType, 'id'>;

// inicia lista com valores do JSON
var toolsList = [...tools ]  // cria uma cópia da lista



export async function createTool(req: Request, res: Response) {
  const toolBody = req.body as ToolInput
  
  const newTool:ToolType = {
    id: randomInt(10000000, 100000000),
    ...toolBody
  }

  
  toolsList = [...toolsList,newTool ]
  return res.send(newTool)

 
}


export async function returnTools(req: Request, res: Response) {

  const tagQuery = Object.keys(req.query)[0]  
  const valueQuery = Object.values(req.query)[0] as string   
  

  if(tagQuery === 'q'){
    const auxToolsList = toolsList.filter(tool => {
      return (
        tool.title.toLowerCase().includes(valueQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(valueQuery.toLowerCase())  ||
        tool.tags.some(tag => tag.toLowerCase().includes(valueQuery.toLowerCase())) 
      )
    })
    
   return res.status(200).json(auxToolsList)
  }

  
  if(tagQuery === 'tags_like'){
    const auxToolsList = toolsList.filter(tool => {
      return tool.tags.some(tag => tag.includes(valueQuery))
    })
   return res.status(200).json(auxToolsList)
  }
  
 return res.status(200).json(toolsList)
 
}

export async function removeTool(req: Request, res: Response) {
  const { id } = req.params

  const auxTools = toolsList.filter(tool => tool.id !== Number(id));
  toolsList = [...auxTools]
  
  

  // deletar tool no banco de dados
  return res.status(200).send()
}
