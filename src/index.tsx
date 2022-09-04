import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Invoices from "./pages/Invoices"
import InvoiceDetail from "./pages/InvoiceDetail"
import './i18n';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <HashRouter>
    {/* <App /> */}
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<InvoiceDetail />} />
        </Route>
        <Route
          path="*" 
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </HashRouter>
);

reportWebVitals();
