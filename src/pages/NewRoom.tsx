import logoImg from '../assets/logo_mob.svg';
//import logoGoogle from '../assets/images/icons8-google-logo.svg ';

import '../styles/auth.scss';

import {ButtonAsk} from '../components/ButtonAsk';

export function NewRoom(){
    return (
        <div id="page-auth">
        <aside> 
            <img src={logoImg} alt="logo"/>
           <strong>Crie Salas de Q&amp;A ao-vivo</strong>
           <p>Tire as duvidas da sua audiência em tempo real.</p>
        </aside>

        <main>
            <div className="main-content">
                <h2>Criar uma nova sala</h2>
               
            <form>
                <input
                    type="text"
                    placeholder="Nome da sala"/>
                <ButtonAsk type="submit">
                    Criar sala
                </ButtonAsk>
            </form>
            <p>Quer entrar em uma sala existente? <button>Clique aqui</button></p>
            </div>
        </main>
    </div>
    );
}