import React from 'react'
import PaperStats from '../UI/PaperStats'
import { AiFillApple } from 'react-icons/ai'

const NewUsers = () => {
    return <PaperStats color='info' icon={AiFillApple} main='654k' subtitle='New Users' />
}

export default NewUsers