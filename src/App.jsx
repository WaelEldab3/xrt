import "./App.css";
import Header from "./Component/Layout/Header.jsx";
import Footer from "./Component/Footer/FooterSection.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer/>
    </>
  );
}

export default App;
