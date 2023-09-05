import Header from './components/Header';
import ArticlesList from "./components/ArticlesList"

import './App.css'

function App() {
  return (
      <div className="app">
        <Header />
        <ArticlesList />
      </div>
  );
}

export default App

/*      <Routes>
<Route path="/basket" element={<Basket/>}/>
<Route path="/" element={<Home />} />
<Route path="/sell" element={<Sell />} />
</Routes> */