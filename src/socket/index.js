import Config from '../config'
import { Socket } from 'phoenix-channels'

let socket = new Socket(Config.SOCKET_ENDPOINT)
socket.connect();

export default socket;