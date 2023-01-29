import { useDispatch, useSelector } from "react-redux";
import userSelectors from "../../redux/user/user-selectors";
import userOperations from "../../redux/user/user-operations";
const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(userSelectors.getUsername);
  return (
    <div>
      <span>Welcom, {name}</span>
      <button type="button" onClick={() => dispatch(userOperations.logOut())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
