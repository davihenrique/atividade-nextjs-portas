import style from '../styles/Cartao.module.css';

interface cartaoProps {
  bgcolor?: string;
  children?: any;
}

export default function Cartao(props: cartaoProps){
    return(
        <div className={style.cartao} 
        style={{backgroundColor: props.bgcolor??"#fff"}}>
        {props.children}
        </div>
    )
}