import s from './Poppup.module.css'
import close from '../../img/Кнопка _Закрыть_.svg'
import { useState } from 'react'

const Poppup = ({ isActiv, setPoppupWindow }) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const clearName = () => {
        setName('')
    }
    const clearEmail = () => {
        setEmail('')
    }
    const clearPhone = () => {
        setPhone('')
    }
    const closePoppup = () => {
        setPoppupWindow(!isActiv)
        document.body.style.overflow = 'auto'
    }
    return (
        <div div className={isActiv ? `${s.background} + ${s.scrollOff}` : s.background} >
            <div className={s.poppup}>
                <div className={s.poppup_box}>
                    <div className={s.info}>
                        <div className={s.info_title}>Запишитесь<br /> на приём онлайн</div>
                        <div className={s.info_text}>Администратор свяжется с вами через<br /> WhatsApp в течение дня и уточнит детали</div>
                    </div>
                    <div className={s.input}>
                        <input value={name} onChange={e => setName(e.target.value)} className={s.input_name} type="text" placeholder='ФИО' required />
                        {
                            name.length ? <svg onClick={clearName} className={s.clear_name} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                            </svg>
                                : ''
                        }
                        <input value={phone} onChange={e => setPhone(e.target.value)} className={s.input_tel} type="text" placeholder='Номер телефона' required />
                        {
                            phone.length ? <svg onClick={clearPhone} className={s.clear_phone} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                            </svg>
                                : ''
                        }
                        <input value={email} onChange={e => setEmail(e.target.value)} className={s.input_email} type="text" placeholder='Электронная почта' required />
                        {
                            email.length ? <svg onClick={clearEmail} className={s.clear_email} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                            </svg>
                                : ''
                        }
                        <button className={s.input_button}>Записаться</button>
                    </div>
                </div>
                <img onClick={closePoppup} className={s.closePoppup} src={close} alt="close" />
            </div>
        </div >


    )
}

export default Poppup