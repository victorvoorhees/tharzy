import Styles from '../styles/Loading.module.css'
import {useEffect, useState} from "react";

export default function Loading() {
    const [c, setC] = useState(3)

    useEffect(() => {
        setC(3)
    }, [])

    useEffect(() => {
        setTimeout(() => setC(c + 1), 250)
    }, [c])

    return (
        <div className={Styles.master}>
            <div className='h1'>Retrieving data</div>
            <div className='h1'>
                {(c % 3 === 0) && '.'}
                {(c % 3 === 1) && '..'}
                {(c % 3 === 2) && '...'}
            </div>
        </div>
    )
}