import { useState } from 'react'
import s from './MainBottom.module.css'
import Poppup from './../Poppup/Poppup';



const MainBottom = ({ advantages1, advantages2, advantages3, advantages4, prevSum, nextSum, imges,PoppupWindow, setPoppupWindow}) => {

    const[poppup,setPoppup]=useState(false)
    const  openPoppup = () => {
        setPoppup(false);
        setPoppupWindow(!PoppupWindow)
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
      };
   
    return (
        <div className="">
            <div className={s.itemBox}>
                <div className={s.MainBottom}>
                    <div className={s.box}>
                        <div className={s.textBox}>
                            <p className={s.title}>Check-UP</p>
                            <p className={s.text}>для мужчин</p>
                            <div className={s.advantages}>
                                <ul className={s.advantagesItem} >
                                    <li className={s.advantagesList}>{advantages1}</li>
                                    <li className={s.advantagesList}>{advantages2}</li>
                                    <li className={s.advantagesList}>{advantages3}</li>
                                    <li className={s.advantagesList}>{advantages4}</li>
                                </ul>
                            </div>
                            <div className={s.priceBox}>
                                <div className={s.pricePrev}>Всего {prevSum}₽</div>
                                <div className={s.preceNext}>{nextSum}₽</div>
                            </div>
                            <div className={s.button}>
                                <button onClick={openPoppup}  className={s.buttonDetails}>Записаться</button>
                                <button className={s.buttonInfo}>Подробнее</button>
                            </div>
                        </div>
                        <div className={s.boxImg}>
                            <div className={s.bacground}></div>
                            <img className={s.doc} src={imges} alt="doc" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainBottom