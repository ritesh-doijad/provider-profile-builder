
import { Mail, Phone, Clock } from "lucide-react";

const Contact = ({ data, updateFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-semibold text-slate-900">Contact</h2>
        <p className="text-sm text-slate-600">
          Let clients know how to reach you and when you're available.
        </p>
      </header>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            <Mail className="w-4 h-4 inline-block mr-1 align-text-top" />
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            value={data.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg "
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            <Phone className="w-4 h-4 inline-block mr-1 align-text-top" />
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder=" 9075991567"
            value={data.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg "
          />
        </div>

       
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            <Clock className="w-4 h-4 inline-block mr-1 align-text-top" />
            Preferred Working Hours
          </label>
          <textarea
            id="workingHours"
            name="workingHours"
            rows={3}
            placeholder="e.g. Mon–Fri 9AM–5PM"
            value={data.workingHours}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
