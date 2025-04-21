import "./App.css";
import GeneratePassword from "./RandomPassword/Generate";

function App() {
  const { Name, Password, RandomPassword, CopyPassword } = GeneratePassword();
  return (
    <>
      <h1>Gerador de senha</h1>
      <div className="card">
        <button onClick={RandomPassword}>Gerar</button>
        <button onClick={CopyPassword}>{Name}</button>
        <p>{Password}</p>
      </div>
    </>
  );
}

export default App;
