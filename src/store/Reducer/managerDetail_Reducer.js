// reducer.js
import TYPES from '../constant';

const initialState = {
  managerDetail: {},
  error: null,
  loading: false,
};

const ManagerDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.Manager_Detail:
      return {
        ...state,
        loading: true, 
      };
    case TYPES.Manager_Detail_SUCCESS:
      return {
        ...state,
        managerDetail: action.payload, 
        loading: false, 
        error: null,    
      };
    case TYPES.Manager_Detail_FAILURE:
      return {
        ...state,
        error: action.payload,  
        loading: false,         
      };
    default:
      return state;
  }
};

export default ManagerDetailReducer;
