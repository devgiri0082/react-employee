import "./styles.css"
import UserCard from "./UserCard";
import user from "./user";
 
function Home(props) {
   return(
       <div>
        <h1>Users in ACMA Inc.</h1>
        <div className = "container">
        {
            user.map(elem => {
               return  <UserCard initial = {elem.name.title} firstName = {elem.name.first} lastName = {elem.name.last} mail = {elem.email} image = {elem.picture.large} />
            })
        }

        </div>
    </div>
    )
}

export default Home;
