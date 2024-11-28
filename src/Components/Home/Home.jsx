import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navber/Navber";
import ServiceOffers from "../Services/ServiceOffers";
import Testimonials from "../Testimonial/Testimonials";



const Home = () => {
    return(
       <>
        <div className='max-w-7xl mx-auto px-4'>
            <Navbar/>
             <Banner></Banner>
             <ServiceOffers></ServiceOffers>
             <About></About>
             <Testimonials/>
        </div>
        <Footer/>
       </>
    )}


export default Home;