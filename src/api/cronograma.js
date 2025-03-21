
// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:3000';

// Função para pegar dados do servidor




export const getData = async () => {

    const response = await axios.get(`${API_URL}/cronograma`);


    if(response){
        return {"message" : "success"}; 
    }

  
    console.error('Erro na requisição GET:');
     
  
};

