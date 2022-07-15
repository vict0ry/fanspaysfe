import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import store, { history } from './store'

import { BrowserRouter, Route, Navigate, Routes, Outlet } from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'

import 'sanitize.css/sanitize.css'
import './index.css'
import { Profile } from './pages/profile/profile'
import Register from './pages/register'
import Login from './pages/login'
import { Messages } from './pages/messages/messages'
import { Users } from './pages/users'
import axios from 'axios'
import { persistStore } from 'redux-persist'
import { socket, SocketContext } from './context/socket'
import { EditProfile } from './pages/edit-profile/edit-profile'
import {Finance} from './pages/Finance/finance'
import { Home } from './pages/home'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import { Shop } from './pages/Shop'
import MainLayout from './layout/main-layout'
import { Customer } from './pages/customer/customer'
import { beURL } from './config'
import { ThemeProvider } from '@mui/material'
import { CustomThemeConfig } from './themeConfig'
import SuccessSnackbar from './components/SuccessSnackbar'
import PaymentStatus from './pages/Finance/Paymentstatus'
import { HomeNotLogged } from './pages/home-not-logged/home-not-logged'

const target = document.querySelector('#root')
axios.defaults.baseURL = beURL
axios.defaults.headers.common['Authorization'] = localStorage.getItem('user')
axios.defaults.headers.post['Content-Type'] = 'application/json'

const root = ReactDOMClient.createRoot(target)
const PrivateWrapper = () => {
  const auth = !!localStorage.getItem('user') || null;
  return auth ? <Outlet /> : <Navigate to="/home" />;
}
const LoginDisallow = () => {
  const auth = !!localStorage.getItem('user') || null;
  return !auth ? <Outlet /> : <Navigate to="/" />;
}

root.render(
  <ThemeProvider theme={CustomThemeConfig}>
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <BrowserRouter history={history}>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route path={'/payment-status'} element={<PaymentStatus />}></Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="/" element={<Home />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="/shop/" element={<Shop />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="/shop/:username" element={<Shop />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="/finance" element={<Finance />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="profile" element={<Profile />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="profile/:username" element={<Profile />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="edit" element={<EditProfile />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="customer" element={<Customer />} />
                </Route>
                <Route element={<LoginDisallow />}>
                  <Route path="register" element={<Register />} />
                </Route>
                <Route element={<LoginDisallow />}>
                  <Route path="login" element={<Login />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="messages" element={<Messages />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="messages/:userid" element={<Messages />} />
                </Route>
                <Route element={<PrivateWrapper />}>
                  <Route path="users" element={<Users />} />
                </Route>
              </Route>
              <Route element={<LoginDisallow />}>
                <Route path="home" element={<HomeNotLogged />} />
              </Route>

            </Routes>
          </BrowserRouter>
        </PersistGate>
      </SocketContext.Provider>
    </Provider>
  </I18nextProvider>
  </ThemeProvider>
)
