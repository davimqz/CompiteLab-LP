import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import { PrinterCheck } from "lucide-react";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection></HeroSection>
        <FeatureSection></FeatureSection>
        <Workflow></Workflow>
        <Pricing></Pricing>
      </div>
    </>
    
  )
}

export default App;
