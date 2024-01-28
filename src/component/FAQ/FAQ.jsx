import { useEffect, useState } from 'react'
import s from './FAQ.module.css'
import plus from '../../img/Кнопка _Развернуть_.svg'
import minus from '../../img/Vector.svg'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const FAQ = ({ title, text, subText }) => {
    const [hidden, setHidden] = useState(false)

    const handleText = () => {
        setHidden(!hidden)
    }

    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    useEffect(() => {
        function updatePageWidth() {
            const width = window.innerWidth
            setPageWidth(width)
        }

        updatePageWidth()

        window.addEventListener('resize', updatePageWidth)

        return () => {
            window.removeEventListener('resize', updatePageWidth)
        }
    }, [])

    useEffect(() => {
        if (pageWidth < 500) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    }, [pageWidth])

    return (
        <div className={s.BOX}>
            <div className={s.FAQ}>
                <div className={s.FAQ_box}>
                    <div className={s.title}>{title}</div>
                    {pageWidth < 500 ? '' : <div className="span">
                        {hidden ? (
                            <img onClick={handleText} src={minus} alt="" className={s.button} />
                        ) : (
                            <img onClick={handleText} src={plus} alt="" className={s.button} />
                        )}
                    </div>}
                </div>
                <TransitionGroup className="todo-list">
                    {hidden && (
                        <CSSTransition timeout={500} classNames="item">
                            <div className={s.text}>
                                {text}
                                <br />
                                <div className={s.subText}>{subText}</div>{' '}
                            </div>
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    )
}

export default FAQ