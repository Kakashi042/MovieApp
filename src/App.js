import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='/movie/:imdbID' element = {<MovieDetail/>} />
        <Route path="*" element={<PageNotFound/>}/>  
        </Routes> 
        <Footer />
      </Router>
    </div>
  );
}

export default App;
