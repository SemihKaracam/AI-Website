
import './App.css';
import Blog from './components/Blog/Blog';
import Brands from './components/Brands/Brands';
import Cta from './components/Cta/Cta';
import Footer from './components/Footer/Footer';
import Future from './components/Future/Future';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Possibility from './components/Possibility/Possibility';
import WhatGPT3 from './components/WhatGPT3/WhatGPT3';

function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header/>
      </div>
      <Brands/>
      <WhatGPT3/>
      <Future/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
