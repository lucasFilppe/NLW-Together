import logoImg from '../assets/logo_mob.svg';
//import logoGoogle from '../assets/images/icons8-google-logo.svg ';

import '../styles/auth.scss';

import {ButtonAsk} from '../components/ButtonAsk';

export function Home(){
    return(
        <div id="page-auth">
            <aside> 
                <img src={logoImg} alt="logo"/>
               <strong>Crie Salas de Q&amp;A ao-vivo</strong>
               <p>Tire as duvidas da sua audiência em tempo real.</p>
            </aside>

            <main>
                <div className="main-content">
                   <button className="create-room">
                       Crie sua sala com o google
                   </button>
                  <div className="separator">
                      Ou entre em uma sala
                  </div>
                <form>
                    <input
                        type="text"
                        placeholder="Digite o código da sala"/>
                    <ButtonAsk type="submit">
                        Entrar na sala
                    </ButtonAsk>
                </form>
                </div>
            </main>
        </div>
    );
}

//<img src={logoImg} alt="logo do site" />
//<img src={logoGoogle} alt="Logo do google" />