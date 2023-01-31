const getIsLoggedIn = (state) => state.user.isLoggedIn;
const getUsername = (state) => state.user.user.name;
const getIsFetchingCurrent = (state) => state.user.isFetchingCurrentUser;

const selectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default selectors;
