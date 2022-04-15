import MovieHeader from './components/Movie-Header.jsx';
import MovieDetails from './pages/Movie-Details.jsx';
import MovieLanding from './pages/Movie-Landing.jsx';
import MoviePeople from './pages/Movie-People.jsx';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <header className='App_header'>
          <MovieHeader />
        </header>

        <main>
          <Routes>
            <Route path='/' element={<MovieLanding />} />
            <Route path='/detail/:movieid' element={<MovieDetails />} />
            <Route path='/people/:personid' element={<MoviePeople />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
