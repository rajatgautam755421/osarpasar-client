import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Track from "./pages/Track/Track";
import Contact from "./pages/Contact/Contact";
import Shipment from "./pages/Shipment/Shipment";
import Services from "./pages/Services/Services";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Toaster } from "react-hot-toast";
import Dashboard from "./component/Dashboard/Dashboard";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ScrollRestoration from "./component/ScrollRestoration";

function App() {
  return (
    <>
      <MessengerCustomerChat pageId="113940191297927" appId="395779845512437" />
      <Toaster></Toaster>
      <ScrollRestoration />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/track"
          element={
            <>
              <Navbar />
              <Track />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route
          path="/shipment"
          element={
            <>
              <Navbar />
              <Shipment />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <Navbar />
              <Services />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
