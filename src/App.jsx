import React, { useEffect } from "react";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    useEffect(() => {
        const worker = new Worker(new URL('./web-worker.js', import.meta.url));
        worker.postMessage(10);
        worker.onmessage = (event) => {
          console.log('Result from worker:', event.data);
        };
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