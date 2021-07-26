import Footer from "../components/Footer"
import Hero from "../components/Hero"
import SelectedProject from "../components/SelectedProject"

const Home = () => {
    return ( 
        <>
        <div className="container">
            <Hero />
            <SelectedProject />
        </div>
        <Footer />
        </>
     );
}
 
export default Home;