
import { axiosInstance } from '@/config/axios';
import axios from 'axios';
import React from 'react'

const getAllUsers = async () => {
    try {
        const res = await axios.get('http://localhost:4444/api/v1/user/allusers');
        const users = res.data.users;
        console.log(users)
        return users;
    } catch (error) {
        console.log(error)
    }
}

const AllUser = async () => {
const users = await getAllUsers();
    console.log(users)
    return (
        <div>
            {users.map((user: any) => (
                <div key={user._id}>
                    <h1>{user.name}</h1>
                </div>
            ))}
        </div>
    )
}



export default AllUser