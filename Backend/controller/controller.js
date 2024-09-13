import userModel from "../model/userModel.js";
export async function getPosting(req,res){
    try{
    const result=await userModel.find();
    res.send(result);
    }
   catch(err){
    console.log(err);
   }
}
export async function addPosting(req, res) {
    const postings = req.body;

    try {
        const addResult = await userModel.insertMany(postings);
        res.status(201).send(addResult);
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Error adding job postings", error: err.message });
    }
}

export async function deletePost(req,res){
    const {id}=req.params;
    try{
    const deletedData=await userModel.findByIdAndDelete(id);
    if(!deletedData)
    res.send("deleted successfully");
    }
    catch(err){
        console.log(err);  
    }
}
export async function updatePost(req,res){
    const {id}=req.params;
    try{
        const updateData=await userModel.findByIdAndUpdate(id,req.body ,{ new: true });
        res.send(updateData)
    }
    catch(err){
        console.log(err);
    }
}