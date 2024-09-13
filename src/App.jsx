import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Category from "./Pages/Category";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Details } from "./Pages/Details";
// import { Content } from "./Pages/Content"; // there's no "Content" file in your pages folder
import { Payment } from "./Pages/Payment";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/details" element={<Details />} />
          {/* <Route path="/content" element={<Content />} /> */}
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
