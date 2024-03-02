import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NextPage from "./screens/Next"; // Import NextPage component
import YesPage from "./screens/Yes"
import PlayPage from "./screens/Play";
import CardPage from "./screens/CardScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {" "}
      {/* Wrap routes with Routes component */}
      <Route path="/" element={<App/>} />{" "}
      {/* Default route for home page */}
      <Route path="/next-page" element={<NextPage />} />{" "}
      {/* Render NextPage component on /next-page route */}
      <Route path="/yes-page" element={<YesPage />} />{" "}
      {/* Render NextPage component on /next-page route */}
      <Route path="/play-page" element={<PlayPage />} />{" "}
      {/* Render PlayPage component on /play-page route */}
      <Route path="/card-page" element={<CardPage />} />{" "}
      {/* Render PlayPage component on /play-page route */}
    </Routes>
  </BrowserRouter>
);
