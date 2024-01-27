import FAQ from '../FAQ/FAQ'
import s from './WindowQuestion.module.css'
import item from '../../info.json'

const WindowQuestion = () => {


    return (
        <div className={s.WindowQuestion}>
            <div className={s.title_box}>
                <div className={s.title_item}>
                    Часто задаваемые вопросы
                </div>
            </div>
            {
                item.map((item, i) => (
                    <FAQ {...item} key={i} />
                ))
            }

        </div>
    )
}


export default WindowQuestion