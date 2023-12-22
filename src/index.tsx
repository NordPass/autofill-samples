import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { AllForms } from './Forms/AllForms.tsx';
import { ChangeEmail } from './Forms/ChangeEmail.tsx';
import { ChangePassword } from './Forms/ChangePassword.tsx';
import { CreditCard } from './Forms/CreditCard.tsx';
import { ForgotPassword } from './Forms/ForgotPassword.tsx';
import { Login } from './Forms/Login.tsx';
import { LoginRegister } from './Forms/LoginRegister.tsx';
import { OneTimePassword } from './Forms/OneTimePassword.tsx';
import { Other } from './Forms/Other.tsx';
import { PersonalInfo } from './Forms/PersonalInfo.tsx';
import { Register } from './Forms/Register.tsx';
import { Subscribe } from './Forms/Subscribe.tsx';
import { Navigation } from './Navigation.tsx';
import { Builder } from './Forms/Builder.tsx';
import { CustomLogin } from './Forms/CustomLogin.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<AllForms />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/identity" element={<PersonalInfo />} />
        <Route path="/creditCard" element={<CreditCard />} />
        <Route path="/changeEmail" element={<ChangeEmail />} />
        <Route path="/other" element={<Other />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/mfa" element={<OneTimePassword />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/customLogin" element={<CustomLogin />} />
        <Route path="*" element={<AllForms />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
