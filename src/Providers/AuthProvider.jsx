import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
     const [user,setUser] = useState(null);
     const [loading,setLoading] = useState(true);
     const googleProvider = new GoogleAuthProvider();
     //for jwt
     const axiosPublic  = useAxiosPublic();
    
     const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
     }

     //login
     const logIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
     }
     //signOut
     const logOut = () => {
        setLoading(true);
        return signOut(auth);
     }

     //update user
     const updateUser = (name,photoURL)  => {
      return  updateProfile(auth.currentUser, {
         displayName: name, photoURL: photoURL
       });
     }

     //google
     const google = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
     }
     useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser, 'from Current user');
            if(currentUser){
               //get token and store client
               const userInfo = {email: currentUser?.email};
               axiosPublic.post('/jwt',userInfo)
               .then(res => {
                  if(res.data.token){
                     localStorage.setItem('access-token',res.data.token);
                  }
               })

            }else{
            //todo: remove token (if token stored in the client side caching,local storage, in memory)
             localStorage.removeItem('access-token');
            }
            setLoading(false);
        });
        return () => unsubscribe();
     },[])
    const authInfo = {user,loading,createUser,logIn,logOut,updateUser,google};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;