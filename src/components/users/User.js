import React, {Fragment, useEffect } from 'react'
import Spinner from '../layouts/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'


const User = ({user, loading, getUser, getUserRepos, match, repos}) => {

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    },[]);

        
        const {avatar_url, name, location, bio, login, blog, followers, following, html_url, public_repos, public_gists, hireable, company} = user
        
        if (loading) return <Spinner/>

        return (
            <Fragment>
                <Link to='/' className="btn btn-light">
                    Back
                </Link>
                Hireable: {' '}
                {hireable ? <i className="fas fa-check text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className='round-img' style={{width: '150px'}}/>
                        <h1>{name}</h1>
                        <p>Location: {location}</p>
                        {bio && <Fragment>
                    <h3>Bio</h3>
                <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>Username</strong> {login}
                                </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company</strong> {company}
                                </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website</strong> {blog}
                                </Fragment>}
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">
                        Followers: {followers}
                    </div>
                    <div className="badge badge-success">
                        Followers: {following}
                    </div>
                    <div className="badge badge-light">
                        Public Repos: {public_repos}
                    </div>
                    <div className="badge badge-dark">
                        Public gists: {public_gists}
                    </div>
                </div>
                <Repos repos={repos}/>
            </Fragment>
        )
}

export default User
