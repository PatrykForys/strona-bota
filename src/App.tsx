import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col">
      <header className="py-4 px-6">
        <nav className="flex justify-end">
          <a href="#features" className="text-white hover:text-gray-300 mx-2">Funkcje</a>
          <a href="#faq" className="text-white hover:text-gray-300 mx-2">FAQ</a>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-8" id="home">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 drop-shadow-[0_0_50px_rgba(255,255,255,1)]">
          Zastępstwa na Discordzie
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-6 max-w-2xl">
          Sprawdzaj zastępstwa i otrzymuj powiadomienia bezpośrednio na swoim serwerze Discord.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://discord.com/oauth2/authorize?client_id=1288607872044765337" 
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition transform hover:scale-105 font-bold"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Dodaj bota na serwer Discord"
          >
            <FontAwesomeIcon icon={faDiscord} className="text-white text-xl mr-2" /> Dodaj Bota na Serwer 
          </a>
          <a 
            href="https://github.com/PatrykForys/zastepstwa-bot" 
            className="bg-gray-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-600 transition transform hover:scale-105 font-bold"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Zobacz kod źródłowy na GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-white text-xl mr-2" /> GitHub 
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img src="image1.png" alt="Demonstracja komendy /klasa" className="rounded-lg w-full h-auto" />
            <p className="text-white mt-4 font-bold text-xl">Użyta komenda /klasa</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <img src="image2.png" alt="Demonstracja komendy /sprawdz" className="rounded-lg w-full h-auto" />
            <p className="text-white mt-4 font-bold text-xl">Użyta komenda /sprawdz</p>
          </div>
        </div>
      </main>

      <section className="py-16 bg-gray-800" id="features">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Funkcje Bota</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-lg p-6 shadow-md hover:bg-gray-600 transition-all duration-300">
              <svg className="w-12 h-12 text-green-400 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Automatyczne Powiadomienia</h3>
              <p className="text-gray-300 text-center">Otrzymuj natychmiastowe powiadomienia o zmianach zastępstw bezpośrednio na Discordzie.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 shadow-md hover:bg-gray-600 transition-all duration-300">
              <svg className="w-12 h-12 text-blue-400 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Aktualizacje w Czasie Rzeczywistym</h3>
              <p className="text-gray-300 text-center">Bot regularnie sprawdza i aktualizuje informacje o zastępstwach.</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-6 shadow-md hover:bg-gray-600 transition-all duration-300">
              <svg className="w-12 h-12 text-yellow-400 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Łatwa Konfiguracja</h3>
              <p className="text-gray-300 text-center">Proste komendy do ustawienia powiadomień dla konkretnych klas.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-10">Często Zadawane Pytania</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Jak dodać bota do serwera?</h3>
              <p className="text-gray-300">Kliknij przycisk "Dodaj Bota na Serwer" i postępuj zgodnie z instrukcjami Discord.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Jakie komendy obsługuje bot?</h3>
              <p className="text-gray-300">Bot obsługuje komendy /klasa do ustawienia klasy oraz /sprawdz do sprawdzenia zastępstw.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2024 Zastępstwa Bot. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  )
}