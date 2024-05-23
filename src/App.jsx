import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card"
import Button from "./Buttons/Button"
import Props from "./Props"
import UserGreeting from "./UserGreeting"
import List from "./List"

function App() {
  
  return(
    <>
      <Header/>
      <Footer/>
      <Card/>
      <Button/>
      <Props name="BRUH" age={1} confirmado={true}/>
      <Props name="NAH" age={2} confirmado={false}/>
      <Props/>
      <UserGreeting isLoggedIn={true} username="teste132"/>
      <List/>
    </>
  );
}

export default App