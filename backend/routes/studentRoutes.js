const express=require('express');
const Student=require('../models/Student');

const router=express.Router();


router.post('/register',async (req, res) => {
    try {
     
       //console.log('hitting student')
     
      const { name, email, password } = req.body;
      // await Student.deleteMany({});
      const student = new Student({
        name,
        email,
        password
      });
      
    //  console.log(student);
     
      await student.save();
    
      res.status(200).json({ message: 'student created successfully',student });
    
    } 
    catch (err) {
      
      res.status(500).json({ message: err.message });

    }
  })

 router.post('/login',async(req,res)=>{
   
  try{
    const {email,password}=req.body;
    
    const student=await Student.findOne({email:email,password:password});
 
    if(!student){
      throw Error("email or password is wrong");
    }

    res.status(200).json({student});

  }
  catch(err){
        res.status(500).json({message:err.message})
  }
   
   

    


 }) 
 
  module.exports=router;