import * as ActionTypes from '../action/type';

const initialState = {
   username:'',
   type:'',
   results:[]
}

function reducer(state=initialState, action){
    switch(action.type){
        case ActionTypes.GET_HEROES: {
            const { values, results } = action;
            const {username, type} = values;
        
            return {
                ...state,
                username,
                type,
                results
            }
        }
        default:{
            return state;
        }
    }
}

export default reducer;
