import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { toast } from 'react-toastify'

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../services/firebase'
import { StyledContainer } from './styles'
import imgGoogle from '../../assets/img/google-logo.png'
import { Loading } from '../../components/Loading/Loading'

export function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  function handleRegister() {
    if (!name) return toast.warning('Por favor, informe um nome.')
    if (!email) return toast.warning('Por favor, informe um e-mail.')
    if (!password) return toast.warning('Por favor, informe uma senha.')
    setIsLoading(true)
    try {
      registerWithEmailAndPassword(name, email, password)
    } catch (err){
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (loading) return
    if (user) navigate('/home')
  }, [user, loading])

  return (
    <StyledContainer>
      <section>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite aqui o seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite aqui o seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite aqui a sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="success"
          onClick={handleRegister}
          disabled={isLoading ? 'disabled' : ''}
        >
          {isLoading ? <Loading /> : 'Cadastrar'}
        </Button>

        <Button variant="outline-danger" onClick={signInWithGoogle}>
          <img src={imgGoogle} alt="logo-google" width="24px" />
          Entrar com o Google
        </Button>

        <span>
          Já possui uma conta? <Link to="/">Faça Login</Link>.
        </span>
      </section>
    </StyledContainer>
  )
}
