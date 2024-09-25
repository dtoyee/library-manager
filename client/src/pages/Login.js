import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/style.css'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const signIn = useSignIn()
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()

  const userDetails = JSON.stringify({
    username: username,
    password: password
  })

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const login = () => {
    axios.post("http://localhost:8000/api/login", userDetails, config)
      .then(res => {
        let result = res.data
        if(result.success) {
          if(signIn({
            auth: {
              token: result.token,
              type: 'Bearer'
            },
            userState: result.user
          })) {
            navigate('/')
          }
        }
      })
  }

  useEffect(() => {
    if(isAuthenticated) {
      navigate('/')
    }
  }, [])

    return (
        <main className='wrapper'>
            <div className='login-holder'>
                <div className='login-title'>Login</div>
                <div className='login-form'>
                  <div className='login-section-holder'>
                    <label>Username</label>
                    <input type="text" onChange={(e) => { setUsername(e.target.value) }} />
                  </div>
                  <div className='login-section-holder'>
                    <label>Password</label>
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
                  </div>
                  <div className='login-section-holder'>
                    <button className="login-btn" onClick={login}>Login</button>
                  </div>
                </div>
            </div>
        </main>
    )
}

export default Login