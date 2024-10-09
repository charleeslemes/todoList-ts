import './Header.css'


import foguete_logo from '../assets/foguete.svg'


export function Header(){
    return(
    <header>
        <img src={foguete_logo} alt="foguete logo" />
        <h1>to</h1><h1>do</h1>
    </header>
    )
}
