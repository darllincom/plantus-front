import LoginFooter from "./components/login-footer";
import LoginForm from "./components/login-form";
import LoginHeader from "./components/login-header";

export default function Login() {
  return (
    <div className="wrapper ml-20">
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </div>
  )
}