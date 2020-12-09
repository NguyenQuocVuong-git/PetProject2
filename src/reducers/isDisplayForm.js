const initialState = false;

const displayReducer = (state = initialState , action ) =>{
    switch(action.type){
        case "OPEN_FORM" : {
            state = true
            return state;
        }
        case "CLOSE_FORM" : {
            state = false
            return false;
        }
        default : return state; 
    }
}

export default displayReducer;