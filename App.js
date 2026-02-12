import ReactDOM from "react-dom/client";
import React from "react";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
  return (
    <div>
      <h1>Hello Busy bee!!</h1>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
