import Navbar from "./components/Navbar";
import Mainhero from "./components/Mainhero";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main w-full relative cursor-pointer">
        <Navbar />
        <Mainhero />
        <Footer />
      </div>
    </>
  );
}

export default App;
