import {
  ADD_DATA,
  ADD_NEW_DATA,
  ADD_BACKEND_DATA_SUCCESS,
  ADD_BACKEND_DATA
} from '../constants/constants';
import init from '../utils/init';
// const init = {};

const firstReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_DATA:
      let Operation2 = [...state.dataSource];
      let editUserInfo = { ...action.payload.editUserInfo };
      for (var item in Operation2) {
        if (Operation2[item].key === editUserInfo.key) {
          Operation2[item] = editUserInfo;
        }
        console.log('this is Operation2 ' + Operation2);
      }

      return {
        ...state,
        dataSource: Operation2
      };

    case ADD_NEW_DATA:
      action.payload.addData.key =
        state.dataSource.length > 0
          ? parseInt(state.dataSource[state.dataSource.length - 1].key) + 1
          : 1;
      console.log(action.payload.addData);
      return {
        ...state,
        dataSource: [...state.dataSource, { ...action.payload.addData }]
      };
    case ADD_BACKEND_DATA_SUCCESS:
      debugger;
      console.log('(After Click)6.reached to ADD_BACKEND_DATA_SUCCESS reducer');
      return { ...state, starwardata: { ...action.payload } };

    case ADD_BACKEND_DATA:
      debugger;
      console.log('(After Click)3:in redux ADD_BACKEND_DATA');
      return { ...state };
    default:
      return { ...state };
  }
};
export default firstReducer;
