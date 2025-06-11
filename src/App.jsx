import './App.css'

function App() {

  return (
    <div className='flex flex-col justify-center bg-amber-50 h-screen'>
      <header className='flex justify-center gap-4 mb-10'>
        <div className='flex text-2xl'>
          <h1 className='text-blue-400 font-bold text-3xl'>Omarkhanov</h1>
          <h1 className='text-red-400 text-3xl'>Sanzhar</h1>
        </div>

      </header>

      <main className='flex items-center justify-center gap-10 mb-8'>
        <img src="../public/me.jpg" alt="me"  className='w-1/5 rounded-t-full border-2'/>
        <div className='flex flex-col '>
          <h2 className="text-4xl font-bold text-green-800 mb-4">About Me</h2>
          <div className=" shadow-lg rounded-2xl p-8 max-w-xl w-full text-black border-2">

            <h2 className='text-2xl font-bold mb-4 text-blue-400'>Omarkhanov Sanzhar</h2>
            <div className=''>
              <p className="mb-4">
              I am currently pursuing a Bachelor's degree in <span className="font-semibold">Information Systems</span> at KBTU. I have a strong interest in <span className="font-semibold">programming</span> and <span className="font-semibold">math</span>—I enjoy tackling complex problems and finding efficient solutions.
              </p>
              <p className="mb-4">
                I consider myself <span className="font-semibold">curious</span> and <span className="font-semibold">persistent</span>: when faced with challenges, I keep working until I achieve results. My <span className="font-semibold">GPA is 3.6</span>.
              </p>
              <p>
                I am constantly striving for growth by learning new technologies, participating in projects, and staying up to date with trends in the IT field.
              </p>
              <h2 className='text-2xl font-bold text-blue-400'>My current stack:</h2>
                <p>React</p>
                <p>TypeScript</p>
                <p>Vite</p>
                <p>Git + GitHub</p>
                <p>SupaBase</p>
            </div>
            <div className='flex flex-row items-center gap-5 '>
              <h3 className='text-2xl font-bold text-blue-400'>Links:</h3>
              <a className='hover:text-blue-500' target='_blank' href="https://t.me/itShabka">Telegram</a>
              <a className='hover:text-blue-900' target='_blank' href="https://github.com/ssaannzzhhiikk">GitHub</a>
              <a className='hover:text-pink-400' target='_blank' href="https://www.instagram.com/_.sanzhik/#">Instagram</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
