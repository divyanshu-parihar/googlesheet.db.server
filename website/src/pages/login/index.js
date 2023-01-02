import { useRef,useEffect} from 'react'
import { Link ,Navigate, useNavigate} from 'react-router-dom'
import { useAuth } from '../../contexts/auth'


function Login() {
  const navigate = useNavigate();
  const {session,logout} = useAuth();
  useEffect(()=>{
    console.log(session)
    if(session) navigate('/dashboard')
  })
  // Get login function from the auth context
  const { login } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    const { error } = await login()

    if (error) {
      alert('error signing in')
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <input type='email' ref={emailRef}></input>
        <input type='password' ref={passwordRef}></input> */}
        <button type='submit'>Google</button>
      </form>

      <br />
      {/* <button onClick={}></button> */}
      <p>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </>
  )
}

export default Login;