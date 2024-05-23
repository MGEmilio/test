import PropTypes from 'prop-types'

function Props(props){
    return(
        <div className="perfil">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Confirmado: {props.confirmado ? "Yes" : "No"}</p>
        </div>
    )
}
Props.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    confirmado: PropTypes.bool,
}
Props.defaultProps = {
    name: "Guest",
    age: 0,
    confirmado: false,
}
export default Props