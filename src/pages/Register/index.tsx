import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { toast } from 'react-toastify'

import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '../../services/firebase'
import { StyledContainer } from './styles'
import imgGoogle from '../../assets/img/google-logo.png'
import { Loading } from '../../components/Loading/Loading'
import { ArrowLeft, X } from 'phosphor-react'

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
    } catch (err) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (loading) return
    if (user) navigate('/home')
  }, [user, loading])

  return (
    <StyledContainer>
      <Button
        onClick={() => navigate('/', { replace: true })}
        variant="link"
        className="return-btn"
      >
        <X size={32} />
      </Button>
      <section>
        <h3>Cadastro 🤑</h3>
        <p>Crie sua conta na Wallet e organize a sua vida financeira.</p>
        <Form.Group className=" register-input" controlId="formBasicName">
          <FloatingLabel label="Nome Completo" controlId="register-email">
            {' '}
            <Form.Control
              type="text"
              placeholder="Digite aqui o seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className=" register-input" controlId="formBasicEmail">
          <FloatingLabel label="E-mail" controlId="register-email">
            <Form.Control
              type="email"
              placeholder="Digite aqui o seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>{' '}
        <Form.Group className=" register-input" controlId="formBasicPassword">
          <FloatingLabel label="Senha" controlId="register-email">
            <Form.Control
              type="password"
              placeholder="Digite aqui a sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>
        <Button
          variant="success"
          onClick={handleRegister}
          disabled={isLoading ? 'disabled' : ''}
        >
          {isLoading ? <Loading /> : 'Cadastrar com E-mail'}
        </Button>
        <Button variant="danger" onClick={signInWithGoogle}>
          <img src={imgGoogle} alt="logo-google" width="24px" />
          Cadastrar com Google
        </Button>
        <span>
          Já possui uma conta? <Link to="/">Faça Login</Link>.
        </span>
      </section>
    </StyledContainer>
  )
}
