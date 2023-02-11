import { HorizontalIconButton } from '../../../components/buttons/horizontal-icon-button/horizontal-icon-button'
import { langData } from '../../../data/data management/database-management'

import './login-body.css'

export function LoginBody({ }) {

    if (true) {
        return (
            <>
                <div className='login-with-apple'>
                    <HorizontalIconButton icon={require('../../../assets/logo-google.png')} text={langData.login.logInWith} reverse={true} />
                </div>
                <div className='login-with-google'>
                    <HorizontalIconButton icon={require('../../../assets/logo-apple.png')} text={langData.login.logInWith} reverse={true} />
                </div>
            </>
        )
    } else {
        return (<></>)
    }

}