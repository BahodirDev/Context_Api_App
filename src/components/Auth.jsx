import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Auth(props) {

    const [login, setLogin] = useState()
    const [email, setEmail] = useState()

    const navigate = useNavigate()

    function getUser() {
        if (login && email) {
            fetch("http://localhost:3000/user")
                .then(data => data.json())
                .then(res => {
                    let spuser =  res.filter(s=>s.email == email.toLowerCase())
                    let user = spuser.filter(s=>s.login == login)
                    console.log(user);
                    if(user.length && (user[0].login == login && user[0].email == email) ){
                        localStorage.setItem('user',JSON.stringify(user[0]))
                        navigate('/feedback')
                    }else{
                        alert('Login yoki email xato')
                    }
                })
        } else {
            alert("Kiriting")

        }

    }

    return (
        <div>
            <div className='' style={{ padding: "25px" }}>
                <h3>Kirish</h3>
                <div>
                    <input type="email" className='form-control' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="text" className='form-control' placeholder='Login' value={login} onChange={e => setLogin(e.target.value)} />
                </div>
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                    <button onClick={getUser} className="btn red">Kirish</button>
                </div>
            </div>
        </div>
    );
}

export default Auth;