import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Authors from './pages/Authors.jsx';
import Genres from './pages/Genres.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}