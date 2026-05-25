
import Footer from "../includes/Footer";
import AboutUs from "./about/About";
import Features from "./home/about/Feature";
import WhyWait from "./home/about/WhyWait";
import Blog from "./home/blog/Blog";
import FreeRangeEggs from "./home/freeRangeEggSec/FreeRangeEggSec";
import Gallery from "./home/gallery/Gallery";
import Hero from "./home/hero/Hero";
import Navbar from "./home/hero/Navbar";
import Testimonials from "./home/testimonial/Testimonial";
import WhyChooseUs from "./home/whyChosose/WhyChoose";
import AOSInit from "./AOSInit";


export const metadata = {
  title: 'Western Poultry Breeding Farm Pvt. Ltd.',
  description: 'Always Loyal and Honest. Premium farm products.',
};

export default function HomePage() {



  return (
    <main>
<AOSInit></AOSInit>
      <Hero />
      <WhyWait />
      <Features></Features>
        <WhyChooseUs></WhyChooseUs>
        <Testimonials></Testimonials>
        <FreeRangeEggs></FreeRangeEggs>
        <Blog></Blog>
      <Gallery></Gallery>

      
    </main>
  );
}