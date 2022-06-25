import { createContext } from 'react'
import { beURL } from '../config'

const io = require('socket.io-client')
export const socket = io(beURL)
export const SocketContext = createContext()
