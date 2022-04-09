import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        {/* <Route path="/login" exact element={<Login />}></Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
