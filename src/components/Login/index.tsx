import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle, } from '../../services/firebase'
import { Form, Button } from 'react-bootstrap'
import Lottie from 'react-lottie'

import { StyledHeader, StyledContainer } from './styles'
import animationData from '../../assets/lotties/finance.json'
import googleLogo from '../../assets/img/google-logo.png'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/home')
  }, [user, loading])
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  return (
    <StyledContainer>
      <header>
        Logo
      </header>

      <main>
        <aside>
        <Lottie 
          options={defaultOptions}
          height={400}
          width={400}
        />
        </aside>

        <section>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              Nunca compartilharemos seu e-mail com mais ninguém.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login com e-mail
          </Button>

          <Button variant="outline-danger" onClick={signInWithGoogle}>
            <img
              src={googleLogo}
              alt="logo-google"
              width="24px"
            />{' '}
            Login com Google
          </Button>
          <div>
            <Link to="/reset">Esqueceu a senha?</Link>
          </div>
          <div>
            Não tem uma conta? <Link to="/register">Criar conta</Link>.
          </div>
        </section>
      </main>
      
      <footer>
       Developed by ✋ Athos Gabriel ✋ Bruno Sobral ✋ Wesley Santos
      </footer>
    </StyledContainer>
  )
}