import { Router } from 'express'
import { createTool, removeTool, returnTools } from './controllers/ToolsController'


export const routes = Router()

routes.get('/tools', returnTools)
routes.post('/tools', createTool)
routes.delete('/tools/:id', removeTool)