import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Hero from '../../components/Hero/Hero';
import Jobs from '../../components/Jobs/Jobs';
import Nav from '../../components/Nav/Nav';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Nav />
      <Hero />
      <About />
      <Jobs />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
