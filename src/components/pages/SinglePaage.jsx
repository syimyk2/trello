import React, { useEffect, useState } from 'react'
import { useParams,Link, useNavigate } from 'react-router-dom'
//  const {id} =useParams()

const SinglePaage = () => {
  const [post, setPost] =useState(null)
  const {id} =useParams()
  const navigate = useNavigate()
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=> res.json())
    .then((data)=> setPost(data))
  },[id])
  const goBack = () => navigate('/favorite',{state: 209038280748})
  const goHome = () => navigate('/',{replace: true})
  return (
    <>
    <button onClick={goBack}>Go back</button>
    <button onClick={goHome}>Go home</button>
    {post&& <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>{post.id}</p>
      <Link to={`/favorite/:${id}/recent`}>Edit</Link>
    </div>}</>

  )
}

export default SinglePaage
