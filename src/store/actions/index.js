import axios from 'axios';
import { ON_TEXT_CHANGE } from './actions';

const apiUrl = `https://pixabay.com/api`;
const apiKey = '9189435-9f1e00129bd25c9bcbe88ef08';
const searchText = '';
const  amount =  15;

export function onTextchange() {
    return function(dispatch) {
        axios.get(`${apiUrl}/?key=${apiKey}&q=${searchText}&image_type=photo&per_page=${amount}&safesearch=true`)
        .then(res => {
            dispatch({
                type: ON_TEXT_CHANGE,
                images: res.data.hits
              });
        })
        .catch((err) => {
            console.log(err);
        })
        } 
    }