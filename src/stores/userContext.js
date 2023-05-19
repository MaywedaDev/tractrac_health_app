import React from "react";

const userContext = React.createContext({
    name: 'Unknown',
    email: 'unverified@gmail.com'
})

export default userContext