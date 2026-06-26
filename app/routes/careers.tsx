import { Link } from "react-router"; // or your framework's router link component

export default function Careers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-slate-800">
      {/* Header section */}
      <div className="mb-12 border-b border-slate-100 pb-6">
        <h2 className="text-sm font-bold text-purple-600 uppercase tracking-wider">
          Career with Us
        </h2>
        <h1 className="text-4xl font-black text-slate-900 mt-2">
          Join Us Today - Career Portal
        </h1>
        <p className="text-slate-600 mt-4 max-w-3xl text-sm leading-relaxed">
          At Focus Machinery Pte Ltd, we're committed to being a responsible employer of our society, by providing challenging, fulfilling, and varied job functions and roles that cater to individuals of different abilities, capabilities, and knowledge. We believe working should be more rewarding than just a paycheck.
        </p>
      </div>

      {/* Perks and Info Grid */}
      <div className="bg-slate-50 p-6 rounded-2xl mb-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
        <div>
          <h3 className="font-bold text-base text-slate-900 mb-2">What We Offer</h3>
          <ul className="space-y-2 text-slate-600">
            <li>✔ Competitive remuneration package & travel allowance (where essential).</li>
            <li>✔ Structured and comprehensive internship program (industry & class-leading approved).</li>
            <li>✔ All internship opportunities come with conversion into direct employment.</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base text-slate-900 mb-2">Office Facilities</h3>
          <p className="text-slate-600 leading-relaxed">
            Fully stocked office pantry with food, beverages, coffee, tea, hot chocolate, and snacks. Equipped with shower facilities and a dedicated napping room for employee welfare.
          </p>
        </div>
      </div>

      {/* Internship Tracks */}
      <h2 className="text-2xl font-black text-slate-900 mb-6">Available Internship Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Track 1 */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Mechanical, Electrical & Electronics Engineering</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Responsible for engineering-related modifications concerning both the electrical/electronics and mechanical aspects of the equipment. Test, deploy, and implement a roll-on/roll-off program initiative to help clients with change management.
            </p>
          </div>
          <button className="mt-4 text-purple-600 font-semibold text-xs text-left hover:underline">Learn more &rarr;</button>
        </div>

        {/* Track 2 */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Media & Graphic Design</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Responsible for the production of graphic layouts (soft print and digital format) for corporate branding. Propose, design, and implement frameworks to expand the company's digital and online presence.
            </p>
          </div>
          <button className="mt-4 text-purple-600 font-semibold text-xs text-left hover:underline">Learn more &rarr;</button>
        </div>

        {/* Track 3 */}
        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Business Admin & Management</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Gain exposure across cross-functional business operations ranging from marketing and human resources to finance and logistics coordination. Collaborate tightly across distinct teams.
            </p>
          </div>
          <button className="mt-4 text-purple-600 font-semibold text-xs text-left hover:underline">Learn more &rarr;</button>
        </div>

      </div>

      {/* Call to action */}
      <div className="mt-12 text-center border-t border-slate-100 pt-8">
        <p className="text-slate-600 text-sm">
          Prospective candidates are encouraged to view available openings via our LinkedIn page.
        </p>
      </div>
    </div>
  );
}