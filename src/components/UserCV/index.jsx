import Contacts from "../Contacts";
import Experience from "../Experience";
import PersonalInfo from "../PersonalInfo";

function UserCV() {
    return (
        <div>
            <PersonalInfo />
            <Experience/>
            <Contacts/>
        </div>
    );
}

export default UserCV;