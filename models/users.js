import { Schema,model,models } from "mongoose";

const UsersChema = new Schema({
    email:{
        type:String,
        unique:[true,'Email already exists'],
        required:[true,'Email required']
    },
    name:{
        type:String,
        required:[true,'Name is required'],
    },
    image:{
        type:String,
        
    },
    createdAt:{
    
        type:Date,
        
        
    },

    subscribed:{
        type:Boolean,
        default:false
    },
    api_limit:{
        type:Number,
        default:3
    }
    
    
});

const Users=models.Users || model('Users',UsersChema);
export default Users;