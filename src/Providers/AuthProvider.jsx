import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
     const [user,setUser] = useState(null);
     const [loading,setLoading] = useState(true);
    
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
     useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser, 'from Current user');
            setLoading(false);
        });
        return () => unsubscribe();
     },[])
    const authInfo = {user,loading,createUser,logIn,logOut,updateUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;