import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import AboutUs from "./Pages/AboutUs";
import Home from "./Pages/Home";
import FeedbackFormPage from "./Pages/FeedbackFormPage";
import ContactUsPage from "./Pages/ContactUsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/FeedbackForm" element={<FeedbackFormPage />} />
            <Route path="/ContactUs" element={<ContactUsPage />} />
          </>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
