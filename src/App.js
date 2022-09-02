import './App.css';
import Home from './components/Home';
import AllTeas from './components/AllTeas';
import Header from './components/Header';
import Footer from './components/Footer';
import TeaDetail from './components/TeaDetail';
import NotFound from './components/NotFound';
import { Routes, Route  } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes path='/'>
        <Route path='/' element={<Home />} />
        <Route path='/teas' element={<AllTeas />} />
        {/* TeaDetailのパスは /teas/detail とか /teas/:id とかでもいいかも */}
        {/* /tea のパスはfetchしてきたデータを丸ごと羅列してリスト表示でクリックしたらdetailに飛ぶとかもあり←その際はOutletを使わざるを得ない */}
        <Route path='/teas/:id' element={<TeaDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
