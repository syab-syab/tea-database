import './App.css';
import Home from './components/Home';
import AllTeas from './components/AllTeas';
import Caffeine from './components/Caffeine';
import Header from './components/Header';
import Footer from './components/Footer';
import TeaDetail from './components/TeaDetail';
import NotFound from './components/NotFound';
import About from './components/About';
import { Routes, Route  } from 'react-router-dom';

// Aboutページとか作った方が良いかも
function App() {
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Routes path='/'>
          <Route path='/' element={<Home />} />
          <Route path='/teas' element={<AllTeas />} />
          <Route path='/caffeine' element={<Caffeine />} />
          <Route path='/about' element={<About />} />
          {/* TeaDetailのパスは /teas/detail とか /teas/:id とかでもいいかも */}
          {/* /tea のパスはfetchしてきたデータを丸ごと羅列してリスト表示でクリックしたらdetailに飛ぶとかもあり←その際はOutletを使わざるを得ない */}
          <Route path='/teas/:id' element={<TeaDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
