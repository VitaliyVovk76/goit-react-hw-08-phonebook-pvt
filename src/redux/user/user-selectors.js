const getIsLoggedIn = (state) => state.user.isLoggedIn;
const getUsername = (state) => state.user.user.name;

const selectors = {
  getIsLoggedIn,
  getUsername,
};
export default selectors;
