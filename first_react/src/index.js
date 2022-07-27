import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import MenuPage from "./page/MenuPage";
import FormPage from "./page/FormPage";

const container = document.getElementById("root");
const root = createRoot(container);

const Layout = (props) => {
  return (
    <>
      <nav>
        <Link to="/">點我連到第一頁</Link>
        <Link to="/form" style={{ marginLeft: "20px" }}>
          點我連到第二頁
        </Link>
      </nav>
      {props.children}
    </>
  );
};

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<MenuPage/>} />
          <Route path="/form" element={<FormPage/>} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

root.render(<App />);
