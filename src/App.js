import logo from "./logo.svg";

import Header from "./components/Header";
import Body from "./components/Body";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
