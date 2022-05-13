import { Link } from "react-router-dom";

export const webPage = (userdetails, currentState, classes, handleLogout) => {
  if (!userdetails) {
    if (currentState) {
      const lastUser = currentState[currentState.length - 1];
      return (
        <div className={classes.app}>
          <div className={classes.user}>
            <div className={classes.current_user}>
              <h1>Welcome {lastUser.username}</h1>
              <button onClick={(e) => handleLogout(e)}>Log Out</button>
              <Link to="/login" target="_blank">
                Sign in with a different username
              </Link>
            </div>
            <hr />
            <div className={classes.users}>
              <h2>You and other signed in users</h2>
              {currentState.map((user) => (
                <div className={classes.container}>
                  <p>
                    {lastUser.username}
                    <span>
                      <button style={{ background: "blue" }}>log out</button>
                    </span>
                  </p>
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
              <p>No data to display <span><Link to="/login">Login</Link></span></p>            
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
            <button onClick={(e) => handleLogout(e)}>Log Out</button>
            <Link to="/login" target="_blank">
              Sign in with a different username
            </Link>
          </div>
          <hr />
          <div className={classes.users}>
            <h2>You and other signed in users</h2>
            {currentState.map((user) => (
              <div className={classes.container}>
                <p>
                  {user.username}
                  <span>
                    <button style={{ background: "blue" }}>log out</button>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
