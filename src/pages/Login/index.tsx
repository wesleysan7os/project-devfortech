import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from '../../services/firebase'
import { Form, Button, Modal, Card, FloatingLabel } from 'react-bootstrap'
import { ArrowSquareOut, CircleWavyQuestion, Envelope } from 'phosphor-react'

import { LoginContainer, StyledContainer, StyledModalContainer } from './styles'
import imgGoogle from '../../assets/img/google-logo.png'
import imgBusinessman from '../../assets/img/Personal-finance.svg'
import imgGamaAcademy from '../../assets/img/gama-big-logo.png'

import { toast } from 'react-toastify'
import { Loading } from '../../components/Loading/Loading'

export function Login() {
  const [displayModalAbout, setDisplayModalAbout] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate()

  function login() {
    if (!email) return toast.warning('Por favor, informe um email.')
    if (!password) return toast.warning('Por favor, informe uma senha.')
    setIsLoading(true)
    logInWithEmailAndPassword(email, password)
  }
  useEffect(() => {
    if (loading) {
      // criar tela de carregamento.
      return
    }
    if (user) navigate('/home')
  }, [user, loading])

  return (
    <LoginContainer>
      {displayModalAbout && (
        <Modal
          show={displayModalAbout}
          onHide={() => setDisplayModalAbout(false)}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <StyledModalContainer>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Informações Úteis
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: '1rem 2rem' }}>
              <div className="gama-logo">
                <img src={imgGamaAcademy} />
              </div>

              <p>
                O Dev for Tech é um programa de aceleração de carreiras
                realizado pela Gama Academy, com o objetivo de fazer a diferença
                na trajetória profissional dos alunos. A capacitação busca
                ensinar hard e soft skills essenciais para elevar o nível de
                senioridade do aluno. Esse aplicativo foi desenvolvido como
                projeto final deste programa.
              </p>
              <h5>Desafio Proposto</h5>
              <p>
                "Para controlar melhor suas finanças pessoais, desenvolva um
                aplicativo web de gestão financeira. Use suas novas habilidades
                do React para desenvolver o projeto."
              </p>
              <h5>Nossa Solução</h5>
              <p>
                Desenvolvemos o Wallet aplicando a{' '}
                <strong>Metodologia Ágil</strong>, utilizamos{' '}
                <strong>TypeScript</strong> como linguagem e escolhemos uma
                stack com tecnologias modernas, bem documentadas e consolidadas
                no mercado. A intenção foi desenvolver um app{' '}
                <strong>intuitivo</strong>, <strong>responsivo</strong>, de{' '}
                <strong>fácil manuntenção</strong>, <strong>escalável</strong> e{' '}
                <strong>menos propenso a bugs</strong>. <br />
                <br />
                Você pode ler mais sobre o projeto e as tecnologias utilizadas
                no{' '}
                <a
                  href="https://github.com/wesleysan7os/project-devfortech"
                  target="_blank"
                >
                  repositório do Github <ArrowSquareOut size={14} />
                </a>{' '}
                ou na{' '}
                <a
                  href="https://parallel-pheasant-ed6.notion.site/Project-Final-136b82f10158445cb46afc17d251fe9c"
                  target="_blank"
                >
                  documentação <ArrowSquareOut size={14} />
                </a>
                .
              </p>
              <h5>Quem Somos</h5>

              <div className="cards-container">
                <Card className={'styled-card'}>
                  <Card.Body>
                    <Card.Title> Athos Franco</Card.Title>
                    <Card.Subtitle className="mb-2">
                      Fullstack Web Developer
                    </Card.Subtitle>
                    {/* <Card.Text>
                      Experiência com React, TypeScript, Node e Java
                    </Card.Text> */}
                    <Card.Link
                      href="https://github.com/athosfranco"
                      target="_blank"
                    >
                      Github
                    </Card.Link>
                    <Card.Link
                      href="https://www.linkedin.com/in/athosfranco/"
                      target="_blank"
                    >
                      Linkedin
                    </Card.Link>
                    <Card.Link
                      href="https://drive.google.com/file/u/1/d/1FP5HSgZIgJ8A5Btmlt9WWOFVti4WtEnO/view?usp=sharing"
                      target="_blank"
                    >
                      Currículo
                    </Card.Link>
                  </Card.Body>
                </Card>
                <Card className={'styled-card'}>
                  <Card.Body>
                    <Card.Title>Wesley Santos</Card.Title>
                    <Card.Subtitle className="mb-2">
                      Frontend Web Developer
                    </Card.Subtitle>
                    {/* <Card.Text>
                      Experiência com React, Angular e TypeScript
                    </Card.Text> */}
                    <Card.Link
                      href="https://github.com/wesleysan7os"
                      target="_blank"
                    >
                      Github
                    </Card.Link>
                    <Card.Link
                      href="https://www.linkedin.com/in/wesley-santos-ab6b01116/"
                      target="_blank"
                    >
                      Linkedin
                    </Card.Link>
                  </Card.Body>
                </Card>
                <Card className={'styled-card'}>
                  <Card.Body>
                    <Card.Title>Bruno Sobral</Card.Title>
                    <Card.Subtitle className="mb-2">
                      Frontend Web Developer
                    </Card.Subtitle>
                    {/* <Card.Text>
                      Experiência com React, Angular e TypeScript
                    </Card.Text> */}
                    <Card.Link
                      href="https://github.com/BrunoSobralDEV"
                      target="_blank"
                    >
                      Github
                    </Card.Link>
                    <Card.Link
                      href="https://www.linkedin.com/in/brunosobraldev/"
                      target="_blank"
                    >
                      Linkedin
                    </Card.Link>
                  </Card.Body>
                </Card>
              </div>
            </Modal.Body>
          </StyledModalContainer>
        </Modal>
      )}
      <StyledContainer>
        <div
          className="about-project"
          onClick={() => setDisplayModalAbout(true)}
        >
          <CircleWavyQuestion size={40} />
        </div>
        <header>
          {/* <img src={imgGamaLogo} width="62px" alt="logo-gama" />{' '} */}
          <h3>🌵 Nordevs</h3>
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
            <h1>Wallet</h1>
            <h5>Sistema de Gestão Financeira</h5>
            <Form.Group className="mb-3 login-input" controlId="formBasicEmail">
              <FloatingLabel label="E-mail de acesso">
                {' '}
                <Form.Control
                  type="email"
                  className="login-input"
                  placeholder="E-mail de acesso"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{' '}
              </FloatingLabel>
            </Form.Group>

            <Form.Group
              className="mb-3 login-input"
              controlId="formBasicPassword"
            >
              <FloatingLabel label="Senha de acesso">
                {' '}
                <Form.Control
                  type="password"
                  className="login-input"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>

            <Button
              variant="success"
              onClick={login}
              disabled={isLoading ? true : false}
            >
              {isLoading ? (
                <Loading />
              ) : (
                <>
                  <Envelope size={24} />
                  Login com E-mail
                </>
              )}
            </Button>

            <Button variant="danger" onClick={signInWithGoogle}>
              <img src={imgGoogle} alt="logo-google" width="24px" />
              Login com Google
            </Button>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',

                width: '100%',
              }}
            >
              <Button variant="link">
                <Link
                  style={{ color: '#dddd', fontSize: '14px' }}
                  to="/register"
                >
                  Criar conta
                </Link>
              </Button>
              <Button variant="link" style={{ padding: '0px' }}>
                <Link style={{ color: '#dddd', fontSize: '14px' }} to="/reset">
                  Recuperar Senha
                </Link>
              </Button>
            </div>
          </section>
        </main>

        <footer>
          Feito com 💗 por{' '}
          <div className="contact-wrapper">
            {' '}
            <a href="https://github.com/athosfranco" target="_blank">
              Athos Franco
            </a>{' '}
            <a href="https://github.com/BrunoSobralDEV" target="_blank">
              Bruno Sobral
            </a>{' '}
            <a href="https://github.com/wesleysan7os" target="_blank">
              Wesley Santos
            </a>
          </div>
        </footer>
      </StyledContainer>
    </LoginContainer>
  )
}
