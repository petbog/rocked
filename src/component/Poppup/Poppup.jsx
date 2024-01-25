import s from './Poppup.module.css'
import close from '../../img/Кнопка _Закрыть_.svg'

const Poppup = ({ isActiv }) => {
    return (
        <div div className={isActiv ? `${s.background} + ${s.scrollOff}` : s.background} >
            <div className={s.poppup}>
                <div className={s.poppup_box}>
                    <div className={s.info}>
                        <div className={s.info_title}>Запишитесь<br/> на приём онлайн</div>
                        <div className={s.info_text}>Администратор свяжется с вами через<br/> WhatsApp в течение дня и уточнит детали</div>
                    </div>
                    <div className={s.input}>
                        <input className={s.input_name} type="text" placeholder='ФИО' required />
                        <input className={s.input_tel} type="text" placeholder='Номер телефона' required />
                        <input className={s.input_email} type="text" placeholder='Электронная почта' required />
                        <button className={s.input_button}>Записаться</button>
                    </div>
                </div>
                <img className={s.closePoppup} src={close} alt="close" />
            </div>
        </div >


    )
}

export default Poppup