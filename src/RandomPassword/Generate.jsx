import { useState } from "react";

export default function GeneratePassword() {
    const [Name, setName] = useState("Copiar")
    const [Password, setPasword] = useState("")
    const random = Math.random().toString(36).slice(-8);
    

    const RandomPassword = () => {
        setPasword(random)
        setName("Copiar!")
    }

    const CopyPassword = () => {
        navigator.clipboard.writeText(Password);// Copia o valor gerado no coputador
        setName("Copiado!") //Seta o botão copiar
        setTimeout(() => {
            setPasword(""); // Oculta a senha após 1 segundos
          }, 1000);

    }

    return{
        Name, Password, RandomPassword, CopyPassword
    }
}

