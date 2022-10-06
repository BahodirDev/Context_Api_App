import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Modal(props) {
    const [login, setLogin] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()

    const navigate = useNavigate()

    function getUser() {
        if (name && login && email) {

            fetch('http://localhost:3000/user/')
                .then(data => data.json())
                .then(res => {
                    let newMass = res.filter(s => s.email === email);
                    let checked = newMass.filter(s => s.login === login);
                    if (checked.length > 0) {
                        alert("bu email orqali foydalanuvchi ro`yhatdan o`tgan")
                    } else {
                        fetch("http://localhost:3000/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ email: email, login: login, name })
                        })
                            .then(data => data.json())
                            .then(res => {
                                console.log(res);
                                localStorage.setItem('user', JSON.stringify(res))
                                navigate('/feedback')
                            })
                    }
                })

        } else {
            alert("Kiriting")

        }

    }

    return (
        <>
            <div className='' style={{ padding: "25px" }}>
                <h3>Registratsiya</h3>
                <div>
                    <input type="text" className='form-control' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <input type="email" className='form-control' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="text" className='form-control' placeholder='Login' value={login} onChange={e => setLogin(e.target.value)} />
                </div>
                <div style={{ textAlign: "center", paddingTop: "20px" }}>
                    <button onClick={getUser} className="btn red">Ro`yhatdan o`tish</button>
                </div>
            </div>
            <div>
                <Link to={'/checkAuth'}>
                    <button className='btn blue'>Login</button>
                </Link>
            </div>
        </>
    );
}

export default Modal;