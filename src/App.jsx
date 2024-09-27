import React from 'react'
import 'tailwindcss/tailwind.css' // Import Tailwind CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col">
      <header className="bg-gradient-to-d from-gray-900 to-gray-900 bg-opacity-80 shadow-md">
        <nav className="container mx-auto px-4 py-3 flex justify-center items-center">
          <FontAwesomeIcon icon={faDiscord} className="text-white text-6xl mr-2" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight font-bold">
            Discord Bot
          </h1>
        </nav>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-[0_0_50px_rgba(255,255,255,1)]">Zastępstwa na Discordzie</h2>
        <p className="text-md md:text-xl text-white mb-6 drop-shadow-[0_0_50px_rgba(255,255,255,1)]">
          Sprawdzaj zastępstwa i otrzymuj powiadomienia bezpośrednio na swoim serwerze Discord.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1288607872044765337" 
            className="bg-gray-700 text-white px-5 py-2 rounded-full shadow-lg hover:bg-gray-600 hover:drop-shadow-[0_0_1px_rgba(255,255,255,1)] transition transform hover:scale-105 hover:font-bold"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} className="text-white text-xl mr-2 " /> Dodaj Bota na Serwer 
          </a>
          <a 
            href="https://github.com/PatrykForys/zastepstwa-bot" 
            className="bg-gray-700 text-white px-5 py-2 rounded-full shadow-lg hover:bg-gray-600 hover:drop-shadow-[0_0_1px_rgba(255,255,255,1)] transition transform hover:scale-105 hover:font-bold"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="text-white text-xl mr-2" /> GitHub 
          </a>
        </div>

        {/* Zaktualizowane obrazy */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden flex flex-col items-center justify-center">
            <img src="image1.png" alt="Obraz 1" className="rounded-lg drop-shadow-[0_0_10px_rgba(210,210,210,0.3)] w-full h-auto" />
            <p className="text-white mt-2 font-bold text-2xl text-center drop-shadow-[0px_0px_1px_rgba(255,255,255,0.5)]">Użyta komenda /klasa</p>
            <div className="absolute inset-0  flex items-center justify-center transition-all duration-300">
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden flex flex-col items-center justify-center">
            <img src="image2.png" alt="Obraz 2" className="rounded-lg drop-shadow-[0_0_10px_rgba(210,210,210,0.3)] w-full h-auto" />
            <p className="text-white mt-2 font-bold text-2xl text-center drop-shadow-[0px_0px_1px_rgba(255,255,255,0.5)]">Użyta komenda /sprawdz</p>
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
            </div>
          </div>
        </div>
      </main>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl drop-shadow-[0_0_1px_rgba(255,255,255,1)] font-bold text-white text-center mb-5">Funkcje Bota</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gray-700 rounded-lg p-4 shadow-md hover:bg-gray-600 transition-all duration-300  relative overflow-hidden">
              <svg className="w-10 h-10 text-green-400 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
              <h4 className="text-lg font-semibold text-white mb-1 text-center">Automatyczne Powiadomienia</h4>
              <p className="text-gray-300 text-sm text-center">Otrzymuj natychmiastowe powiadomienia o zmianach zastępstw bezpośrednio na Discordzie.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App