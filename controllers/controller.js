
// For question routes
export async function getQuestions(req,res){
    res.json("Get Question request");
}
export async function postQuestions(req,res){
    res.json("Post New Question request");
}
export async function dropQuestions(req,res){
    res.json("Delete Question request");
}

// For result routes
export async function getResult(req,res){
    res.json("Get Result request");
}
export async function storeResult(req,res){
    res.json("Store/Post New Result request");
}
export async function dropResult(req,res){
    res.json("Delete Result request");
}