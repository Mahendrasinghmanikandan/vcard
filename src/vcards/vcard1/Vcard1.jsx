import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Vcard1 = () => {
    return (
        <div className="w-screen min-h-screen bg-white font-sans pb-10">
            <Hero />
            <Services />
            <Testimonials />
        </div>
    );
};

export default Vcard1;
