import FAQ from '../FAQ/FAQ'
import s from './WindowQuestion.module.css'
// import item from '../../info.json'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFaq } from '../../Redux/Slice/SliceFaq'

const WindowQuestion = ({PoppupWindow, setPoppupWindow}) => {

    const dispatch = useDispatch()
    const item = useSelector(state => state.faq.data)



    useEffect(() => {
        dispatch(fetchFaq())
    }, [dispatch])

    return (
        <div className={s.WindowQuestion}>
            <div className={s.title_box}>
                <div className={s.title_item}>
                    Часто задаваемые вопросы
                </div>
            </div>
            {
                item.map((item, i) => (
                    <FAQ {...item} key={i}  PoppupWindow={PoppupWindow}  setPoppupWindow={setPoppupWindow}/>
                ))
            }

        </div>
    )
}


export default WindowQuestion