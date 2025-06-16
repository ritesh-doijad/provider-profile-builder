"use client"

import { CheckCircle2, Circle } from "lucide-react"

const specializations = [
  "Frontend Development",
  "Backend Development",
  "Full-Stack Development",
  "UI/UX Design"
]

const services = [
  "Website Development",
  "Performance Optimization",
  "Maintenance & Support",
  "Consultation"
]


const Services = ({ data, updateFormData }) => {
  const handleToggle = (field, value) => {
    const currentList = data[field] || []
    const updatedList = currentList.includes(value)
      ? currentList.filter((item) => item !== value)
      : [...currentList, value]

    updateFormData({ [field]: updatedList })
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Services & Expertise</h2>
        <p className="text-slate-600 text-sm">
          Select the areas you specialize in and the services you provide to clients.
        </p>
      </div>

    
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 mb-2">Specializations</legend>
        <div className="grid grid-cols-2 gap-3">
          {specializations.map((item) => {
            const isChecked = data.specializations.includes(item)
            return (
              <label
                key={item}
                htmlFor={`specialization-${item}`}
                className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="flex-shrink-0">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-400" />
                  )}
                </div>
                <input
                  id={`specialization-${item}`}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggle("specializations", item)}
                  className="sr-only"
                />
                <span className="text-sm text-slate-700">{item}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-slate-700 mb-2">Services</legend>
        <div className="grid grid-cols-1 gap-3">
          {services.map((item) => {
            const isChecked = data.services.includes(item)
            return (
              <label
                key={item}
                htmlFor={`service-${item}`}
                className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <div className="flex-shrink-0">
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  ) : (
                    <Circle className="w-5 h-5 text-slate-400" />
                  )}
                </div>
                <input
                  id={`service-${item}`}
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleToggle("services", item)}
                  className="sr-only"
                />
                <span className="text-sm text-slate-700">{item}</span>
              </label>
            )
          })}
        </div>
      </fieldset>

      <div>
        <label  className="block text-sm font-medium text-slate-700 mb-2">
          Years of Experience
        </label>
        <input
          id="experience"
          name="experience"
          type="number"
          min="0"
          max="50"
          placeholder="e.g . 3 Years"
          value={data.experience}
          onChange={(e) => updateFormData({ experience: e.target.value })}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg  transition-all"
        />
      </div>
    </div>
  )
}

export default Services
