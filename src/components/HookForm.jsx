import React from 'react';
import useInputField from './UseInputField';

const HookForm = () => {
    const [name , nameChange] = useInputField('')
    const [email, emailChange] = useInputField('')

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(name, ',', email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={name} onChange={nameChange}  placeholder='name'/>
                <br />
                <input type="email" name="email" defaultValue={email} onChange={emailChange} placeholder='email' />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;