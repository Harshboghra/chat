import "./App.css";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import LoginForm from "./pages/Login/Login";
import { useUserContext } from "./context/UserContext";

function App() {
  const { user, isLoding } = useUserContext();
  return <>{!isLoding && <>{user ? <>login deno</> : <LoginForm />}</>}</>;
}

export default App;
