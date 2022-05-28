import './App.css';

const BemVindo = (props) => {
  return (
    <div>
      <h1>Bem Vindo</h1>
      <h1>{ props.nome }</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>My App</h1>
      <BemVindo nome="Renato" />
      <BemVindo nome="Pereira" />
      <BemVindo nome="da Cruz" />
      <h1>React</h1>
    </div>
  );
}

export default App;
