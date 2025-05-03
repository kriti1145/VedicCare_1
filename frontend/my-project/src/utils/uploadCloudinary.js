const upload_preset = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const uploadImageToCloudinary = async (file) => {
  const uploadData = new FormData();

  uploadData.append("file", file);
  uploadData.append("upload_preset", "medicvedic_backend_image");
  uploadData.append("api_key", "629968164683319");
  console.log("Upload Preset:", upload_preset); // Should log 'medicvedic_backend_image'
  console.log("Cloud Name:", cloud_name); // Should log 'medicvedic'

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "post",
      body: uploadData,
    }
  );
  const data = await res.json();
  return data;
};
export default uploadImageToCloudinary;
