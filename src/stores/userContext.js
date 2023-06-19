import React from "react";

const userContext = React.createContext({
    name: 'Unknown',
    email: 'unverified@gmail.com',
    isLoggedIn: false
})

export default userContext