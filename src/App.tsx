import "./App.css";
import LoginForm from "./pages/Login/Login";
import { useUserContext } from "./context/UserContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Skeleton } from "primereact/skeleton";
import Nav from "./component/Menu/Menu";
import "./../public/primereact.min.css";
import "./../public/theme.css";
import Chat from "./pages/Chat";

function App() {
  const { user, isLoding } = useUserContext();

  if (isLoding) {
    return <Skeleton />;
  }

  if (!user) {
    return (
      <Routes>
        <Route path="*" element={<LoginForm />} />
      </Routes>
    );
  }
  return (
    <div className="flex">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
