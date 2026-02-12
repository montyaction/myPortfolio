import React, { useEffect } from "react";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    useEffect(() => {
        if (process.env.NODE_ENV === 'test') return;
        import('./initWorker').then(({ initWorker }) => initWorker()).catch(() => {});
    }, []);

    return (
        <>
            <Header />
            <WelcomeSection />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;