import { useState } from 'react'
import s from './FAQ.module.css'
import plus from '../../img/Кнопка _Развернуть_.svg'
import minus from '../../img/Vector.svg'


const FAQ = ({ title, text, subText }) => {

    const [hidden, setHidden] = useState(false)

    const handleText = () => {
        setHidden(!hidden)
    }


    return (
        <div className={s.FAQ}>
            <div className={s.FAQ_box}>
                <div className={s.title}>{title}</div>
                {
                    hidden ?
                        <img onClick={handleText} src={minus} alt="" className={s.button} /> :
                        <img onClick={handleText} src={plus} alt="" className={s.button} />
                }

            </div>

            {hidden ? <div className={s.text}>
                {text}
                <br />
                <div className={s.subText}>
                {subText}
                </div>

            </div> : ''}

        </div>
    )
}
export default FAQ