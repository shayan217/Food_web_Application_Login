import React from 'react'

const Myinputfield = ({ mytype, myplaceholder, myname, myonchnage, myonblur, myvalues }) => {
    return (
        <>
            <input type={mytype} placeholder={myplaceholder} name={myname} onChange={myonchnage} onBlur={myonblur} value={myvalues} class="login__input"/>
        </>
    )
}

export default Myinputfield