import React, { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//     const [data, setdata]= useState([])
//     useEffect(() => {
//     fetch('https:/api-github.com/divyanshjha')
//     .then(response=> response.json())
//     .then(data => 
//         {console.log(data);
//         setdata(data)})
// }, [])
    
  return (
    <div className='text-centre m-4 bg-gray-600 p-4 text-3xl'>
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubinfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/divyanshjha')
    return response.json()
}