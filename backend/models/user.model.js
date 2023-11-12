const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    confirmpassword: {
        type: String,
    },
    image: {
        type: String,
    },
    tokens:[
        {
            token:{
                type: String,
                required:true
            }
        }
    ]
})


// generateAuthToken schema 
userSchema.methods.generateAuthToken = async function (){
    try {
        let token =jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token
    } catch (error) {
        console.log(error);
    }
}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel
