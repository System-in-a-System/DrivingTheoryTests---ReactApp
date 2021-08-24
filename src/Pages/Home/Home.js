import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './Home.css';

const Home = ({name, setName}) => {
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if(!name) {
            setError(true);
            return;
        } else {
            setError(false);
            history.push("/quiz");
        }
    };

    return (
        <div className='content'>
        {error && <ErrorMessage>Please enter your name</ErrorMessage>}
            <label>Enter your name:</label>
            <input 
                id='userName'
                type='text'
                className='nameInputField'
                onChange={(e)=>setName(e.target.value)}  
            /> 

            <button className='startButton' onClick={handleSubmit}>
                Drive Ahead
            </button>                       
        </div>
    );
};

export default Home;
