import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import UserCard from './components/UserCard'
import './App.css'

function App() {
  return (
    <div className="flex gap-4 p-5">

      <UserCard 
        name="Roshan" 
        role="Frontend Developer"
        image="https://i.pravatar.cc/150?img=1"
      />

      <UserCard 
        name="Rahul" 
        role="Backend Developer"
        image="https://i.pravatar.cc/150?img=2"
      />

      <UserCard 
        name="Ankit" 
        role="Full Stack Developer"
        image="https://i.pravatar.cc/150?img=3"
      />

    </div>
  )
}


export default App
