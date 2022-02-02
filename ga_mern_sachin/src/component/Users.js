import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

function Users(props){
    return(
        <div>
            <h2>Listing users - {props.users.length}</h2>
            <ul>
                {
                    props.users.map(user=>{
                        return (<li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)
                    })
                }
            </ul>
        </div> 
    )
}

const mapStateToProps = (state) => {
    return{
        users : state.userStore.users
    }
}

export default connect(mapStateToProps)(Users)