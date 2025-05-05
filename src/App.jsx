import { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput/TextInput";

function App() {
  //const {RandomPassword, CopyPassword,} = GeneratePassword()
  const [Copy, setCopy] = useState("Copiar");
  const [Password, setPasword] = useState("");
  const [passwordSize, setPasswordSize] = useState(12);

  function GenerateRandomLength(comprimento) {
    let resultado = "";
    while (resultado.length < comprimento) {
      resultado += Math.random().toString(36).slice(2); // Remove o "0." inicial
    }
    return resultado.slice(0, comprimento); // Garante o comprimento exato
  }

  const RandomPassword = () => {
    const random = GenerateRandomLength(passwordSize);
    setPasword(random);
    setCopy("Copiar!");
  };

  const CopyPassword = () => {
    navigator.clipboard.writeText(Password); // Copia o valor gerado no coputador
    setCopy("Copiado!"); //Seta o botão copiar
    setTimeout(() => {
      setPasword(""); // Oculta a senha após 1 segundos
    }, 1000);
  };

  return (
    <>
      <h1>Gerador de senha</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <TextInput
          passwordSize={passwordSize}
          setPasswordSize={setPasswordSize}/>
      </div>
      <div className="card">
            <button onClick={RandomPassword}>Gerar senha de {passwordSize} caracteres!</button>
            <button onClick={CopyPassword}>{Copy}</button>
            <p>{Password}</p>

      </div>
    </>
  );
}

export default App;
