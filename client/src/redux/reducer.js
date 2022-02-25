import Types from './types';

const initialState = {
  taskData: {},
};

const Reducer = (state = initialState, {type, data}) => {
  switch (type) {
    case Types.SaveTaskData:
      return {...state, ...data};
    default:
      return state;
  }
};

export default Reducer;
