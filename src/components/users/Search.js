import React, {useState} from 'react'

const Search = ({searchUsers, clearUsers, setAlert}) => {
    const [text, setText] = useState('')
    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.text);
        if(text===''){
            setAlert('Please enter a text', 'light');
        }else{
            searchUsers(text)
            setText('')
        }     
    }

        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
            </div>
        )
}

export default Search
