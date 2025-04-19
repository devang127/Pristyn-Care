

import Admin from '../../models/Admin.js'

const route = express.Router();

// create admin
// route.post('/', async (res, req) => {
//     const { email, username, password } = req.body;

//     try {
//         const user = await Admin.findOne({ username })
//         if (user) {
//             return res.status(400).json('User Already Exist')
//         }

//         const newAdmin = new Admin({ email, username, password })
//         await newAdmin.save()
//         res.status(200).json('Admin created succesfully')


//     } catch (error) {
//         return res.status(500).json('Internal server error')
//     }
// })


// update admin
route.patch("/:id", async(res,req) => {
    try {
        await Admin.findByIdAndUpdate(id,{...req.body})
        return res.status(200).json('Admin updated succesfully')
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
})


route.delete("/:id", async(res,req) => {
    try {
        await Admin.findByIdAndDelete(id)
        return res.status(200).json('Admin deleted succesfully')
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
})

export default route;