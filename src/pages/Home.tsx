//import { auth, firebase } from '../services/firebase'

import logoImg from '../assets/logo_mob.svg'
//import logoGoogle from '../assets/images/icons8-google-logo.svg ';

import '../styles/auth.scss'

import { ButtonAsk } from '../components/ButtonAsk'
//import { useHistory } from 'react-router-dom'

export function Home() {
  //const history = useHistory()

  //funçao que navega pelas paginas
  // function handleCreateRoom() {

  //parte de atenticação do usuario
  //const provider = new firebase.auth.GoogleAuthProvider();
  //

  // auth.signInWithPopup(provider).then(result => {
  //  console.log(result);

  //})

  //history.push('/rooms/new');
  // }

  //função que da um alert ao usuario para criar conta no google
  function logar() {
    const aviso = alert('Crie uma conta google')
    return aviso


  }

  return (
    <div id="page-auth">
      <aside>
        <img src={logoImg} alt="logo" />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiência em tempo real.</p>
      </aside>

      <main>
        <div className="main-content">
          <button onClick={logar} className="create-room">
            Crie sua sala com o google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <ButtonAsk type="submit">Entrar na sala</ButtonAsk>
          </form>
        </div>
      </main>
    </div>
  )
}

//<img src={logoImg} alt="logo do site" />
//<img src={logoGoogle} alt="Logo do google" />
