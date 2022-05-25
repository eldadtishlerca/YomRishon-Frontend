import { useNavigate } from "react-router-dom"


export function LoginSignUpPage() {
  
  const navigate = useNavigate()
  
  return <div>
    <h1>Im LOGINSINGUP PAGE</h1>
    <button onClick={()=> {navigate('/')}}>Home</button>
    </div>
}
