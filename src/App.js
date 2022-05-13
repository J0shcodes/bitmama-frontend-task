import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classes from "./css/App.module.css"
import { logout } from "./features/userSlice";
import { loadState, loadCurrentState } from "./localStorage";
const currentState = loadCurrentState()

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
                <div className={classes.current_user}>
                <h1>Welcome {userdetails.username}</h1>
                <button onClick={(e) => handleLogout(e)}>Log Out</button>
                <Link to="/" target="_blank">Sign in with a different username</Link>
                </div>                
                <hr/>
                <div className={classes.users}>
                <h2>You and other signed in users</h2>
                {currentState.map(user => (
                    <div className={classes.container}>
                    <p>{user.username}<span><button style={{background: "blue"}}>log out</button></span></p>
                    </div>
                ))}
                
                </div>
            </div>
        </div>
    )
};

export default App;
