export const userLogIn = userId => {
  return {
    type: 'USER_LOG_IN',
    item: {
      userId,
    },
  };
};

export const userLogOut = () => {
  return {
    type: 'USER_LOG_OUT',
    item: {},
  };
};
