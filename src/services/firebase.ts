import { initializeApp } from 'firebase/app'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  onSnapshot,
} from 'firebase/firestore'
import { toast } from 'react-toastify'

const firebaseConfig = {
  apiKey: 'AIzaSyCPv4QqvwtvBsCZsMECN0jsWdMGpKDaesA',
  authDomain: 'financesapp-ede35.firebaseapp.com',
  projectId: 'financesapp-ede35',
  storageBucket: 'financesapp-ede35.appspot.com',
  messagingSenderId: '988917863313',
  appId: '1:988917863313:web:87684a707fa86505280030',
  measurementId: 'G-43DYGNWX6L',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const user = res.user
    const q = query(collection(db, 'users'), where('uid', '==', user.uid))
    const docs = await getDocs(q)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      })
    }
  } catch (err: any) {}
}

const logInWithEmailAndPassword = async (email: any, password: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (err: any) {}
}

// Registrar
const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    })
    toast.success('Cadastrado com sucesso.')
  } catch (err: any) {
    if (err.code === 'auth/email-already-in-use') {
      return toast.error('E-mail já cadastrado.')
    }
    if (err.code === 'auth/invalid-email') {
      return toast.error('E-mail inválido.')
    }

    if (err.code === 'auth/wrong-password') {
      return toast.error('E-mail ou senha inválido.')
    }
  }
}

// Redefinição de Senha
const sendPasswordReset = async (email: any) => {
  try {
    await sendPasswordResetEmail(auth, email)
    toast.success('Link de redefinição de senha enviado!')
  } catch (err: any) {
    console.error(err)
    toast.warning(err)
    if (err.code === 'auth/invalid-email') {
      return toast.error('E-mail inválido.')
    }
  }
}

// Logout
export function logout() {
  signOut(auth)
}

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
}

//fonte: https://blog.logrocket.com/user-authentication-firebase-react-apps/
//const colRef = collection(db, 'books')
//const q = query(colRef, orderBy('createdAt'))
//fonte: https://blog.logrocket.com/user-authentication-firebase-react-apps/
