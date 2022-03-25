import React from 'react'
import PaperStats from '../UI/PaperStats'
import { AiFillAndroid } from 'react-icons/ai'

const WeekySales = () => {
    return (
        <PaperStats color='primary' icon={AiFillAndroid} main='234k' subtitle='Weeky Sales'/>
    )
}

export default WeekySales