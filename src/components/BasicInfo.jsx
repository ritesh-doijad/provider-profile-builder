"use client";

import { Upload } from "lucide-react";

const BasicInfo = ({ data, updateFormData }) => {
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  
  const handleUploadClick = () => {
    updateFormData({ profilePicture: "https://thvnext.bing.com/th/id/OIP.xrZIEhpJrAdGTbuBh8JHOQHaJy?r=0&cb=thvnext&rs=1&pid=ImgDetMain" });
  };

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900">Basic Information</h2>
      </header>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
            placeholder=" Ritesh Doijad"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg"
          />
        </div>

        <div>
          <label  className="block text-sm font-medium text-slate-700 mb-1">
            Profile Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            value={data.bio}
            onChange={handleChange}
            placeholder="Tell us about your self"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg resize-none "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Profile Picture
          </label>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={handleUploadClick}
              className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg "
            >
              <Upload className="w-4 h-4" />
              Upload Picture
            </button>

            {data.profilePicture && (
              <div className="flex items-center gap-2">
                <img
                  src={data.profilePicture}
                  alt="Profile"
                  className="w-12 h-12 rounded-full object-cover border border-slate-300"
                />
                <span className="text-sm text-green-600">Uploaded</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicInfo;
