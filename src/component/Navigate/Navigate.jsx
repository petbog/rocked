import { Link } from 'react-router-dom'
import s from './Navigate.module.css'

const Navigate = () => {
    return (
        <div className={s.navigate}>
            <div className={s.navigateBox}>
                <Link className={s.nav_point} to='*'>О клинике</Link>
                <Link className={s.nav_point} to='*'>Услуги</Link>
                <Link className={s.nav_point} to='*'>Специалисты</Link>
                <Link className={s.nav_point} to='*'>Цены</Link>
                <Link className={s.nav_point} to='*'>Контакты</Link>
            </div>
        </div>
    )
}

export default Navigate