import React from "react";
import { createRoot } from "react-dom/client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import "../styles/main.scss";
import About from "../components/About";
import Plans from "../components/Plans";

const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Hero />
      <About />
      <Plans />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
