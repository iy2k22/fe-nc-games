import logo from "./logo.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CommentList from "./components/CommentList";
import Categories from "./components/Categories";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route
            path="/reviews/:review_id/comments"
            element={<CommentList />}
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<ReviewList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
