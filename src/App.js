import logo from "./logo.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/reviews" element={<ReviewList />}></Route>
          <Route path="/reviews/:review_id" element={<Review />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
