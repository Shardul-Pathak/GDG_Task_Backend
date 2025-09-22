import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Authors from './pages/Authors.jsx';
import Genres from './pages/Genres.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Operations from './pages/Operations.jsx';
import Landing from './pages/Landing.jsx';
import Add from './pages/Add.jsx';
import Update from './pages/Update.jsx';
import FindA from './pages/FindA.jsx';
import FindT from './pages/FindT.jsx';
import Delete from './pages/Delete.jsx';

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
          <Route path="/operations" element={<Operations />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
          <Route path="/findA" element={<FindA />} />
          <Route path="/findT" element={<FindT />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}