import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        default:null,
    },
    dob:{
        type:String,
        default:null,

    },
    gender:{
        type:String,
        default:null,

    },
    hobbies:{
            type:Array,
            default:[],
    },
    state:{
        type:String,
        default:null,
    },
    address:{
        type:String,
        default:null
    },
    resume:{
        type:String,
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:Number,
        default:1
    }
});

export default mongoose.model('user',UserSchema)