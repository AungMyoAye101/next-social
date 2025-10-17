import axiosInstance from '@/config/axios'
import React from 'react'

const getAllUsers = async () => {
    const { data } = await axiosInstance.get('/api/v1/user/allusers')
    return data;
}

const AllUser = async () => {
    const users = await getAllUsers();
    console.log(users)
    return (
        <div>
            {
                JSON.stringify(
                    users[0]
                )
            }
        </div>
    )
}

export default AllUser