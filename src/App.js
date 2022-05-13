import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classes from "./css/App.module.css"
import { logout, selectUser } from "./features/userSlice";
import { loadState } from "./localStorage";

const App = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userdetails = loadState();
    console.log(userdetails);
    // const user = userdetails.userState;
    // const username = user.user.username

    const handleLogout = (e) => {
        e.preventDefault();
        
        dispatch(logout());

        navigate('/')

    }
    return (
        <div className={classes.app}>
            <div className={classes.user}>
                <h1>Welcome {}</h1>
                <button onClick={(e) => handleLogout(e)}>Log Out</button>
                <Link to="/" target="_blank">Sign in with a different username</Link>
            </div>
            <div>
                <h2>Other signed in users</h2>
            </div>
        </div>
    )
};

export default App;
