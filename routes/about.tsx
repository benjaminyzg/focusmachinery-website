  export default function About() {
    return (
      <div className="space-y-8 animate-fadeIn">
        {/* Bio Section */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Background & Introduction</h3>
          <p className="text-slate-600 leading-relaxed">
            We're a trading firm based in Singapore - trading and distributing heavy machinery based in Singapore that provides advisory and consulting service in the area of contamination control for used industrial hydraulic oil and lubricant used for industrial application.
          </p>
          {/* ... keeping your existing bio paragraphs ... */}
        </section>

        {/* Toolkit/Skills Section */}
        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Our Story</h3>
          <p className="text-slate-600 leading-relaxed">
          Started by Mr CK Yong in 1999 after more than 20 years in the field of plastic manufacturing in the region of Asia - Singapore, Malaysia, Thailand and Indonesia. 
          With just the network that he has established over the year, he has built up a reputation for himself in the plastic manufacturing industry - across ASEAN.         
          </p>
          {/* ... keeping your existing grid items ... */}
        </section>

        <hr className="border-slate-200" />

        {/* Our History */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Our History</h3>
          <div className="space-y-4 border-l-2 border-slate-200 pl-4 ml-1">
            <div className="relative">
              <span className="font-bold text-slate-800">1999</span>
              <p className="text-slate-600 text-sm mt-1">Started by Mr CK Yong in 1999 after more than 20 years in the field of plastic manufacturing in the region of Asia - Singapore, Malaysia, Thailand and Indonesia. 
                With just the network that he has established over the year, he has built up a reputation for himself in the plastic manufacturing industry - across ASEAN.
              </p>
            </div>
            <div className="relative">
              <span className="font-bold text-slate-800">2015</span>
              <p className="text-slate-600 text-sm mt-1">Focus Machinery Pte Ltd was incorporated in Singapore, focusing initially on local heavy machinery trading.</p>
            </div>
            <div className="relative">
              <span className="font-bold text-slate-800">2019</span>
              <p className="text-slate-600 text-sm mt-1">Expanded capabilities to include specialized fluid contamination control systems and electrostatic oil cleaners.</p>
            </div>
            <div className="relative">
              <span className="font-bold text-slate-800">2023</span>
              <p className="text-slate-600 text-sm mt-1">Extended distribution and service footprints across the APAC manufacturing sectors including Malaysia, Thailand, and Indonesia.</p>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Our Leadership */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Our Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <h4 className="font-semibold text-slate-800 text-base">CK Yong</h4>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Technical Director</span>
              <p className="text-slate-600 text-sm mt-2">Over 15 years of regional experience in industrial equipment distribution and fluid logistics operations.</p>
            </div>
            <div className="p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <h4 className="font-semibold text-slate-800 text-base">Cecilia Neo</h4>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Finance Head</span>
              <p className="text-slate-600 text-sm mt-2">Specialist in engineering diagnostics and oil contamination analysis across power generation plants.</p>
            </div>
            <div className="p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <h4 className="font-semibold text-slate-800 text-base">Benjamin Yong</h4>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Commercial - Sales</span>
              <p className="text-slate-600 text-sm mt-2">Specialist in engineering diagnostics and oil contamination analysis across power generation plants.</p>
            </div>
            <div className="p-4 border border-slate-100 rounded-lg bg-slate-50/50">
              <h4 className="font-semibold text-slate-800 text-base">Edric Yong</h4>
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Technical Delivery</span>
              <p className="text-slate-600 text-sm mt-2">Specialist in engineering diagnostics and oil contamination analysis across power generation plants.</p>
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Our Board of Directors */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Our Board of Directors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-slate-800 text-sm">-To Be Announced-</h4>
              <span className="text-xs text-slate-400 block">Non-Executive Chairman</span>
            </div>
            <div>
              <h4 className="font-medium text-slate-800 text-sm">-To Be Announced-</h4>
              <span className="text-xs text-slate-400 block">Executive Board Member</span>
            </div>
            <div>
              <h4 className="font-medium text-slate-800 text-sm">-To Be Announced-</h4>
              <span className="text-xs text-slate-400 block">Independent Director</span>
            </div>
            <div>
              <h4 className="font-medium text-slate-800 text-sm">-To Be Announced-</h4>
              <span className="text-xs text-slate-400 block">Non-Executive Director</span>
            </div>
          </div>
        </section>
        
        <hr className="border-slate-200" />

        {/* Our Accreditation */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Our Accreditation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> ISO 9001:2015 – Quality Management Systems
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> bizSAFE Level 4 Certification
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Certified Fluid Power Specialists (CFPS)
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✔</span> Member of Singapore Manufacturing Federation
            </div>
          </div>
        </section>

        <hr className="border-slate-200" />

        {/* Frequently Asked Questions */}
        <section className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-700">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="space-y-1">
              <h4 className="font-medium text-slate-800 text-sm">Which countries do you distribute and ship to?</h4>
              <p className="text-slate-600 text-sm">We serve the entire APAC region, with dedicated distribution pipelines inside Singapore, Malaysia, Thailand, and Indonesia.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-slate-800 text-sm">What industries use electrostatic oil cleaners?</h4>
              <p className="text-slate-600 text-sm">Electrostatic oil cleaners are ideally suited for high-precision manufacturing, including plastics injection molding, marine engineering, and power generation turbines.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-slate-800 text-sm">Do you offer on-site maintenance and system fluid analysis?</h4>
              <p className="text-slate-600 text-sm">Yes, our technical team provides field deployment services, oil health testing, and predictive maintenance audits for all continuous-operation manufacturing plants.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-slate-800 text-sm">What certificates are provided with each machine?</h4>
              <p className="text-slate-600 text-sm">Yes, every machine delivered by KLEENTEK's Technology - Tokyo, Japan - come with a Certificate of Manufacture (issued by KLEENTEK"s Technology - Tokyo, Japan) and a Certificate of Origin (Issued by the Ministry of Trade & Industry, Export). This certificate can/will be made available upon request, and be addressed to the rightful owner of purchase.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-slate-800 text-sm">How does KLEENTEK's technology work?</h4>
              <p className="text-slate-600 text-sm">KLEENTEK: Electrostatic Oil Cleaner (“EOC”) make use of the principle of Coulomb's Law. Oil flows around multiple pairs of electrodes with potential difference. suitably shaped inserts - collectors - are placed between the electrodes, where the particles are captured by the principle of electrostatic forces. The collectors are easily replaceable, affordable and sustainable. It can remove solid contaminant up  to a few kilograms ("kg").</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-slate-800 text-sm">Does Electrostatic Cleaning affect and impact oil additives?</h4>
              <p className="text-slate-600 text-sm">The use of electrostatic oil cleaning on hydraulic and lubricating oil do not remove additives that has been blended and added into oil-by-oil manufacturer. However, with the prolong usage of KLEENTEK: Electrostatic Oil Cleaner, the depletion of oil additive is expected for most of the scenario. And therefore oil top-up is  recommended and preferred of the same brand and and model.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-medium text-slate-800 text-sm">Why is KLEENTEK's technology so unique and special?</h4>
              <p className="text-slate-600 text-sm">KLEENTEK: Electrostatic Oil Cleaner (“EOC”) could remove insoluble solid contaminant, varnish and oil oxidation products from hydraulic and lubricating oil from up to 0.03 micron onward. It removes varnish, oil oxidation product and insoluble solid contaminant without causing spark discharge in the hydraulic lubrication system. </p>
            </div>
          </div>
        </section>
      </div>
    );
  }