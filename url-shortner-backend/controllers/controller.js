import urlModel from "../models/urlmodel.js";
import shortid from "shortid";
export async function addData(req,res){
    const url=req.body.url;
    const shortCode=shortid.generate();
    const shortUrl=`https://url-shortner-client-2n6y.onrender.com/${shortCode}`
    await new urlModel({shortCode , url}).save();
    res.status(200).json({ shortUrl }); 
    console.log("data submitted");  
}
export async function getUrl(req, res) {
    const { shortCode } = req.params;

    try {
        const urlData = await urlModel.findOne({ shortCode });
        //const result=await urlModel.find();
        //res.send(result);
        if (urlData) {
            //Redirect to the original long URL
            //res.send(urlData)
           res.redirect(urlData.url);
        } else {
            res.status(404).json({ message: "URL not found" });
        }
    } catch (error) {
        console.error("Error retrieving URL", error);
        res.status(500).json({ error: "Failed to retrieve URL" });
    }
}
export async function getData(req, res) {
    try {
      const data = await urlModel.find();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  }