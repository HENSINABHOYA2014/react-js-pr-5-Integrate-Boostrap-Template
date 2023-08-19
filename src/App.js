import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import Header from './Header';
import Banner from './Banner';
import Brand from './Brand';
import Collection from './Collection';
import Title from './Title';
import Services from './Services';
import Counter from './Counter';
import Work from './Work';
import Contact from './Contact';
import Roadmap from './Roadmap';
import Artista from './Artista';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header/>
      <Banner />
      <Brand />
      <Title />
      <Collection />
      <Services/>
      <Counter/>
      <Work/>
      <Contact/>
      <Roadmap/>
      <Artista/>
      <Footer/>
    </>
  );
}
export default App;
