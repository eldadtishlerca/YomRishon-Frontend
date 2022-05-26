import { useNavigate } from 'react-router-dom'

export const ErrorPage = () => {
    
  const navigate = useNavigate()

  return (
    <div>
      <h1> Page not found </h1>
      <button
        onClick={() => {navigate('/board')}}>
        Home
      </button>
    </div>
  )
}
