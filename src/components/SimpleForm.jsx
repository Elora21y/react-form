import React from 'react';

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault()
        // console.log('form submitted')
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text " placeholder='Your name' name='name' />
                <br />
                <input type="email" name="email" id=""  placeholder='Your email'/>
                <br />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;