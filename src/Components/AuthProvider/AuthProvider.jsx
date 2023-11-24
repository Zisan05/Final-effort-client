import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";

const provider = new GoogleAuthProvider();

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

const [user,setUser] = useState({})
const [Loading,setLoading] = useState(true)

// register
const CreateUser = (email,password) =>{

    setLoading(true);
  
    return createUserWithEmailAndPassword(auth,email,password);
}

// login

const loginUser = (email,password) => {
    setLoading(true);
       return signInWithEmailAndPassword(auth,email,password);
       
  }

  // Google user
  const GoogleUser = (value) => {
    return signInWithPopup(auth, provider)
     
   }    

    // Logout
    const LogoutUser = () => {
        setLoading(true);
      return signOut(auth);
    }

    // update profile
    const UpdateProfile = (name,photo) =>{
        return updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
        })
    
    
      }

    // UseEffect
    useEffect( () =>{
        const unsubscribe =  onAuthStateChanged(auth , currentUser => {
            setUser(currentUser);
          
             setLoading(false);
        })
        return () => {
            unsubscribe();
           }
    } ,[])

    const authInfo = {user,CreateUser,loginUser,GoogleUser,LogoutUser,UpdateProfile,Loading};
    return (
        <AuthContext.Provider value = {authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;