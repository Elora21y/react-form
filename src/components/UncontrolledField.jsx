import React, { useRef } from 'react';

const UncontrolledField = () => {
    const emailRef = useRef('')
    const passRef = useRef('')

    const handleSubmit=(e) =>{
        e.preventDefault()
        // console.log(emailRef.current.value)
        // console.log(passRef.current.value)

        //submit btn e click krle hbe
        const email = emailRef.current.value;
        const pass = passRef.current.value
        console.log(`${email} , ${ pass}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email"  placeholder='email' />
                <br />
                <input ref={passRef} type="password" name="password"  placeholder='password'/>
                <br />
                <button  type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UncontrolledField;