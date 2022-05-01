import axios from 'axios';

var baseURL
if (process.env.NODE_ENV !== 'production') {
  baseURL = 'http://localhost:3000/tools'
} else {
  baseURL = ('')
}

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.get('/')
  .then(response => console.info(response.data))
  .catch((err) => console.warn('Não foi possivel se conectar com a API, \n\n',err)
)
