import { useState } from 'react'
import s from './FAQ.module.css'
import plus from '../../img/Кнопка _Развернуть_.svg'
import minus from '../../img/Vector.svg'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


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
            <TransitionGroup className="todo-list">

                {hidden ? <CSSTransition
                    timeout={500}
                    classNames="item"
                >
                    <div className={s.text}>
                        {text}
                        <br />
                        <div className={s.subText}>
                            {subText}
                        </div> </div>
                </CSSTransition>

                    : ''}
            </TransitionGroup>
        </div>
    )
}
export default FAQ