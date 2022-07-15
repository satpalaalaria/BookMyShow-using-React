import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';
// import UserContainer from './Container/RecommendMovie'
import ResponsiveAppBar from './Components/Navbar'
import FooterNew from './Components/FooterNew';
// import BestEnterrenment from './Container/TheBestOfEntertenment'
import UserMovie from './Container/Movie'
import UserTopMovie from './Container/TopMovie'
import About from './Container/About'
import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Movie' element={<UserMovie />}/>
          <Route path='/TopRatedMovie'element={<UserTopMovie />}/>
          <Route path='/About/:id' element={<About />}/>
        </Routes>
        <FooterNew />
      </Provider>
    </div>
  );
}
export default App;

