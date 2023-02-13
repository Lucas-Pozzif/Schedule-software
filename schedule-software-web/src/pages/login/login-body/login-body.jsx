import { HorizontalIconButton } from '../../../components/buttons/horizontal-icon-button/horizontal-icon-button'
import { langData } from '../../../data/data management/database-management'
import { Input } from '../../../components/input/input'

import './login-body.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { User } from '../../../data/database/users';
import React, { useEffect, useState } from 'react';

function InputForm({
    name,
    setName,
    number,
    setNumber
}) {

    return (
        <>
            <Input label={langData.login.input.name.label} placeholder={langData.login.input.name.placeholder} value={name} setValue={setName} />
            <Input label={langData.login.input.number.label} placeholder={langData.login.input.number.placeholder} value={number} setValue={setNumber} />
        </>
    )
}

function LogButton({
    loginWithGoogle,
    loginWithApple
}) {
    return (
        <>
            <div className='login-with-apple' onClick={() => { loginWithGoogle() }}>
                <HorizontalIconButton icon={require('../../../assets/logo-google.png')} text={langData.login.logInWith} reverse={true} />
            </div>
            <div className='login-with-google' onClick={() => { loginWithApple() }}>
                <HorizontalIconButton icon={require('../../../assets/logo-apple.png')} text={langData.login.logInWith} reverse={true} />
            </div>
        </>
    )
}

export function LoginBody({
    loginWithGoogle,
    loginWithApple,
    name,
    setName,
    number,
    setNumber
}) {
    const [state, setState] = useState('loading')

    const auth = getAuth();
    onAuthStateChanged(auth, (loggedUser) => {
        console.log(loggedUser)
        if (!loggedUser) {
            setState('button');
            return;
        }

        const user = new User(loggedUser.uid, undefined, undefined);
        user.download().then((e) => {
            if (!e) {
                setState('input')
                return

            }
        }
        );
    })

    switch (state) {
        case 'button':
            return (
                <LogButton
                    loginWithGoogle={loginWithGoogle}
                    loginWithApple={loginWithApple}
                />
            );
        case 'input':
            return (
                <InputForm
                    name={name}
                    setName={setName}
                    number={number}
                    setNumber={setNumber}
                />
            );

        default:
            return (
                <p>Loading</p>
            )
    }

}