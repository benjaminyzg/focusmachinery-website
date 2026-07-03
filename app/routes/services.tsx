import React from 'react';

export default function Services() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="mb-10 text-center md:text-left">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-700 block mb-2">Our Capabilities</span>
        <h2 className="text-xl font-bold text-slate-900 tracking-tight sm:text-4xl">
          Technical Maintenance & Fluid Engineering Services
        </h2>
        <p className="mt-3 max-w-3xl text-lg text-slate-500">
          We provide specialized oil purification solutions and mechanical support to maximize equipment lifespan and reduce industrial operational downtime.
        </p>
      </div>

      <div className="space-y-8">
        {/* Card 1: Diagnostics */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Oil Contamination Analysis & Laboratory Testing</h3>
              <p className="text-slate-500 mt-1">Routine and emergency fluid analysis to determine the exact health of your lubricants and machinery.</p>
            </div>
            <span className="self-start sm:self-center inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-inset ring-blue-700/10 uppercase tracking-wider">
              Diagnostics
            </span>
          </div>
          
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Testing Metrics & Standards</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-blue-500 font-bold">✓</span>
                <div><strong>ISO 4406 Cleanliness Codes:</strong> Quantifying solid particulate contamination levels.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-500 font-bold">✓</span>
                <div><strong>Varnish Potential (MPC):</strong> Measuring insoluble color bodies to predict varnish tendencies.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-500 font-bold">✓</span>
                <div><strong>Water Content (Karl Fischer):</strong> Identifying exact parts-per-million (ppm) moisture intrusion.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-blue-500 font-bold">✓</span>
                <div><strong>Elemental Analysis (ICP):</strong> Tracking wear metals (Fe, Cu, Pb) to catch internal component degradation early.</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: Maintenance */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Electrostatic Oil Filtration Services</h3>
              <p className="text-slate-500 mt-1">High-efficiency sub-micron filtration targeting the ultra-fine contaminants that standard mechanical filters miss.</p>
            </div>
            <span className="self-start sm:self-center inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-700/10 uppercase tracking-wider">
              Maintenance
            </span>
          </div>
          
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Capabilities & Benefits</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold">✓</span>
                <div><strong>Sub-Micron Removal:</strong> Extracts insoluble materials down to &lt;0.1 microns, stripping out varnish precursors.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold">✓</span>
                <div><strong>System Flushing:</strong> Restores the system by stripping existing lacquer and varnish deposits off internal valves.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold">✓</span>
                <div><strong>Target Applications:</strong> Ideal for high-pressure hydraulic systems, gas turbine lubes, and major gearboxes.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-500 font-bold">✓</span>
                <div><strong>Efficiency Boost:</strong> Restores oil color, lowers operating temperatures, and extends component lifetimes.</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 3: Consultation */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900">System Troubleshooting & Engineering Consultation</h3>
              <p className="text-slate-500 mt-1">Root-cause analysis and engineered solutions for recurring hydraulic or lubrication system failures.</p>
            </div>
            <span className="self-start sm:self-center inline-flex items-center rounded-md bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 ring-1 ring-inset ring-purple-700/10 uppercase tracking-wider">
              Consultation
            </span>
          </div>
          
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Our Engineering Approach</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-purple-500 font-bold">✓</span>
                <div><strong>On-Site Fluid Audits:</strong> Complete evaluation of system design, operating temperatures, and seal conditions.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-purple-500 font-bold">✓</span>
                <div><strong>Remediation Strategy:</strong> Customized offline filtration sizing and breathers/sealing upgrade recommendations.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-purple-500 font-bold">✓</span>
                <div><strong>Failure Analysis:</strong> Investigating premature pump, valve, or bearing failures tied directly to fluid health.</div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-purple-500 font-bold">✓</span>
                <div><strong>Lifecycle Management:</strong> Planning long-term fluid conservation strategies to lower total oil consumption cost.</div>
              </li>
            </ul>
          </div>
        </div>

      {/* Add this right before the closing tag of your main container, after the last service card */}
      <div className="mt-12 text-left">
      <a href="/contact"
      className="inline-flex items-center justify-left px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 shadow-sm transition-colors duration-200"
      >
          Contact Us to Learn More
      </a>
      </div>
      </div>
    </div>
  );
}