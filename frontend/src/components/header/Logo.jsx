import logoImg from '../../assets/images/logo-sinfondo.png';

export default function Logo() {
    return(
        <a href="/">
            <img src={logoImg} alt="logo" className="logo" />
        </a>
    );
}