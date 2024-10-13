// action.js
import axios from 'axios';
import TYPES from '../constant';
import { Manager_Details } from '../../../ApiEndPoints.jsx/ApiEndPoints';

export const getManagerDetail = () => {
  return async (dispatch) => {
    dispatch({ type: TYPES.Manager_Detail }); // Set loading state to true
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DATABASE_URL}${Manager_Details}`, {
        withCredentials: true,
      });
      console.log(response)
      const success = response?.data?.success || false;
      if (success) {
        console.log("sucess" , response , response.data.data)
        dispatch({
          type: TYPES.Manager_Detail_SUCCESS,
          payload: response.data.data,
        });
      } else {
        dispatch({
          type: TYPES.Manager_Detail_FAILURE,
          payload: response.data.message,
        });
      }
    } catch (error) {
        console.log(error)
      dispatch({
        type: TYPES.Manager_Detail_FAILURE,
        payload: error.message,
      });
    }
  };
};
