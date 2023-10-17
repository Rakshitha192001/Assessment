import { CATEGORY_FILTER, SORT_CRITERIA} from "./actions";
const initialState = {
    data: [], 
    selectedCategory: null,
  };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CATEGORY_FILTER':
        return {
          ...state,
          selectedCategory: action.payload,
        };
      case 'SORT_CRITERIA':
     
        return {
          data: state.data.sort((a, b) => a.price - b.price),
        };
      default:
        return state;
    }
  };
  
  export default reducer;