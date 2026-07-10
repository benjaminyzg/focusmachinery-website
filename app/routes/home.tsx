import { Link } from "react-router";

export default function Home() {
  return (
    <div className="space-y-16 animate-fadeIn">

      {/* Section 1: Focus Machinery Corporate Profile */}
      <section className="mt-12 mb-16 max-w-4xl mx-auto px-4 text-center sm:text-left">
        <div className="border-l-4 border-blue-600 pl-6 space-y-3">
          <h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
            Corporate Profile
          </h2>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            Focus Machinery Pte Ltd
          </h3>
          <p className="text-slate-600 leading-relaxed text-base max-w-3xl">
            Established in Singapore, Focus Machinery Pte Ltd is a premier industrial engineering provider specializing in heavy machinery maintenance and advanced oil contamination control. We deliver cutting-edge fluid conditioning and dehydration solutions designed to maximize equipment lifespans, drastically reduce operational downtime, and help industrial facilities cut down on oil consumption.
          </p>
        </div>
      </section>

      {/* Section 2: KLEENTEK Japan Strategic Partnership */}
      <section className="mt-16 mb-16 max-w-5xl mx-auto px-4 border-t border-slate-100 pt-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
    
      {/* Left Column: Heading & Paragraph (Takes up 3/5 width on desktop) */}
        <div className="md:col-span-3 space-y-4">
          <h2 className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">
            Authorized Regional Partner
          </h2>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            KLEENTEK Corp., Japan
          </h3>
          <p className="text-slate-600 leading-relaxed text-base">
            As the authorized distributor, Focus Machinery brings the pioneering engineering of Japan's <strong>KLEENTEK Corporation</strong> directly to your operations. KLEENTEK invented the world’s first electrostatic oil cleaning technology and remains the global benchmark for removing the sub-micron varnish, sludge, and insoluble contaminants that traditional mechanical filters completely miss.
          </p>
        </div>
        {/* Right Column: Core Technological Capabilities (Takes up 2/5 width on desktop) */}
        <div className="md:col-span-2 bg-slate-50 rounded-xl p-6 border border-slate-100 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            Core Technologies Supplied
          </h4>
          <ul className="space-y-2 text-sm text-slate-600 font-medium">
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              Electrostatic Oil Cleaners (EOC Series)
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              Water Absorption & Dehydration Units
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              Continuous Varnish Mitigation Systems
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">✓</span>
              Genuine Japanese Replacement Elements
            </li>
          </ul>
        </div>
      </div>
      </section>

      {/* Section 3: Industrial Applications & Operational Impact */}
<section className="mt-16 mb-16 max-w-5xl mx-auto px-4 border-t border-slate-100 pt-16">
  <div className="space-y-6">
    <div className="text-center sm:text-left space-y-2">
      <h2 className="text-xs font-semibold text-purple-600 uppercase tracking-widest">
        Target Applications
      </h2>
      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
        Industries We Serve & Operational Impact
      </h3>
      <p className="text-slate-600 max-w-2xl text-base">
        Our specialized fluid engineering and KLEENTEK electrostatic purification systems deliver critical protection across diverse, high-stakes industrial environments.
      </p>
    </div>

    {/* Industry Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      
      {/* Industry 1 */}
      <div className="p-5 border border-slate-200/60 rounded-xl hover:shadow-md transition-shadow duration-200 bg-white">
        <h4 className="font-bold text-slate-900 text-lg mb-2">Power Generation</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Prevents varnish build-up on critical gas and steam turbine control valves, ensuring reliable startup sequences and eliminating tripping hazards.
        </p>
      </div>

      {/* Industry 2 */}
      <div className="p-5 border border-slate-200/60 rounded-xl hover:shadow-md transition-shadow duration-200 bg-white">
        <h4 className="font-bold text-slate-900 text-lg mb-2">Maritime & Offshore</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Protects marine hydraulic steering gear, thrusters, and propulsion systems from water contamination and aggressive salt-air micro-wear.
        </p>
      </div>

      {/* Industry 3 */}
      <div className="p-5 border border-slate-200/60 rounded-xl hover:shadow-md transition-shadow duration-200 bg-white">
        <h4 className="font-bold text-slate-900 text-lg mb-2">Manufacturing & Plastics</h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Safeguards high-precision injection molding machines, hydraulic presses, and automated stamping lines from servo-valve sticking.
        </p>
      </div>
          </div>
        </div>
      </section>

      {/* Section 4: Call-to-Action */}
      {/* Section 4: Final Call to Action & Value Proposition */}
      <section className="mt-16 mb-20 max-w-5xl mx-auto px-4">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 shadow-xl text-center relative overflow-hidden">
          
          {/* Subtle Background Decorative Graphic Effect */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-600/10 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-emerald-600/10 rounded-full blur-xl pointer-events-none"></div>

          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              Ready to Eliminate Hydraulic Varnish & Contamination?
            </h3>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Don't wait for unexpected valve stickiness or component failure to disrupt your operations. Contact Focus Machinery today to schedule a fluid conditioning analysis or request a technical quote on KLEENTEK purification systems.
            </p>
            
            {/* Interactive Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors duration-200"
              >
                Request a Technical Quote
              </a>
              <a
                href="mailto:enquiry@focusmachinery.com.sg?subject=Inquiry%20about%20KLEENTEK%20Systems"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-300 bg-slate-800 hover:bg-slate-750 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2 -ml-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Engineering Team
              </a>
            </div>
          </div>
        </div>
      </section>     

      {/*/ 1. HERO SECTION */}
      <section className="py-6 max-w-3xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight">
          Maximize Machinery Lifespan. <br />
          <span className="text-blue-700">Eliminate Hydraulic Varnish & Contamination.</span>
        </h2>
        <p className="mt-4 text-base text-slate-500 leading-relaxed">
          Focus Machinery Pte Ltd provides industry-leading sub-micron electrostatic oil cleaning and dehydration systems. We help Singapore's manufacturing, maritime, and power generation sectors prevent premature machine failure and dramatically cut down oil consumption.
        </p>
        <div className="mt-6">
          <Link 
            to="/contact#rfq" 
            className="inline-block bg-slate-800 hover:bg-blue-750 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
          >
            Request a Technical Quote →
          </Link>
        </div>
      </section>

      {/* 2. THREE PILLARS SECTIONS */}
      <section className="grid gap-6 sm:grid-cols-3">
        <div className="p-5 border border-slate-100 rounded-lg">
          <span className="text-xl">⚙️</span>
          <h3 className="font-bold text-slate-900 mt-2 text-sm">Advanced Products</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Authorized supply of KLEENTEK Electrostatic Oil Cleaners, specialized filters, and moisture dehydrators.
          </p>
        </div>
        
        <div className="p-5 border border-slate-100 rounded-lg">
          <span className="text-xl">🔬</span>
          <h3 className="font-bold text-slate-900 mt-2 text-sm">Fluid Analysis</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Laboratory fluid conditioning analysis mapping patch tests, varnish potential (MPC), and moisture counts.
          </p>
        </div>

        <div className="p-5 border border-slate-100 rounded-lg">
          <span className="text-xl">🛠️</span>
          <h3 className="font-bold text-slate-900 mt-2 text-sm">On-Site Services</h3>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">
            Turnkey engineering support, on-site oil filtration deployment, and hydraulic system troubleshooting.
          </p>
        </div>
      </section>

      {/* 3. BUSINESS PERFORMANCE INDICATORS */}
      <section className="bg-slate-50 rounded-xl p-8 border border-slate-100">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
          Why Companies Trust Focus Machinery
        </h3>
        <div className="grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <p className="text-3xl font-black text-slate-900">Sub-Micron</p>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Contamination Extraction</p>
          </div>
          <div>
            <p className="text-3xl font-black text-blue-600">Up to 70%</p>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Fluid Lifespan Extension</p>
          </div>
          <div>
            <p className="text-3xl font-black text-slate-900">Zero</p>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Additive Depletion Risk</p>
          </div>
        </div>
      </section>

    </div>
  );
}