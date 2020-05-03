import  React, { useState, useEffect } from 'react';
import './styles.css'
import './global.css'
import logoGit from './assets/LogoGit.png'


export default function App() {
  const [repositories, setRepositories ] = useState([])
  
  useEffect(() => {
    async function fetchRepositories() {
      const response = await fetch(`https://api.github.com/users/JoaoVitorFerreiraJ/repos`) 
      const data = await response.json()
      setRepositories(data)
  }

  fetchRepositories()
  }, [])

  return (
    <div className='container'>
      <header>
        <img src={logoGit} alt='Logo Git'/>
        <h1>Lista de repositorios Git</h1>
      </header>
      <div className='lista'>
        <ul>
          {repositories.map(repo => (
            <li key={repo.id}>
              <h3>{repo.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

