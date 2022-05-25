import { useNavigate } from 'react-router-dom'

export function ErrorPage() {
    
  const navigate = useNavigate()

  return (
    <div>
      <h1> Page not found </h1>
      <button
        onClick={() => {navigate('/')}}>
        Home
      </button>
    </div>
  )
}
