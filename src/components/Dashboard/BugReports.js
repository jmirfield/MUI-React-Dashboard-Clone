import React from 'react'
import PaperStats from '../UI/PaperStats'
import { AiFillBug } from 'react-icons/ai'

const BugReports = () => {
    return (
        <PaperStats color='warning' icon={AiFillBug} main='10' subtitle='Bug reports' />
    )
}

export default BugReports