import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { result, set } from "lodash";
import { useState } from "react";
import { langData, provider } from "../../data/data management/database-management";
import { User } from "../../data/database/users";
import { LargeButton } from '../../components/buttons/large-button/large-button'
import { LoginBody } from "./login-body/login-body";
import { LoginHeader } from "./login-header/login-header";

import './login.css';
async function logWithGoogle() {

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            //const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential.accessToken;
        })
        .catch((error) => {
            console.error(error)
            /*
            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email

            const credential = GoogleAuthProvider.credentialFromError(error)
           */
        })

}

function isValid(name, number) {
    return (name != '' && number != '') ? false : true
}

export function Login({

}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [user, setUser] = useState({
        name: '',
        number: ''
    });

    function updateUser() {
        if (isValid(name, number)) {
            setUser({
                name: name,
                number: number
            })
        }
    }




    return (
        <div className="login-page">
            <LoginHeader />
            <LoginBody loginWithGoogle={logWithGoogle} loginWithApple={logWithGoogle} name={name} setName={setName} number={number} setNumber={setNumber} />
            <div onClick={() => { updateUser() }} className='ep-large-button'>
                <LargeButton hide={isValid(name, number)} text={langData.continue} />
            </div>
        </div>
    )
}
