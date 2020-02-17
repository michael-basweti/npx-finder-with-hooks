import React from 'react';
import '../../App.css'

const UserItem = (props) => {

        const {avatar_url, login, html_url} = props.user;
        return(
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}}/>
                <h3>{login}</h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1" target="_blank" rel="noopener noreferrer">Profile</a>
                </div>
            </div>
        )
}

export default UserItem;