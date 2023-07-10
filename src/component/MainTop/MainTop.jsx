import s from './MainTop.module.css'
import decor from '../../img/Rectangle 9.png'


const MainTop = () => {
    return (
        <div className={s.mainTop}>
            <div className={s.box}>
                <div className={s.Textbox}>
                    <h2 className={s.title}>Многопрофильная клиника для детей
                        и взрослых</h2>
                    <p className={s.text}>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore
                        magna aliqua</p>
                </div>
            </div>
            <img className={s.decor} src={decor} alt="decor" />
        </div>
    )
}


export default MainTop