
function Header(){

    const About1 = "About";

    return(
        <header>
            <h1>YO</h1>
            <nav>
                <ul>
                    <li> <a href="#">Home</a></li>
                    <li>{About1}</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header