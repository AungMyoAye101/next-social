"use server";
import { base } from '@/config/axios'
import React from 'react'
import PostCard from './post'

const getPosts = async () => {
    const res = await fetch('http://localhost:4444/api/v1/post',
        {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        }
    )
    return res.json()
}

const Post = async () => {
    const data = await getPosts()

    return (
        <div>
            <PostCard />
        </div>
    )
}

export default Post