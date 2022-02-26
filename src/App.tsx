import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuthuntication = useSelector((state:any) => state.authReducer.isAuthuntication)
  return (
    <>
      <Header />
     { isAuthuntication? <UserProfile/> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
