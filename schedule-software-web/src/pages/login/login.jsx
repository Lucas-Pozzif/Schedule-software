import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { result, set } from "lodash";
import { useState } from "react";
import { langData, provider } from "../../data/data management/database-management";
import { User } from "../../data/database/users";
import { LargeButton } from '../../components/buttons/large-button/large-button'
import { LoginBody } from "./login-body/login-body";
import { LoginHeader } from "./login-header/login-header";

import './login.css';
//Third part login
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


//Other functions
function isValid(name, number) {
    return (name != '' && number != '') ? true : false
}

function loginStage(setStage) {

    const auth = getAuth();
    onAuthStateChanged(auth, (loggedUser) => {

        if (!loggedUser) return setStage('button');

        const user = new User(loggedUser.uid, undefined, undefined);
        user.download().then((e) => {
            if (!e) return setStage('input');
        }
        );
    })
}
function updateUser(name, number, setStage) {
    if (isValid(name, number)) {
        const auth = getAuth();
        onAuthStateChanged(auth, (loggedUser) => {
            const user = new User(loggedUser.uid, name, number);
            user.upload().then(
                setStage('logged')
            )

        })

    }
}

export function Login({

}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [stage, setStage] = useState('loading');

    loginStage(setStage)

    return (
        <div className="login-page">
            <LoginHeader />
            <LoginBody loginWithGoogle={logWithGoogle} loginWithApple={logWithGoogle} name={name} setName={setName} number={number} setNumber={setNumber} stage={stage} />
            <div onClick={() => { updateUser() }} className='ep-large-button'>
                <LargeButton hide={!isValid(name, number, setStage)} text={langData.continue} />
            </div>
        </div>
    )
}
