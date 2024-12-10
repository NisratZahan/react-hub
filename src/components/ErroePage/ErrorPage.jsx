import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
           <h3>Opps!!!</h3> 
           <Link to='/'>Go back to Home</Link>
        </div>
    );
};

export default ErrorPage;