const initialState = {
  nickname: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NICKNAME':
      return {
        ...state,
        nickname: action.nickname
      };
    default:
      return state;
  }
};

export default user;
