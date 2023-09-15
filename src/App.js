import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactDOM } from "react";
import { Box } from "@mui/material";
import "./index.css";
import {ChannelDetail, Feed, SearchFeed,VideoDetail, Navbar} from "./components";


const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:SearchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
