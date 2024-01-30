import s from './Poppup.module.css'
import close from '../../img/Кнопка _Закрыть_.svg'
import { useState } from 'react'

const Poppup = ({ PoppupWindow, setPoppupWindow }) => {

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
        setPoppupWindow(!PoppupWindow)
        document.body.style.overflow = 'auto'
        window.scrollTo(0, 0)
    }
    return (
        <div div className={PoppupWindow ? `${s.background} + ${s.scrollOff}` : s.background} >
            <div className={s.poppup}>
                <div className={s.poppup_box}>
                    <div className={s.info}>
                        <div className={s.info_title}>Запишитесь<br /> на приём онлайн</div>
                        <div className={s.info_text}>Администратор свяжется с вами через<br /> WhatsApp в течение дня и уточнит детали</div>
                    </div>
                    <div className={s.input}>
                        <form action="https://formsubmit.co/bogdan_emdetei_petrov@mail.ru" method="POST">
                            <input name="name" value={name} onChange={e => setName(e.target.value)} className={s.input_name} type="text" placeholder='ФИО' required />
                            {
                                name.length ? <svg onClick={clearName} className={s.clear_name} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                    <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                                    : ''
                            }
                            <input name="tel" value={phone} onChange={e => setPhone(e.target.value)} className={s.input_tel} type="text" placeholder='Номер телефона' required />
                            {
                                phone.length ? <svg onClick={clearPhone} className={s.clear_phone} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                    <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                                    : ''
                            }
                            <input name="email" value={email} onChange={e => setEmail(e.target.value)} className={s.input_email} type="text" placeholder='Электронная почта' required />
                            {
                                email.length ? <svg onClick={clearEmail} className={s.clear_email} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                    <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                </svg>
                                    : ''
                            }
                            <button type="submit" className={s.input_button}>Записаться</button>
                        </form>
                    </div>
                </div>
                <svg onClick={closePoppup} className={s.closePoppup} width="20" height="20" viewBox="0 0 22 22" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L21.0001 21.0001" stroke="" stroke-width="2" stroke-linejoin="round" />
                    <path d="M1 21.0001L21.0001 0.999921" stroke="" stroke-width="2" stroke-linejoin="round" />
                </svg>

                {/* <img onClick={closePoppup} className={s.closePoppup} src={close} alt="close" /> */}
            </div>
        </div >


    )
}

export default Poppup