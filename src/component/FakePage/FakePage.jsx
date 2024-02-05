import { Link } from 'react-router-dom'
import s from './FakePage.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const FakePage = () => {
    const [info, setInfo] = useState()
    console.log(info)

    useEffect(() => {
        try {
            const fun = async (params) => {
                const { name, email, message } = params;
                const { data } = await axios.post(`https://back-rocked.vercel.app/send-email`, { name, email, message })
                setInfo(data)
                console.log('create')
            }
            fun({
                name: "bogdan",
                email: "sdnfsdionsdnosdifnsoi@mail.ru",
                message: "test"
            })
        } catch (error) {
            console.warn(error)
        }
    }, [])
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