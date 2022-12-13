import Navbar from "./components/layout/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import WatchList from "./components/pages/WatchList";
import RatedMovie from './components/pages/RatedMovie';
import PopularMovie from "./components/pages/PopularMovie";
import ComingMovie from "./components/pages/ComingMovie";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watchlist' element={<WatchList />} />
          <Route path='/ratedmovie/:index' element={<RatedMovie />}/>
          <Route path='/popularmovie/:index' element={<PopularMovie />}/>
          <Route path='/comingmovie/:index' element={<ComingMovie />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
