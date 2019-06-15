const initialState = {
  userLog: false,
  userId: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOG_IN':
      return { ...state, userLog: true, userId: action.item.userId };

    case 'USER_LOG_OUT':
      return { ...state, userLog: false, userId: '' };

    default:
      return state;
  }
};
