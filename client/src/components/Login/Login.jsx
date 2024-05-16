import "./Login.css";
import Logo from "../../assets/images/svg/logo.svg";
import { loginUrl } from "../../Spotify";

function Login() {
  return (
    <div className="login">
      <img src={Logo} alt="Spotify logo" />
      <a href={loginUrl}>LOGIN WITH 2WAVES</a>
    </div>
  );
}

export default Login;
