import { createContext } from 'react'

const io = require('socket.io-client')
export const socket = io('http://localhost:3003')
export const SocketContext = createContext()
