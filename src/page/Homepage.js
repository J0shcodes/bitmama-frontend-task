import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import classes from "../css/App.module.css";
import { logout } from "../features/userSlice";
import { loadState, loadCurrentState } from "../localStorage";
import { userLogout } from "../helper/logout";
const currentState = loadCurrentState();

const WebPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdetails = loadState();
  console.log(userdetails);
  // const user = userdetails.userState;
  // const username = user.user.username

  const handleLogout = (currentState, attr, username) => {
    dispatch(logout());

    userLogout(currentState, attr, username);

    navigate("/login");
  };

  const handleUserLogout = (currentState, attr, username) => {
    dispatch(logout());

    userLogout(currentState, attr, username);

    window.location.reload();
  };

  if (!userdetails) {
    if (currentState) {
      const lastUser = currentState[currentState.length - 1];
      return (
        <div className={classes.app}>
          <div className={classes.user}>
            <div className={classes.current_user}>
              <h1>Welcome {lastUser.username}</h1>
              <button
                onClick={() =>
                  handleLogout(currentState, "username", lastUser.username)
                }
              >
                Log Out
              </button>
              <Link to="/login" target="_blank">
                Sign in with a different username
              </Link>
            </div>
            <hr />
            <div className={classes.users}>
              <h2>You and other signed in users</h2>
              {currentState.map((user) => (
                <div className={classes.container}>
                  <p className={classes.username}>
                    username: {user.username}
                    <span className={classes.user_logout}>
                      <button
                        style={{ background: "blue" }}
                        onClick={() =>
                          handleUserLogout(
                            currentState,
                            "username",
                            user.username
                          )
                        }
                      >
                        log out
                      </button>
                    </span>
                  </p>
                  <small>Status: active</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.app}>
          <div className={classes.login}>
            <p>
              No data to display{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className={classes.app}>
        <div className={classes.user}>
          <div className={classes.current_user}>
            <h1>Welcome {userdetails.username}</h1>
            <button
              onClick={() =>
                handleLogout(currentState, "username", userdetails.username)
              }
            >
              Log Out
            </button>
            <Link to="/login" target="_blank">
              Sign in with a different username
            </Link>
          </div>
          <hr />
          <div className={classes.users}>
            <h2>You and other signed in users</h2>
            {currentState.map((user) => (
              <div className={classes.container}>
                <p className={classes.username}>
                  username: {user.username}
                  <span className={classes.user_logout}>
                    <button
                      style={{ background: "blue" }}
                      onClick={() =>
                        handleUserLogout(
                          currentState,
                          "username",
                          user.username
                        )
                      }
                    >
                      log out
                    </button>
                  </span>
                </p>
                <small>Status: active</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default WebPage;
