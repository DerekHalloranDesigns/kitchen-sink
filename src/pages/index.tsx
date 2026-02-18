import React from "react";
import { createRoot } from "react-dom/client";
import SampleComponent from "../components/SampleComponent";

const App: React.FC = () => {
  return (
    <div>
      <SampleComponent text="Hello Josh!" />
      <SampleComponent text="Hello Josh!" />
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
