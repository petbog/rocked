import s from './Header.module.css'
import logo from '../../img/LOGO.png'
import point from '../../img/Vector.png'
import watsap from '../../img/whatsapp 1.png'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.navBox}>
                <img className={s.logo} src={logo} alt="logo" />
                <div className={s.locationBox}>
                    <div className={s.pointBox}>
                        <img className={s.point} src={point} alt="point" />
                        <div className={s.city}>Ростов-на-Дону</div>
                    </div>
                    <div className={s.street}>ул. Ленина, 2Б</div>
                </div>
            </div>

            <div className={s.contactBox}>
                <div className={s.numBox}>
                    <img className={s.watsap} src={watsap} alt={watsap} />
                    <div className={s.tel}>+7(863) 000 00 00</div>
                </div>
                <div className="">
                    <div className={s.record}>
                        <button className={s.recordButton} >Записаться на прием</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Header