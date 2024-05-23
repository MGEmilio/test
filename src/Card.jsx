import Pic from './assets/MeFr.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" src={Pic} alt="profile"></img>
            <h2>TESTE</h2>
            <p>blablabla</p>
        </div>
    );
}

export default Card