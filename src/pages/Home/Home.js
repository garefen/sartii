import About from '../../components/About/About';
import Hero from '../../components/Hero/Hero';
import Jobs from '../../components/Jobs/Jobs';
import Nav from '../../components/Nav/Nav';
import Products from '../../components/Products/Products';
import Projects from '../../components/Projects/Projects';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Nav />
      <Hero />
      <About />
      <Jobs />
      <Products />
      {/* <Projects /> */}
    </div>
  );
}

export default Home;
