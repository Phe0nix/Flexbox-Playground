import Header from "./comp/Header/Header";
import Footer from "./comp/Footer/Footer";
import Home from "./pages/Home";
import './styles/variables.css';
import './styles/common.css';

function App() {
  return (
    <div className="appShell">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
