import { useEffect } from "react";
import WorkerScript from "./web-worker";

import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    useEffect(() => {
        const worker = new Worker(WorkerScript);
        worker.postMessage(10);  // Send data to the worker

        worker.onmessage = (event) => {
          console.log('Result from worker:', event.data);
        };

        // Clean up the worker when the component unmounts
        return () => worker.terminate();
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