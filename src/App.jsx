import "./App.css";
import Header from "./Component/Layout/Header.jsx";
import Landing from "./pages/Home.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
function App() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;
