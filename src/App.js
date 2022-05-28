import './App.css';

const Sobre = (props) => {
  return (
    <div>
      <h2>Sobre: { props.sobre.nome } </h2>
      <h2>Sobre: { props.sobre.sobrenome } </h2>
    </div>
  );
}

const BemVindo = (props) => {
  return (
    <div>
      <h2>Nome: { props.nome } {props.sobrenome}</h2>
      <Sobre sobre={props} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Bem Vindo!</h1>
      <BemVindo nome="Renato" sobrenome="Cruz" />
      <BemVindo nome="Fabianne" sobrenome="Pousada" />
      <BemVindo nome="Isabella" sobrenome="Pereira" />
      <h1>Curso React</h1>
    </div>
  );
}

export default App;
