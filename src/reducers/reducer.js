import { HANDLE_FLIP, WARNING } from "../actions/actions";

const reducer = (state, action)=>{
    switch (action.type){
        case 'HANDLE_FLIP':
            return {
                ...state, 
                flipStates: state.flipStates.map((flipState, index)=>{
                    if ( index == action.payload){
                        return true
                    } else {
                        return flipState
                    }
                }) 
            }  
           
        case 'WARNING':
            alert('You cannot view this advent day yet')
            return {...state}
        default:
            throw new Error(`no matching "${action.type}" action type`)
    }
}

export default reducer;