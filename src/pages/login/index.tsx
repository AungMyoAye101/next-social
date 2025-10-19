import { useState, type ChangeEvent, type FormEvent } from 'react'
import axiosInstance, { setToken } from '../../lib/axios';

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser(pre => ({ ...pre, [name]: value }));

    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        console.log(user)
        try {
            const res = await axiosInstance.post('/api/v1/auth/login', user)
            console.log(res.data)
            setToken(res.data.result.token)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit} className='flex flex-col gap-4 px-4 max-w-lg bg-gray-200 p-6'>
                <input type="email" name='email' className='p-2 bg-gray-100' onChange={(e) => handleChange(e)} />
                <input type="password" name='password' className='p-2 bg-gray-100' onChange={(e) => handleChange(e)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Login