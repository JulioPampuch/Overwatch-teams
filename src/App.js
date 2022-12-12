import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Teams from './components/Teams';
import Team from './components/Teams/team';

function App() {

  const funcoes = ['Selecione uma função', 'Tanque', 'Dano', 'Suporte']

  const times = [
    {
      'name': 'New York Excelsior',
      'color': '#002aff'
    },
    {
      'name': 'Atlanta Reign',
      'color': '#540000'
    },
    {
      'name': 'Hangzhou Spark',
      'color': '#ff73e8'
    },
    {
      'name': 'Los Angeles Gladiators',
      'color': '#36002d'
    },
    {
      'name': 'Los Angeles Valiant',
      'color': '#ffe600'
    },
    {
      'name': 'Vancouver Titans',
      'color': '#058f00'
    }
  ]

  return (
    <>
      <Header />
      <Form times={times} funcoes={funcoes}/>
      {times.map((time) => {
        return (
          <Teams title={time.name} color={time.color} />
        )
      })}
    </>
  );
}

export default App;
