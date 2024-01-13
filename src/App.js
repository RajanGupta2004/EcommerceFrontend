import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
// import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Category from "./pages/Category";
import PrivateRoute from "./components/PrivateComponent/PrivateRoute";
import Cart from "./pages/Cart";
import Admin from "./components/Admin/Admin";
import SingleP from "./pages/single/SingleP";
import AllSingleP from "./pages/AllSinglep/AllSingleP";
import Layout from "./components/layout/Layout";
import PaymentPage from "./pages/Payment/PaymentPage";
// import Cheakout from "./components/cheakout/Cheakout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/category" element={<Category />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="#" element={<h1>userlogout</h1>} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/single/:id" element={<SingleP />} />
          <Route path="/allsingle/:id" element={<AllSingleP />} />
          <Route path="/about" element={<About />} />
          {/* // private route implemenation */}
          <Route element={<PrivateRoute />}>
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/payment" element={<PaymentPage />} />
            {/* <Route path="/*" element={<PageNotFound />} /> */}
          </Route>
          <Route
            path="/admin"
            element={
              <Layout>
                <Admin />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* <Cheakout /> */}
    </>
  );
}

export default App;
