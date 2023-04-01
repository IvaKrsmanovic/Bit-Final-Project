import 'bootstrap/dist/css/bootstrap.min.css';
import ReportsPage from './components/ReportsPage/ReportsPage';
import Home from "./components/Home/Home";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return ( 
    <>
      <Header />
        <Home/>
        <ReportsPage/>
      <Footer />
    </>
  );
}

export default App;
