import axios from "axios"
import { useState } from "react"
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { useNavigate } from "react-router-dom"

function SettingsForm() {
    const [newPassword, setNewPassword] = useState('')
    const authUser = useAuthUser()
    const signOut = useSignOut()
    const navigate = useNavigate()

    const passwordDetails = JSON.stringify({
        userId: authUser.id,
        password: newPassword
      })
    
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

    const changePassword = () => {
        axios.post("http://localhost:8000/api/change-password", passwordDetails, config)
            .then(res => {
                if(res.data.success) {
                    signOut()
                    navigate('/login')
                }
            })
    }

    return (
        <div className="change-password-form">
            <div class="form-holder">
                <label>Change Password</label>
                <input type="password" onChange={(e) => { setNewPassword(e.target.value) }} />
                <label className="small-text">* You will be logged out after changing your password.</label>
            </div>
            <div class="form-holder">
                <button className="login-btn" onClick={changePassword}>Change Password</button>
            </div>
        </div>
    )
}

export default SettingsForm