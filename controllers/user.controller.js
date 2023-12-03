
import multer from 'multer';
import { storage } from '../util/fileUpload';
import fs from 'fs'
import userModel from '../models/user.model';


const upload = multer({storage:storage})

export const addForm = async(req,res)=>{
    try{
        
        
        const uploadform = upload.single('resume')
        uploadform(req,res,async function(err){
            if(err){
                return res.status(400).json({
                    message:err.message
                })
            }

            let cv = null

            if(req.file){
                console.log(req.file)
                cv=req.file.filename
            }

            const {name,dob,gender,hobbies,state,address} = req.body

            const formdata =new userModel({
                name:name,
                dob:dob,
                gender:gender,
                hobbies:hobbies,
                state:state,
                address:address,
                resume:cv
            })
            formdata.save()

            if(formdata){
                return res.status(201).json({
                    data:formdata,
                    message:'Form submit successfully'
                })
            }
        })

        
    }
    catch(error){
        return res.status(500).json({
            message:error.message
        })
    }
}


export const getUsers = async(req,res)=>{
    try {

        const  formdata = await userModel.find({status:1})

        if(formdata){
            return res.status(200).json({
                data:formdata,
                message:'user data'
            })
        }
    } 
    catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}







