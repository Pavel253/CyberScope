import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Component/Header/Header";
import Search from "./Component/Search/Search";
import Footer from "./Component/Footer/Footer";
import AboutTools from "./Component/Pages/AboutTools/AboutTools";
import Questions from "./Component/Pages/Questions/Questions";
import Sources from "./Component/Pages/Sources/Sources";
import Task from "./Component/Pages/Task/Task";

import "./App.scss";
import Modal from "./Component/Modal/Modal";

function App() {
  const [language, setLanguage] = useState("ru");
  const [activeHeader, setActiveHeader] = useState(true);
  const [activeModal, setActiveModal] = useState(false);
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ru" ? "en" : "ru"));
  };

  return (
    <Router>
      <div className="App">
        <Header activeHeader={activeHeader} setActiveHeader={setActiveHeader} toggleLanguage={toggleLanguage} language={language} />
        <Routes>
          <Route
            path="/"
            element={<Search language={language} />}
          />
          <Route
            path="/about-tools"
            element={<AboutTools activeModal={activeModal} setActiveModal={setActiveModal} language={language} />}
          />
          <Route
            path="/questions"
            element={<Questions language={language} />}
          />
          <Route
            path="/sources"
            element={<Sources language={language} />}
          />
          <Route
            path="/task"
            element={<Task language={language} />}
          />
        </Routes>
        <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
        <Footer language={language} />
      </div>
    </Router>
  );
}

export default App;