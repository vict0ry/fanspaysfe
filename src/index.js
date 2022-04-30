import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import store, { history } from './store'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { PersistGate } from 'redux-persist/integration/react'

import 'sanitize.css/sanitize.css'
import './index.css'
import { MainLayout } from './layout/main-layout'
import { Profile } from './pages/profile'
import Register from './pages/register'
import Login from './pages/login'
import { Messages } from './pages/messages/messages'
import { Users } from './pages/users'
import axios from 'axios'
import { persistStore } from 'redux-persist'
import { socket, SocketContext } from './context/socket'
import { EditProfile } from './pages/edit-profile'

const target = document.querySelector('#root')
axios.defaults.baseURL = 'http://localhost:3003/'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('user')
axios.defaults.headers.post['Content-Type'] = 'application/json'

const root = ReactDOMClient.createRoot(target)

root.render(
  <Provider store={store}>
    <SocketContext.Provider value={socket}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <BrowserRouter history={history}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="profile" element={<Profile />} />
              <Route path="profile/:username" element={<Profile />} />
              <Route path="edit" element={<EditProfile />} />
              <Route path="register" element={<Register />} />
              <Route path="login" element={<Login />} />
              <Route path="messages" element={<Messages />} />
              <Route path="messages/:userid" element={<Messages />} />
              <Route path="users" element={<Users />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </SocketContext.Provider>
  </Provider>
)
