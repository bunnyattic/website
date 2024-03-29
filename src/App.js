import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/Index";
import Layout from "./components/layout/Layout";
import "./styles/Style.scss";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;