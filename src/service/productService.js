// import axios from "axios";
import  {gifts} from '../data/gifts'
// const API_URL = "https://api.example.com/products";

export const getProductById = (id) => {
  
//   return axios.get(`${API_URL}/${id}`);
const filteredGift = gifts.filter(gift => gift.id === id);

    return filteredGift;
};
