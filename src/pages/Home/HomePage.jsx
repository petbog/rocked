import { useState } from "react"
import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import MainTop from "../../component/MainTop/MainTop"
import Navigate from "../../component/Navigate/Navigate"
import Slider from "../../component/Slider/Slider"
import WindowQuestion from "../../component/WindowQuestion/WindowQuestion"
import s from './HomePage.module.css'
import Poppup from "../../component/Poppup/Poppup"




const HomePage = () => {

    const [PoppupWindow, setPoppupWindow] = useState(false)

    return (
        <div className="">
            {
                PoppupWindow && <Poppup PoppupWindow={PoppupWindow} setPoppupWindow= {setPoppupWindow} />
            }
            <div className={s.container}>
                <Header />
            </div>

            <Navigate />
            <MainTop />
            <WindowQuestion />
            <div className={s.container}>
                <Slider PoppupWindow={PoppupWindow} setPoppupWindow={setPoppupWindow} />
            </div>
            <Footer />
        </div>

    )
}

export default HomePage