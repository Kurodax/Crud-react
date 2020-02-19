import React from 'react';
import { Link } from 'react-router-dom';

function Profile(props) {

    return (
        <div className="Profile">
            <h2>Profile Users</h2>
            <Link to="/"><button> Home </button></Link>
            <Link to="/sobre"><button> sobre </button></Link>
            {props.match.params.id }
        </div>
    );
};
export default Profile;