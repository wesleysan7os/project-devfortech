import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Form, Button, FloatingLabel } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { StyledContainer } from './styles'
import { auth, sendPasswordReset } from '../../services/firebase'
import { Loading } from '../../components/Loading/Loading'
import { sendPasswordResetEmail } from 'firebase/auth'
import { ArrowLeft, X } from 'phosphor-react'

export function Reset() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  async function handleResetPassword() {
    if (!email) return toast.warning('Por favor, informe um e-mail.')
    setIsLoading(true)
    try {
      await sendPasswordResetEmail(auth, email)
      toast.success('Link de redefinição de senha enviado!')
    } catch (err: any) {
      setIsLoading(false)
      toast.warning(err)
      if (err.code === 'auth/invalid-email') {
        return toast.error('E-mail inválido.')
      }
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
        <h3>Recuperação de Senha</h3>
        <p>Enviaremos um e-mail com instruções de recuperação de conta.</p>
        <Form.Group className=" recover-input" controlId="formBasicEmail">
          <FloatingLabel
            label="Digite E-mail cadastrado"
            controlId="recover-email"
          >
            {' '}
            <Form.Control
              type="text"
              placeholder="Digite aqui o seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
        </Form.Group>

        <Button
          variant="success"
          onClick={handleResetPassword}
          disabled={isLoading ? 'disabled' : ''}
        >
          {isLoading ? <Loading /> : 'Enviar'}
        </Button>

        <span>
          Não tem uma conta? <Link to="/register">Criar conta</Link>
        </span>
      </section>
    </StyledContainer>
  )
}
