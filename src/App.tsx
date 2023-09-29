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
        <button onClick={() => setVisibleForm(Forms.Register)}>Register</button>
        <button onClick={() => setVisibleForm(Forms.ForgotPassword)}>Forgot Password</button>
        <button onClick={() => setVisibleForm(Forms.ChangePassword)}>Change Password</button>
        <button onClick={() => setVisibleForm(Forms.PersonalInfo)}>Personal Info</button>
        <button onClick={() => setVisibleForm(Forms.CreditCard)}>Credit Card</button>
      </div>
      <div className="forms">
        <div className="formSample">

          {visibleForm == Forms.Login && <form>
            <h1>Login</h1>
            <label>
              <input type="text" placeholder='Email Adress/Username' />
            </label>
            <label>
              <input type="password" placeholder='Password' autoComplete='current-password' />
            </label>
            <button type="submit">Sign In</button>
          </form>}

          {visibleForm == Forms.Register && <form>
            <h1>Register</h1>
            <label>
              <input type="text" placeholder='Email Adress/Username' />
            </label>
            <label>
              <input type="password" placeholder='Password' autoComplete='new-password' />
            </label>
            <button type="submit">Sign Up</button>
          </form>}

          {visibleForm == Forms.ForgotPassword && <form>
            <h1>Forgot Password</h1>
            <label>
              <input type="text"  placeholder='Email Adress' />
            </label>
            <button type="submit">Get Password</button>
          </form>}

          {visibleForm == Forms.ChangePassword && <form>
            <h1>Change Password</h1>
            <input type="password"  placeholder='Current password' />
            <input type="password"  placeholder='New Password' />
            <input type="password"  placeholder='Repeat New Password' />
            <button type="submit">Submit</button>
          </form>}

          {visibleForm == Forms.PersonalInfo && <form>
            <h1>Personal Info</h1>
            <input type="text"  placeholder='First Name' />
            <input type="text"  placeholder='Last Name' />
            <input type="text"  placeholder='Email' />
            <input type="text"  placeholder='Phone number' />
            <button type="submit">Submit</button>
          </form>}

          {visibleForm == Forms.CreditCard && <form>
            <h1>Credit Card</h1>
            <input type="text"  placeholder='CC number' />
            <input type="text"  placeholder='MM/YY' />
            <input type="text"  placeholder='CVV' />
            <button type="submit">Submit</button>
          </form>}
        </div>
      </div>
    </div>
  )
}

export default App
