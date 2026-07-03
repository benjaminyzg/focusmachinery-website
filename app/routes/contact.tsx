export default function Contact() {
  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Section 1: HQ Office Location */}
      <section id="hq" className="scroll-mt-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
          Headquarters
        </h3>
        <h2 className="text-xl font-bold text-slate-900 mb-4">Focus Machinery Pte Ltd</h2>
        
        <div className="grid gap-6 sm:grid-cols-2 text-sm text-slate-600">
          <div className="space-y-2">
            <p className="font-semibold text-slate-800">📍 Address</p>
            <p className="leading-relaxed">
              Block 5008 Ang Mo Kio Avenue 5<br />
              #04-09 Techplace II<br />
              Singapore 569874
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="font-semibold text-slate-800">📞 Contact Details</p>
            <p><strong>Tel:</strong> +65 6356 1915</p>
            <p><strong>Fax:</strong> +65 6356 9310</p>
            <p><strong>Email:</strong> sales@focusmachinery.com.sg</p>
          </div>
        </div>
      </section>

      <hr className="border-slate-100" />

      {/* Section 2: Request A Quote / RFQ Form */}
      <section id="rfq" className="scroll-mt-6">
        <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
          Business Inquiries
        </h3>
        <h2 className="text-xl font-bold text-slate-900 mb-2">Request a Technical Quote</h2>
        <p className="text-sm text-slate-500 mb-6">
          Submit your machinery configurations or oil analysis requests below. Our engineering team will respond within 1–2 business days.
        </p>

        {/* Minimalist Corporate Form */}
        <form className="space-y-4 max-w-xl text-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Company Name</label>
              <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-indigo-600 bg-slate-50/50" placeholder="e.g., Engineering Corp" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Your Name</label>
              <input type="text" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-blue-600 bg-slate-50/50" placeholder="e.g., John Tan" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Business Email</label>
              <input type="email" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-blue-600 bg-slate-50/50" placeholder="e.g., john@company.com" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Inquiry Type</label>
              <select className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-blue-600 bg-slate-50/50">
                <option>Electrostatic Oil Cleaners (EOC)</option>
                <option>Dehydrator Units (DH)</option>
                <option>Laboratory Contamination Testing</option>
                <option>Others / General Spares</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">Message / Requirements</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-indigo-600 bg-slate-50/50" placeholder="Describe your hydraulic system issue or requested filter models..."></textarea>
          </div>

          <button type="submit" className="px-4 py-2 bg-slate-600 text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-blue-900 transition-colors">
            Submit RFQ
          </button>
        </form>
      </section>

    </div>
  );
}