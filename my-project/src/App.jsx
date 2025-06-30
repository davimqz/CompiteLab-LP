import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
      </div>
    </>
    
  )
}

export default App;
