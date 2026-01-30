import express from 'express'

import {protect} from '../middleware/project.js'
import { isAdmin } from '../middleware/admin.js'
import {authSignup,authLogin} from '../Controller/athuUserController.js'

const authUserRoute=express.Router()
//http://localhost:5000/api/auth/authsignup
authUserRoute.post('/authsign',authSignup)
authUserRoute.post('/authlogin',authLogin)

authUserRoute.get('/profile',protect,(req,res) => {
    res.json({
        message: "protected profile",
        user: req.user
    })
})
authUserRoute.get('/admin',protect, isAdmin, (req,res)=>{
    res.json({
        message: "welcome admin user",
        user: req.user
    })
})
export default authUserRoute
