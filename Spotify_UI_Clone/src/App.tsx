import './App.css'
import LeftSection from './components/LeftSection/LeftSection'
import RightSection from './components/RightSection/RightSection'

function App() {
  return (
    <>
      <div className='main w-full h-screen bg-black'>
        <div className='hero w-full h-[90%] flex flex-row p-2 gap-2'>
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </>
  )
}

export default App
