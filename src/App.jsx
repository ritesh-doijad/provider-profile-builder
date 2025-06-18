
import { useState } from "react";
import BasicInfo from "./components/BasicInfo";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ProfilePreview from "./components/ProfilePreview";

const App = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    profilePicture: null,
    specializations: [],
    services: [],
    experience: "",
    email: "",
    phone: "",
    workingHours: "",
  });

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (step < 3) setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    console.log("Submitted Profile:", formData);
    alert("Profile saved successfully!");
  };

  const CurrentStep = () => {
    switch (step) {
      case 1:
        return <BasicInfo data={formData} updateFormData={updateFormData} />;
      case 2:
        return <Services data={formData} updateFormData={updateFormData} />;
      case 3:
        return <Contact data={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Provider Profile Setup
          </h1>
          <p className="text-slate-600 mt-2">
            Complete your profile to begin offering services
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-3">
            <section className="lg:col-span-2 p-8">
              {CurrentStep()}

              <div className="flex justify-start gap-4 mt-8 pt-6 border-t border-slate-200">
                {step > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Previous
                  </button>
                )}

                {step < 3 ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Save Profile
                  </button>
                )}
              </div>
            </section>

            <aside className="bg-slate-50 p-8">
              <ProfilePreview data={formData} />
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
