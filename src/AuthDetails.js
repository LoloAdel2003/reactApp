import { onAuthStateChanged,signOut,getAuth } from "firebase/auth";
import React, {useEffect,useState}from 'react'
import {auth} from './firebase'
const AuthDetails =()=>{
    const [authUser ,setAuthUser]=useState(null);
useEffect(()=>{
    const Listen=onAuthStateChanged(auth,(user)=>{
        if(user){setAuthUser(user)}
        else{setAuthUser(null)}
    })
    return()=>{
        Listen()
    }
},[])


    const userSignOut=()=>{
        signOut(auth).then(()=>{
            console.log("sign out success")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className="out">
            {authUser ? (<>
            <p>`Signed In as ${authUser.email}`</p>
            <button onClick={userSignOut} > sign Out</button>
            </>) :(
                <p>must sign in</p>
            )}
        </div>
    )
}
export default AuthDetails