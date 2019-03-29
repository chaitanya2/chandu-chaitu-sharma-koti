import { ADD_DATA, ADD_NEW_DATA, ADD_BACKEND_DATA } from '../contants';

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
  return {
    type: ADD_BACKEND_DATA
  }
}

export { EditData, addNewData, addBackendData };
