import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormPage'
import './LandingPage.css'

export default function LandingPage() {
    return (
    <div className='splashWrapper'>
        <div className="splash">
    </div>
        <div>
            <LoginFormModal />
            <SignupFormModal />
        </div>
    </div>
    )
}
