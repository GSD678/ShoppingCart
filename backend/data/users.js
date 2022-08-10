import bcrypt from "bcryptjs"

const users = [{
    name: "Admin",
    email: "admin@myp.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true
},
    {
        name: "Apollo",
        email: "apollo@myp.com",
        password: bcrypt.hashSync("123456"),
        isAdmin: false
    }]

export default users;