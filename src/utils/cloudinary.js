import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const uploadCloudinary = async (localFile) => {
  try {
    if (!localFile) return null;
    const response = await cloudinary.uploader.upload(localFile, {
      resource_type: "auto",
    });
    console.log("File Successfully uploaded to Cloudinary", response.url);
    return response;
  } catch (err) {
    fs.unlinkSync(localFile); // removed safely the temporary file if the upload operation failed
    console.error(err);
  }
};

export { uploadCloudinary };
