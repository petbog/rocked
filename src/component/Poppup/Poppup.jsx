import { useDispatch } from 'react-redux';
import s from './Poppup.module.css'
import { useEffect, useState } from 'react'
import { fetchPoppupData } from '../../Redux/Slice/SliceFaq';

const Poppup = ({ PoppupWindow, setPoppupWindow }) => {

    const dispatch = useDispatch()

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameError, setNameError] = useState('Заполните свои данные');
    const [phoneError, setPhoneError] = useState('Укажите телефон');
    const [emailError, setEmailError] = useState('Укажите почту');


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

    const handleEmail = () => {
        if (name.length && phone.length && email.length) {
            dispatch(fetchPoppupData({ name, phone, email }))
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email')
        } else {
            setEmailError('')

        }
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
        const re =/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setPhoneError('Некорректный номер')
        } else {
            setPhoneError('')
        }
    }
    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break;
            case 'phone':
                setPhoneDirty(true)
                break;
            case 'email':
                setEmailDirty(true)
                break;
            default:
                break;
        }
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
                        {
                            (nameDirty && nameError) && <div style={{ color: "red" }}>{nameError}</div>
                        }
                        <input onBlur={e => blurHandle(e)} name="name" value={name} onChange={e => setName(e.target.value)} className={s.input_name} type="text" placeholder='ФИО' required />
                        {
                            name.length ? <svg onClick={clearName} className={s.clear_name} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                            </svg>
                                : ''
                        }
                        {
                            (phoneDirty && phoneError) && <div style={{ color: "red" }}>{phoneError}</div>
                        }
                        <input onBlur={e => blurHandle(e)} name="phone" value={phone} onChange={e => phoneHandler(e)} className={s.input_tel} type="text" placeholder='Номер телефона' required />
                        {
                            phone.length ? <svg onClick={clearPhone} className={s.clear_phone} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                            </svg>
                                : ''
                        }
                        {
                            (emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>
                        }
                        <input onBlur={e => blurHandle(e)} name="email" value={email} onChange={e => emailHandler(e)} className={s.input_email} type="text" placeholder='Электронная почта' required />
                        {
                            email.length ? <svg onClick={clearEmail} className={s.clear_email} width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L21.0001 21.0001" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                                <path d="M1 21.0001L21.0001 0.999921" stroke="#000" stroke-width="2" stroke-linejoin="round" />
                            </svg>
                                : ''
                        }
                        <button onClick={handleEmail} className={s.input_button}>Записаться</button>
                    </div>
                </div>
                <svg onClick={closePoppup} className={s.closePoppup} width="20" height="20" viewBox="0 0 22 22" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L21.0001 21.0001" stroke="" stroke-width="2" stroke-linejoin="round" />
                    <path d="M1 21.0001L21.0001 0.999921" stroke="" stroke-width="2" stroke-linejoin="round" />
                </svg>
            </div>
        </div >


    )
}

export default Poppup