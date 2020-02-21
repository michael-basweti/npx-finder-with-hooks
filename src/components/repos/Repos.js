import React from 'react'
import RepoItem from './RepoItem'

const Repos = ({repos}) => {
    console.log(repos);
    
    return (
       <div>
           {
               repos.map(repo=>(
                   <RepoItem repo={repo} key={repo.id}/>
               ))
           }
       </div>
    )
}

export default Repos
