import React from 'react'

interface User {
    id: number;
    name: string;
}


const usersPage = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users")

    const users: User[]= await res.json()
    
  return (
    <>
        
        <h1>Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        <ul>
        {users.map(user => 
            <li key={user.id}>
                <h2>{user.id}</h2> 
                <h2>{user.name}</h2>
            </li>
        )}
        </ul>

    </>
  )
}

export default usersPage