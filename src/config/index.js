import axios from 'axios'

const baseURL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://backend-wilflix.herokuapp.com'

const api = axios.create({ baseURL })

export {baseURL , api}

