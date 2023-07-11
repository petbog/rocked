import Footer from "../../component/Footer/Footer"
import Header from "../../component/Header/Header"
import MainBottom from "../../component/MainBottom/MainBottom"
import MainTop from "../../component/MainTop/MainTop"
import Navigate from "../../component/Navigate/Navigate"
import s from './HomePage.module.css'



const HomePage = () => {
    return (
        <div className="">
            <div className={s.container}>
                <Header />
            </div>

            <Navigate />
            <MainTop />
            
            <div className={s.container}>
                <MainBottom />
            </div>
            <Footer/>
        </div>

    )
}

export default HomePage