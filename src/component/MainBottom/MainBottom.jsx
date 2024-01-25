import s from './MainBottom.module.css'
import doc from '../../img/Group 43.png'
import arroyPrev from '../../img/left-arrow 6.png'
import arroyNext from '../../img/left-arrow 5.png'

const MainBottom = ({advantages1,advantages2,advantages3,advantages4,prevSum,nextSum,imges}) => {
    return (
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
                            <button className={s.buttonDetails}>Записаться</button>
                            <button className={s.buttonInfo}>Подробнее</button>
                        </div>
                    </div>
                    <div className={s.boxImg}>
                        <div className={s.bacground}></div>
                        <img className={s.doc} src={imges} alt="doc" />
                    </div>
                </div>
            </div>
            {/* <div className={s.boxArroy}>
                <div className={s.arroyItem}>
                    <img className={s.arroyPrev} src={arroyPrev} alt="arroyPrev" />
                    <div className={s.page}>
                        <span className={s.prevPage}>1</span>
                        <span className={s.dell}>/</span>
                        <span className={s.nextPage}>4</span>
                    </div>
                    <img className={s.arroyNext} src={arroyNext} alt="arroyNext" />
                </div>
            </div> */}
        </div>

    )
}

export default MainBottom