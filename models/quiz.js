import { Schema,model,models } from "mongoose";

const QuizSchema = new Schema({
    
    quizzArray:{
        type:Array,
        default:[]
    }
    
    
    
});

const Quiz=models.Quiz || model('Quiz',QuizSchema);
export default Quiz;