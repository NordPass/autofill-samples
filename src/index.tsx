import React from 'react';
import { isMobile } from 'react-device-detect';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout.tsx';
import { AllForms } from './Forms/AllForms.tsx';
import { Builder } from './Forms/Builder.tsx';
import { ChangeEmail } from './Forms/ChangeEmail.tsx';
import { ChangeEmailWithPassword } from './Forms/ChangeEmailWithPassword.tsx';
import { ChangePassword } from './Forms/ChangePassword.tsx';
import { CheckoutForm } from './Forms/CheckoutForm.tsx';
import { CreditCard } from './Forms/CreditCard.tsx';
import { CustomLogin } from './Forms/CustomLogin.tsx';
import { CustomLoginTwoFields } from './Forms/CustomLoginTwoFields.tsx';
import { ForgotPassword } from './Forms/ForgotPassword.tsx';
import { HiddenSecondStepLogin } from './Forms/HiddenSecondStepLogin.tsx';
import { Login } from './Forms/Login.tsx';
import { LoginPhone } from './Forms/LoginPhone.tsx';
import { LoginRegister } from './Forms/LoginRegister.tsx';
import { LoginSixFieldsTotp } from './Forms/LoginSixFieldsTotp.tsx';
import { LoginTotp } from './Forms/LoginTotp.tsx';
import { ModalLogin } from './Forms/ModalLogin.tsx';
import { OneTimePassword } from './Forms/OneTimePassword.tsx';
import { Other } from './Forms/Other.tsx';
import { PersonalInfo } from './Forms/PersonalInfo.tsx';
import { PersonalInfoPhone } from './Forms/PersonalInfoPhone.tsx';
import { PersonalInfoSelects } from './Forms/PersonalInfoSelects.tsx';
import { Register } from './Forms/Register.tsx';
import { SecondStepLogin } from './Forms/SecondStepLogin.tsx';
import { SecondStepLoginTotp } from './Forms/SecondStepLoginTotp.tsx';
import { Subscribe } from './Forms/Subscribe.tsx';
import { ThreeStepLoginTotp } from './Forms/ThreeStepLoginTotp.tsx';
import { TOTP } from './Forms/TOTP.tsx';
import { TOTPOneField } from './Forms/TOTPOneField.tsx';
import { TwoLogin } from './Forms/TwoLogin.tsx';
import { MobileNavigation } from './mobileView/MobileNavigation.tsx';
import { Navigation } from './Navigation.tsx';
import { DirectionProvider } from './utils/DirectionProvider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DirectionProvider>
      <HashRouter>
        {isMobile ? <MobileNavigation /> : <Navigation />}
        <Layout>
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
            <Route path="/totp" element={<TOTP />} />
            <Route path="/totpOneField" element={<TOTPOneField />} />
            <Route path="/loginRegister" element={<LoginRegister />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/customLogin" element={<CustomLogin />} />
            <Route path="/customLoginTwoFields" element={<CustomLoginTwoFields />} />
            <Route path="/identitySelects" element={<PersonalInfoSelects />} />
            <Route path="/secondStepLogin" element={<SecondStepLogin />} />
            <Route path="/hiddenSecondStepLogin" element={<HiddenSecondStepLogin />} />
            <Route path="/twoLogin" element={<TwoLogin />} />
            <Route path="/modalLogin" element={<ModalLogin />} />
            <Route path="/identityPhone" element={<PersonalInfoPhone />} />
            <Route path="/loginPhone" element={<LoginPhone />} />
            <Route path="/checkoutForm" element={<CheckoutForm />} />
            <Route path="/changeEmailWithPassword" element={<ChangeEmailWithPassword />} />
            <Route path="/loginTotp" element={<LoginTotp />} />
            <Route path="/secondStepLoginTotp" element={<SecondStepLoginTotp />} />
            <Route path="/threeStepLoginTotp" element={<ThreeStepLoginTotp />} />
            <Route path="/loginSixFieldsTotp" element={<LoginSixFieldsTotp />} />
            <Route path="*" element={<AllForms />} />
          </Routes>
        </Layout>
      </HashRouter>
    </DirectionProvider>
  </React.StrictMode>,
);
