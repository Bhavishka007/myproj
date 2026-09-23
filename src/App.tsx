import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import BouquetBuilder from './components/BouquetBuilder';
import CustomizeSection from './components/CustomizeSection';
import CartDrawer from './components/CartDrawer';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import {
  BrandIntro,
  FeaturedCategories,
  Occasions,
  Reviews,
  OurStory,
  InstagramSection,
  Newsletter,
} from './components/Sections';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-cream">
        <Navbar />
        <CartDrawer />
        
        <main>
          <Hero />
          <BrandIntro />
          <FeaturedCategories />
          <Products />
          <CustomizeSection />
          <BouquetBuilder />
          <Occasions />
          <Reviews />
          <OurStory />
          <InstagramSection />
          <Newsletter />
        </main>

        <Footer />
        <BackToTop />
      </div>
    </CartProvider>
  );
}

export default App;
