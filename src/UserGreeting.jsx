
function UserGreeting(props){
    return(props.isLoggedIn ? <h2>Eai {props.username}</h2> : <h2>off</h2>)
}
export default UserGreeting