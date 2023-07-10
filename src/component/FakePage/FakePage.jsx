import { Link } from 'react-router-dom'
import s from './FakePage.module.css'

const FakePage = () => {
    return (
        <div className={s.box}>
            <div className={s.info}>
                <h1 className={s.title}>Такой страницы нет</h1>
                <Link className={s.button} to='/'>Вернуться назад</Link>
            </div>

        </div>
    )
}

export default FakePage