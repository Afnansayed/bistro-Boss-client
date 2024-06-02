import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h3 className="text-3xl">
                <span>Welcome back</span>
                {
                    user?.displayName ? user?.displayName : "Back"
                }
            </h3>
        </div>
    );
};

export default UserHome;