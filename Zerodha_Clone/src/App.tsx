import Navbar from "./components/Navbar";
import Mainhero from "./components/Mainhero";
import Footer from "./components/Footer";

//TODO : Add the routes and make it more component based 
// so that the routes can be added under the component structure
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
