import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";



const App = () => {
  return (
    <>
      <Header/>
        <section>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastrar/:id" element={<Register/>}/>
            <Route path="/cadastrar" element={<Register/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </section>
     
    </>
  );
}

export default App;
