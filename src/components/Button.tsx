//importando useState que define algum estado
import {useState} from 'react';

//Quais propriedades os botoes podem receber
 type ButtonProps = {
    children?: string;
 }

 //passando 
export function Button(props: ButtonProps){
    //estado
    const[counter, setCounter] = useState(1)

    //função que incrementa counter
    function increment() {
        setCounter(counter + 1);
    }

    return(
        <button 
            type="button" 
            //a cada vez que clicar incrementa em 1
            onClick={increment}> 
            {props.children || 'Default'}
            {counter}  
        </button>
    );
}