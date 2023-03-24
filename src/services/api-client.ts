import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '8d5db4c7669440f896b688c23591dce8',
  },
})
