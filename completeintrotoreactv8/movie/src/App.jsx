import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header/Header";
import Movies from "./components/Movies/Movies";
import Liked from "./components/Liked/Liked";
import About from "./components/About/About";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Movie from "./components/Movie/Movie";
import {  useState } from "react";
import LikedContext from "./components/Liked/LikedContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const likedArray = useState([]);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LikedContext.Provider value={likedArray}>
          <Header />
          <Routes>
            <Route path="/movies" element={<Movies />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/about" element={<About />} />
            <Route path="/movie/:id" element={<Movie />} />
          </Routes>
        </LikedContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
