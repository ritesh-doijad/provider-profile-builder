import { User, Mail, Phone, Clock, Award, Briefcase } from "lucide-react";

const ProfilePreview = ({ data }) => {
  const isEmpty =
    !data.name &&
    !data.bio &&
    !data.email &&
    !data.phone &&
    data.specializations.length === 0 &&
    data.services.length === 0 &&
    !data.experience &&
    !data.workingHours;

  if (isEmpty) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Profile Preview</h3>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-8 h-8 text-slate-400" />
          </div>
          <p className="text-sm text-slate-500">Fill out the form to preview your profile</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
       
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            {data.profilePicture ? (
              <img
                src={data.profilePicture}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover border-3 border-blue-100"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <User className="w-8 h-8 " />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-semibold text-slate-900 truncate">
              {data.name || "Provider Name"}
            </h4>
            {data.experience && (
              <p className="text-sm text-slate-600 mb-1">
                {data.experience} {parseInt(data.experience) === 1 ? "year" : "years"} of experience
              </p>
            )}
            {data.bio && (
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{data.bio}</p>
            )}
          </div>
        </div>

        
        {(data.specializations.length > 0 || data.services.length > 0) && (
          <div className="space-y-4 mb-6">
            {data.specializations.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium text-slate-700">Specializations</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.specializations.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border  rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {data.services.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-medium text-slate-700">Services</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-md"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        
        {(data.email || data.phone || data.workingHours) && (
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h5 className="text-sm font-medium text-slate-700 mb-3">Contact Information</h5>

            {data.email && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-slate-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500">Email</p>
                  <p className="text-sm text-slate-900 truncate">{data.email}</p>
                </div>
              </div>
            )}

            {data.phone && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-slate-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500">Phone</p>
                  <p className="text-sm text-slate-900">{data.phone}</p>
                </div>
              </div>
            )}

            {data.workingHours && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center mt-0.5">
                  <Clock className="w-4 h-4 text-slate-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500">Availability</p>
                  <p className="text-sm text-slate-900">
                    {data.workingHours}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePreview;
