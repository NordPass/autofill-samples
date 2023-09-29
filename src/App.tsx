import { useState } from 'react'
import './App.css'

enum Forms {
  Login = 'Login',
  Register = 'Register',
  ForgotPassword = 'Forgot Password',
  ChangePassword = 'Change Password',
  PersonalInfo = 'Personal Info',
  CreditCard = 'Credit Card',
}

function App() {
  const [visibleForm, setVisibleForm] = useState<Forms | string>('');
  return (
    <div className="autofill-controls">
      <div className="buttons">
        <button onClick={() => setVisibleForm(Forms.Login)}>Login</button>
        <button>Register</button>
        <button>Forgot Password</button>
        <button>Change Password</button>
        <button>Personal Info</button>
        <button>Credit Card</button>
      </div>
      <div className="forms">
        <div className="formSample">
          {visibleForm == Forms.Login && <form>
            <label>
              <input type="text" placeholder='Email Adress/Username' />
            </label>
            <label>
              <input type="password" placeholder='Password' autoComplete='current-password' />
            </label>
            <button type="submit">Sign In</button>
          </form>}
          {visibleForm == Forms.Register && <form>
            <label>
              <input type="text" placeholder='Email Adress/Username' />
            </label>
            <label>
              <input type="password" placeholder='Password' autoComplete='current-password' />
            </label>
            <button type="submit">Sign In</button>
          </form>}
        </div>
      </div>
    </div>
  )
}

export default App
