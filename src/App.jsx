import Footer from "./layouts/Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Navigation from "./layouts/navigation";
import { useEffect } from "react";

function App() {
    const { pathname } = useLocation();
    console.log(pathname);
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[pathname])

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
