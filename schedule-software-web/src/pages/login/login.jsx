import { LoginBody } from "./login-body/login-body";
import { LoginHeader } from "./login-header/login-header";

import './login.css';

export function Login({

}) {

    return (
        <div className="login-page">
            <LoginHeader />
            <LoginBody />
        </div>
    )
}