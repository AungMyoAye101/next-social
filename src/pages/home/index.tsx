import { useEffect, useState } from "react"
import axiosInstance from "../../lib/axios"


const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axiosInstance.get("/api/v1/user/allusers")
                console.log(res.data)
                setUsers(res.data.users)
            } catch (error) {
                console.log(error)
            }

        }
        fetchUsers()
    }, [])


    return (
        <div>
            <div>
                {
                    users.map(u => (
                        <div key={u._id} className="text-blue-400">{u.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home