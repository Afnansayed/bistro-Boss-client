import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const SocialLogin = () => {
    const {google} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    
    const handleGoogle = () => {
        google()
        .then(res => {
            console.log(res.user)
            const userInfo = {
                name: res.user?.displayName,
                email: res.user?.email,
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                if(res.data.insertedId){
                    console.log("user info send in database");
                }
            })
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div onClick={handleGoogle} className="btn w-[310px] bg-stone-400 p-0">
            <FaGoogle></FaGoogle> Google
        </div>
    );
};

export default SocialLogin;