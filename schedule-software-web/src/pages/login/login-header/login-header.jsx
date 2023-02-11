import { Line } from "../../../components/line/line";
import { langData } from "../../../data/data management/database-management";

import './login-header.css';

export function LoginHeader() {
    return (
        <>
            <img className="login-logo" src={require('../../../assets/logo-leandro-e-alessandro.png')}></img>

            <div className="login-header-block">
                <Line />
                <p className="login-header-title">{langData.login.title}</p>
                <p className="login-header-subtitle">{langData.login.subtitle}</p>
                <Line />
            </div>
        </>

    )
}