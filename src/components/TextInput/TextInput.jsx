export default function TextInput(props) {
    return (
      
          <input 
          type="number" 
          id="passwordSize" 
          min={1}
          value={props.passwordSize}
          onChange={(ev) => props.setPasswordSize(ev.target.value)}/>
      
    )
  }
  
  