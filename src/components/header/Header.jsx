import logoImg from './../../images/123/Logo icon.png';
import logoName from './../../images/123/logo.png';
import './header.css'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logoImg} alt="logoImg" />
                        <img src={logoName} alt="logoName" />
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><div className="nav__item"><a href="#!">Акции</a></div></li>
                            <li><div className="nav__item"><a href="#!">Услуги</a></div></li>
                            <li><div className="nav__item"><a href="#!">О компании</a></div></li>
                            <li><div className="nav__item"><a href="#!">Информация</a></div></li>
                            <li><div className="nav__item"><a href="#!">Отзывы</a></div></li>
                            <li><div className="nav__item"><a href="#!">Контакты</a></div></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )

}
export default Header;