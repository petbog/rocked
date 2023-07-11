import s from './Footer.module.css'
import { Link } from 'react-router-dom';
import logo from '../../img/logo (1).png'
import instagram from '../../img/instagram 4 1.png'
import watsap from '../../img/whatsapp 1.png'
import telefram from '../../img/telegram 1.png'


const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.footerBox}>
                <img className={s.logo} src={logo} alt="" />
                <div className={s.navigate}>
                    <div className={s.navigateBox}>
                        <Link className={s.nav_point} to='*'>О клинике</Link>
                        <Link className={s.nav_point} to='*'>Услуги</Link>
                        <Link className={s.nav_point} to='*'>Специалисты</Link>
                        <Link className={s.nav_point} to='*'>Цены</Link>
                        <Link className={s.nav_point} to='*'>Контакты</Link>
                    </div>
                </div>
                <div className={s.socialBox}>
                    <img className={s.social} src={instagram} alt="instagram" />
                    <img className={s.social} src={watsap} alt="watsap" />
                    <img className={s.social} src={telefram} alt="telefram" />
                </div>
            </div>

        </div>
    )
}

export default Footer