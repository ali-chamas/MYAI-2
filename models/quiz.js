import { Schema,model,models } from "mongoose";

const QuizSchema = new Schema({
    
    question:{
        type:String,
        default:''
    },
    choices:{
        type:Array,
        default:[]
    },
    solution:{
        type:String,
        default:''
    }
    
    
    
});

const Quiz=models.Quiz || model('Quiz',QuizSchema);
export default Users;