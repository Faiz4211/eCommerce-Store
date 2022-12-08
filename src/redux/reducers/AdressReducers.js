import { ADD_ADRESS, DELETE_ADRESS } from '../ActionTypes';

const AdressReducers = (state = [], action) => {
    switch (action.type) {
        // function to add adress 
        case ADD_ADRESS:
            return [...state, action.payload];
        case DELETE_ADRESS:
            const deletedArray1 = state.filter((item, index) => {
                return index !== action.payload
            })
            return deletedArray1;
        default:
            return state;
    }
}
export default AdressReducers;