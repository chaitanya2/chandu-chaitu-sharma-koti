import {
  ADD_DATA,
  ADD_NEW_DATA,
  ADD_BACKEND_DATA
} from '../constants/constants';

const EditData = payload => {
  return {
    type: ADD_DATA,
    payload: payload
  };
};

const addNewData = payload => {
  return {
    type: ADD_NEW_DATA,
    payload: payload
  };
};

const addBackendData = () => {
  debugger;
  console.log('(After Click)2:addBackendData() of action excuted[action file]');
  return {
    type: ADD_BACKEND_DATA
  };
};

export { EditData, addNewData, addBackendData };
