import * as ActionTypes from './type';
import md5 from 'crypto-js/md5';
import axios from 'axios';
import { toast } from 'react-toastify';

const pubkey = "6d85f0f5491850be211013e067eb64e7";
const pvtkey = "226c377f88cf5c829e37eb9cface4434b50e1017";

const ts = new Date().getTime();
const apikey = pubkey;
const message = ts+pvtkey+pubkey;
const hash = md5(message).toString();

export const enter = () => (dispatch) => {
    dispatch({
        type:ActionTypes.ENTER
    })
}

const alertMessage = () => {
    console.log('assert');
    const emptyCallback = () => {};
        const config = {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
            onClose: emptyCallback
          };
        const message = <span>System not working, please try again</span>
        toast['error'](message, config)
}

export const getHeroes = (values, history) => async (dispatch) => {
    const char = values.username.substr(0,1);
    axios.get(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${char}&limit=10&ts=${ts}&apikey=${apikey}&hash=${hash}`).then((res) => {
        if(res.data.code === 200) {
            const {results} = res.data.data;
            dispatch({
                type:ActionTypes.GET_HEROES,
                values,
                results
            })
            history.push('/result');
        }else {
           alertMessage()
        }
        
    }).catch((err) => {
        alertMessage();
    })
}