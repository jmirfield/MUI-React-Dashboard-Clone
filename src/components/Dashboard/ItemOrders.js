import React from 'react'
import PaperStats from '../UI/PaperStats'
import { AiFillAndroid } from 'react-icons/ai'

const ItemOrders = () => {
    return (
        <PaperStats color='warning' variant='light' icon={AiFillAndroid} main='55k' subtitle='Item Orders' />
    )
}

export default ItemOrders