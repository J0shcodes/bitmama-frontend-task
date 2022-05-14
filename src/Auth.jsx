import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./css/Auth.module.css";
import { login } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
import {saveUser} from './localStorage';
import store from './app/store'

const Auth = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    
    setUsername(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();

    store.subscribe(() => {
      saveUser({
        username: username,
        status: 'active'
      })
    })

    dispatch(
      login({
        username: username.toLowerCase(),
        loggedIn: true
      })
    )

    
    navigate('/');

  };

  return (
    <>
      <div className={classes.background}>
        <div className={classes.shape}></div>
        <div className={classes.shape}></div>
      </div>

      <div className={classes.auth}>
        <h1 style={{ color: "#fff" }}>Sign In</h1>
        <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
          <div className={classes.signin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="@janedoe"
              value={username}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;
