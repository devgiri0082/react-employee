import user from "./user";

function UserCard(props) {
    user.forEach(elem => {
        console.log(elem.name.first);
    })
    return (
        <div className = "card">
            <img src={props.image} alt=""/>
            <div className="user-info">
                <h2>{`${props.initial} ${props.firstName} ${props.lastName}`}</h2>
                <p>{props.mail}</p>
            </div>
        </div>
    )
}

export default UserCard;