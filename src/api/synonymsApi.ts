import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL
const api = axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type': 'application/json',
    },
})

export const addSynonym = (word1: string, word2: string)=>api.post('/synonyms/addSynonym',{word1,word2})

export const getSynonyms = (word: string)=>api.get(`/synonyms/${word}`)

export default api