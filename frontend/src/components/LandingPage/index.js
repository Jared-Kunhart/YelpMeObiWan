import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormPage'
import Demo from './Demo'
import './LandingPage.css'

export default function LandingPage() {
    return (
    <div className='splashWrapper'>
        <div className="splash">
    </div>
        <div className='loginButtons'>
            <LoginFormModal />
            <Demo />
            <SignupFormModal />
        </div>
    </div>
    )
}
