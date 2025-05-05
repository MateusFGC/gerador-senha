

export default function GeneratePassword(props) {
  return (
    <>
    <button onClick={props.RandomPassword}>Gerar senha de props.{props.passwordSize} caracteres!</button>
    <button onClick={props.CopyPassword}>{props.Copy}</button>
    <p>{props.Password}</p>
    </>
    
  )
}

