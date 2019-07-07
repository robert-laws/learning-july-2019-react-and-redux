import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d5e61504b225c8c0256c8880e2ad04af5932a345b966ccefaf6b6ddaefb4e3e1'
  }
})