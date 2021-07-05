import { ButtonHTMLAttributes} from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

 //passando 
export function ButtonAsk(props: ButtonProps){
  
    return(
        <button className="button" {...props} />
        
    );
}