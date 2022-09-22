import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../../services/firebase'
import { Form, Button } from 'react-bootstrap'
import { Envelope } from 'phosphor-react'

import { StyledContainer } from './styles'
import imgGoogle from '../../assets/img/google-logo.png'
import imgBusinessman from '../../assets/img/finance.svg'
import imgGamaLogo from '../../assets/img/logo-gama.png'
import { toast } from 'react-toastify'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  function login() {
    if (!email) toast.warning('Por favor, informe um email.')
    if (!password) toast.warning('Por favor, informe uma senha.')
    logInWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return
    }
    if (user) navigate('/home')
  }, [user, loading])

  return (
    <StyledContainer>
      <header>
        <img src={imgGamaLogo} width="62px" alt="logo-gama" />{' '}
        <h1>GamaFinancyApp</h1>
      </header>

      <main>
        <aside>
          {/* <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
          /> */}
          <img src={imgBusinessman} alt="logo-google" />
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

          <Button variant="success" onClick={login}>
            <Envelope size={24} />
            Login com e-mail
          </Button>
          <span>Ou</span>
          <Button variant="outline-danger" onClick={signInWithGoogle}>
            <img src={imgGoogle} alt="logo-google" width="24px" />
            Login com Google
          </Button>
          <div>
            <Link to="/reset">Redefinir senha</Link>
          </div>
          <div>
            <Link to="/register">Criar conta</Link>
          </div>
        </section>
      </main>

      <footer>
        Developed by{' '}
        <a href="www.google.com" target="_blank">
          ✋ Athos Gabriel
        </a>{' '}
        <a href="www.google.com" target="_blank">
          ✋ Bruno Sobral
        </a>{' '}
        <a href="www.google.com" target="_blank">
          ✋ Wesley Santos
        </a>
        {/* <img src={imgGamaAcademy} alt="logo-gama-academy" /> */}
      </footer>
    </StyledContainer>
  )
}
