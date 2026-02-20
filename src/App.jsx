import Buttons from "./components/Buttons";
import Card from "./components/Card";
import HeroText from "./components/HeroText";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (

    <div>
      <Navbar />
      <HeroText />
      <Buttons />
      <div className="w-full overflow-x-auto">
        <div className="flex flex-row gap-4 mt-16 mb-16">
        <Card name="Valentino" role="Software Engineer" bgColor="bg-green-500" />
        <Card name="Sophia" role="UI Designer" bgColor="bg-blue-500" />
        <Card name="Marcus" role="Backend Developer" bgColor="bg-purple-500" />
        <Card name="Elena" role="Product Manager" bgColor="bg-red-500" />
        <Card name="Daniel" role="DevOps Engineer" bgColor="bg-yellow-500" />
        <Card name="Ava" role="Frontend Developer" bgColor="bg-pink-500" />

      </div>
      </div>
      

    </div>

  )
}

export default App;