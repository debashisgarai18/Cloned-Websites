import './App.css'
import LeftSection from './components/LeftSection/LeftSection'
import Navbar from './components/Navbar/Navbar'
import RightSection from './components/RightSection/RightSection'

function App() {
  return (
    <>
      <div className='main w-full h-screen bg-black'>
        <Navbar />
        <div className='hero w-full h-[92%] flex flex-row gap-2'>
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </>
  )
}

export default App
