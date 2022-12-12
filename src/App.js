import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Teams from './components/Teams';
import Team from './components/Teams/hero';

function App() {

  const funcoes = ['Selecione uma função', 'Tanque', 'Dano', 'Suporte']

  const times = [
    {
      'name': 'New York Excelsior',
      'primaryColor': '#002aff',
      'secundaryColor': '#b3b3ff'
    },
    {
      'name': 'Atlanta Reign',
      'primaryColor': '#540000',
      'secundaryColor': '#ffb3b3'
    },
    {
      'name': 'Hangzhou Spark',
      'primaryColor': '#ff73e8',
      'secundaryColor': '#eed9ff'
    },
    {
      'name': 'Los Angeles Gladiators',
      'primaryColor': '#36002d',
      'secundaryColor': '#aaa2b0'
    },
    {
      'name': 'Los Angeles Valiant',
      'primaryColor': '#ffe600',
      'secundaryColor': '#faf9c5'
    },
    {
      'name': 'Vancouver Titans',
      'primaryColor': '#058f00',
      'secundaryColor': '#d7fcd8'
    }
  ]

  const getValues = (values) => {
      setHeroes({...values, values})
      console.log(values)
  }

  const [heroes, setHeroes] = useState([])
  return (
    <>
      <Header />
      <Form times={times} funcoes={funcoes} submited={(hero) => setHeroes([...heroes, hero])} />
      {times.map((time) => {
        return (
          <Teams teamTitle={time.name} primaryColor={time.primaryColor} secundaryColor={time.secundaryColor} heroes={heroes} />
        )
      })}
    </>
  );
}

export default App;
