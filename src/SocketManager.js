import { io } from "socket.io-client";

export default class SocketManager {

    static shared = new SocketManager()
    socket

    constructor() {
        if(this.shared) return
        this.socket = io("http://localhost:3001")
    }

    initialConfigs() {

    }

    login(name, username, longitude, latitude, distanceRadius) {
        this.socket.emit('new-login', {
            name: name,
            username: username,
            longitude: longitude,
            latitude: latitude,
            distanceRadius: distanceRadius
        })
    }

}