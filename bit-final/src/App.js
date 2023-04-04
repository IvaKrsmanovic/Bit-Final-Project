import "bootstrap/dist/css/bootstrap.min.css";
import ReportsPage from "./components/ReportsPage/ReportsPage";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes, BrowserRouter } from "react-router-dom"
import PopUp from "./components/PopUp/PopUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/candidates/:id" element={<ReportsPage />} />
          
        </Routes> */}
        <PopUp/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
