import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-blue-950">
          Bolsa de prácticas
        </h1>

        <p className="mt-4 text-slate-600">
          Encuentra tu próxima oportunidad.
        </p>

        <button
          type="button"
          className="mt-6 rounded-lg bg-teal-700 px-5 py-3 text-white hover:bg-teal-800"
        >
          Ver convocatorias
        </button>
      </section>
    </main>
  )
}


