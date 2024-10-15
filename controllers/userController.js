class userController{
    list(req,res){
        res.json({message: 'List all users'});
    }
    create(req,res){
       res.json({message: 'Create a new user'});
    }
    async update(req,res){
       res.json({message: 'Update a user'});
     
    }
    async delete(req,res) {
        res.json({message: 'Delete a user'});
    }
    async findById(req,res){
        res.json({message: 'Find a user'});    
    }

}

module.exports =new  userController();