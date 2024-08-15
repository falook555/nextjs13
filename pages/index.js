import React, { useEffect, useState } from 'react'
import axios from 'axios'
import config from '../config'

const api = config.api

const Index = () => {

    const [dataARR, getDataARR] = useState([])

    useEffect(() => {
        getAllApp()
    }, [])

    const getAllApp = async () => {
        try {
            const res = await axios.get(`${api}/get-data-eiei`)
            // console.log(res.data)
            getDataARR(res.data)
        } catch (error) {
            console.log(error)
            // toast.error('เกิดข้อผิดพลาด')
        }
    }

    return (
        <div>
            <h1>สวัสดี</h1>
        </div>
    )
}

export default Index