import classes from "./Login.module.css";
import { logo } from "../../assets/images/index";
import { loginUrl } from "../../services/Spotify/auth";

function Login() {
  return (
    <div className={classes.login}>
      <img src={logo} alt="Spotify logo" />
      <a href={loginUrl}>LOGIN WITH 2WAVES</a>
    </div>
  );
}

export default Login;