function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center px-4 py-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <h1 className="text-blue-400">Omarkhanov</h1>
          <h1 className="text-red-400"> Sanzhar</h1>
        </h1>
      </header>

      <main className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
        <img 
          src="/images/me.jpg" 
          alt="me" 
          className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-full border-4 border-gray-300 object-cover shadow-lg"
        />

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-green-800 mb-4 text-center md:text-left">About Me</h2>
          <div className="shadow-lg rounded-2xl p-6 md:p-8 border-2 bg-white text-black space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Omarkhanov Sanzhar</h2>
            <p>
              I am currently pursuing a Bachelor's degree in <span className="font-semibold">Information Systems</span> at KBTU. I have a strong interest in <span className="font-semibold">programming</span> and <span className="font-semibold">math</span>—I enjoy tackling complex problems and finding efficient solutions.
            </p>
            <p>
              I consider myself <span className="font-semibold">curious</span> and <span className="font-semibold">persistent</span>: when faced with challenges, I keep working until I achieve results. My <span className="font-semibold">GPA is 3.6</span>.
            </p>
            <p>
              I am constantly striving for growth by learning new technologies, participating in projects, and staying up to date with trends in the IT field.
            </p>

            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-2">My current stack:</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>Git + GitHub</li>
                <li>SupaBase</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 items-center mt-4">
              <h3 className="text-xl font-bold text-blue-400">Links:</h3>
              <a className="hover:text-blue-500" target="_blank" rel="noopener noreferrer" href="https://t.me/itShabka">Telegram</a>
              <a className="hover:text-blue-900" target="_blank" rel="noopener noreferrer" href="https://github.com/ssaannzzhhiikk">GitHub</a>
              <a className="hover:text-pink-400" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_.sanzhik/#">Instagram</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
