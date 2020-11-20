import * as ActionTypes from '../action/type';

const initialState = {
   username:'',
   type:'',
   results:[],
   defaultSortMethod:''
}

function reducer(state=initialState, action){
    switch(action.type){
        case ActionTypes.GET_HEROES: {
            const { values, results } = action;
            const {username, type} = values;
            let defaultSortMethod = '';
            if(type === 'comics'){
                defaultSortMethod = 'comicsDescend';
            }else if(type === 'series'){
                defaultSortMethod = 'seriesDescend';
            } else {
                defaultSortMethod = 'storiesDescend';
            }
            return {
                ...state,
                username,
                type,
                results,
                defaultSortMethod
            }
        }
        default:{
            return state;
        }
    }
}

export default reducer;
