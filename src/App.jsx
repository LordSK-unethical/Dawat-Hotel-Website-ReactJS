import Navbar from './components/Navbar';
import MouseFollower from './components/MouseFollower';
import Hero from './components/Hero';
import ChefsSpecials from './components/ChefsSpecials';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import OurStory from './components/OurStory';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <MouseFollower />
      <Navbar />
      <main>
        <Hero />
        <ChefsSpecials />
        <Menu />
        <Gallery />
        <OurStory />
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}

export default App;
