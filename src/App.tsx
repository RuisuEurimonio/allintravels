import Header from "./components/Header"

function App() {
  

  return (
    <>
      <header>
        <Header />
        <div className="text-center font-bold h-[50vh] ">
          <div className="bg-[url('/src/assets/header.png')] h-full bg-cover bg-center bg-no-repeat flex flex-col justify-center">
            <h1 className="text-white">THE TRAVEL</h1>
            <h2 className="text-amber-500 tracking-[1rem]">EXPERIENCE</h2>
          </div>
        </div>
      </header>
    </>
  )
}

export default App
