import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()
    const [uname,setUname] = useState('')
    const [pwd,setPwd] = useState('')
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        if(uname === 'abcd' && pwd === '123'){
           setIsLoggedIn(true)
        }else{
            alert('incorrect details')
        }
        isLoggedIn ? navigate('/dashboard') : alert('incorrect details')
    }
  return (
    <>
    <h1>Login Form</h1>
    <div>
        <form action="/login" method="post">
            UserName: <input type='text'  value={uname} onChange={e=>setUname(e.target.value)}/>
            <br/>
            Password:<input  type="text" value={pwd} onChange={e=>setPwd(e.target.value)}/><br/>

                <Link to={{pathname:'/Dashboard'}} ><button className='dashboard' >Submit</button></Link>
        </ form>

        
    </div>
    </>
  )
}

export default Home