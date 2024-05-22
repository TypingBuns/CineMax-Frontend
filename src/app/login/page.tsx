import {SignIn} from "@/components/sign-in";
import {Authentication} from "@/components/Authentication";
const Login = () => {

  return(
    <Authentication>
      <p className="text-2xl">Logowanie</p>
      <SignIn />
    </Authentication>
  );
}

export default Login;