const mongoose=require('mongoose');


const connectDB =(url)=>{
    return mongoose.connect('mongodb+srv://Nouhaila:maouid@sallesblocs.aynux.mongodb.net/test', { useNewUrlParser: true }, (err) => {
        if (!err) { console.log('MongoDB Connection Succeeded.') 
        
    }
        else { console.log('Error in DB connection : ' + err) }
    });
}
module.exports=connectDB