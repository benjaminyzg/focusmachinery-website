import { Link } from "react-router";

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-sans text-slate-800">
      
      {/* Page Header */}
      <div className="mb-12 border-b border-slate-100 pb-6">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider">Resource Center</h2>
        <h1 className="text-4xl font-black text-slate-900 mt-2">Technical Documents & Insights</h1>
        <p className="text-slate-600 mt-4 max-w-3xl text-sm leading-relaxed">
          Access our comprehensive collection of engineering publications, procurement documentation, sustainability roadmaps, and virtual factory system overviews.
        </p>
      </div>

      {/* 1. PUBLICATIONS SECTION */}
      <section id="publication" className="scroll-mt-20 mb-16">
        <h2 className="text-2xl font-black text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">Publications & Technical Papers</h2>
        <p className="text-slate-600 text-sm mb-4">Read our latest shared studies and engineering findings regarding oil analysis, fluid dynamics, and varnish prevention.</p>
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h4 className="font-bold text-slate-900">The Impact of Electrostatic Oil Cleaning on Machine Longevity</h4>
              <p className="text-xs text-slate-500 mt-1">Published: Technical Whitepaper | PDF (2.4 MB)</p>
            </div>
            <button className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-slate-800">Download Paper</button>
          </div>
        </div>
      </section>

      {/* 2. PROCUREMENT SECTION */}
      <section id="procurement" className="scroll-mt-20 mb-16">
        <h2 className="text-2xl font-black text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">Procurement & Supplier Guidelines</h2>
        <p className="text-slate-600 text-sm mb-4">We hold our supply chain partners to rigorous operational and manufacturing quality requirements.</p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <h4 className="font-bold text-slate-900 mb-2">Standard Terms & Conditions for Vendors</h4>
          <p className="text-xs text-slate-600 leading-relaxed mb-4">
            All heavy machinery modules, filtration units, and components ordered must comply with APAC manufacturing standards, ISO 9001 certifications, and safety test benchmarks.
          </p>
          <button className="text-blue-600 font-semibold text-xs hover:underline">View Procurement Portal &rarr;</button>
        </div>
      </section>

      {/* 3. SUSTAINABILITY SECTION */}
      <section id="sustainability" className="scroll-mt-20 mb-16">
        <h2 className="text-2xl font-black text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">Sustainability & Environmental Roadmap</h2>
        <p className="text-slate-600 text-sm mb-4">Our systems directly extend the life cycle of hydraulic and machine lubricants, minimizing industrial waste carbon footprints.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-slate-100 rounded-xl p-5 bg-white shadow-sm">
            <h4 className="font-bold text-sm text-slate-900 mb-2">Oil Conservation Impact</h4>
            <p className="text-xs text-slate-600 leading-relaxed">By extracting varnish and microscopic sub-micron particulates down to the sub-micron level, our systems prevent premature oil waste dumps across factories.</p>
          </div>
          <div className="border border-slate-100 rounded-xl p-5 bg-white shadow-sm">
            <h4 className="font-bold text-sm text-slate-900 mb-2">Energy-Efficient Operations</h4>
            <p className="text-xs text-slate-600 leading-relaxed">Modern KLEENTEK units are engineered with low-draw high voltage configurations, lowering passive power consumption in heavy factories.</p>
          </div>
        </div>
      </section>

      {/* 4. KNOWLEDGE BASE SECTION */}
      <section id="knowledge-base" className="scroll-mt-20 mb-16">
        <h2 className="text-2xl font-black text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">Knowledge Base & FAQ</h2>
        <p className="text-slate-600 text-sm mb-4">Quick troubleshooting answers and educational foundational info regarding industrial oil contamination.</p>
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm text-slate-900">What exactly is oil varnish?</h4>
            <p className="text-xs text-slate-600 mt-2">Varnish is a sticky, thin insoluble byproduct of thermal oil degradation that plates out onto warm metallic surfaces, choking control valves and causing machinery to overheat.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-bold text-sm text-slate-900">Can standard mechanical filters remove varnish?</h4>
            <p className="text-xs text-slate-600 mt-2">No. Varnish molecules are smaller than 1 micron when suspended. They pass completely through standard pore filters, requiring electrostatic separation techniques.</p>
          </div>
        </div>
      </section>

      {/* 5. VIRTUAL TOURS SECTION */}
      <section id="virtual-tours" className="scroll-mt-20 mb-8">
        <h2 className="text-2xl font-black text-slate-900 mb-4 border-l-4 border-blue-600 pl-3">Virtual Tours & Product Previews</h2>
        <p className="text-slate-600 text-sm mb-4">Take a closer digital look at our system integrations and full physical setups.</p>
        <div className="aspect-video w-full max-w-3xl bg-slate-100 rounded-2xl border border-slate-200 flex flex-col justify-center items-center text-center p-6">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-purple-600 text-xl font-bold">▶</div>
          <h4 className="font-bold text-slate-900">Interactive 3D Equipment Rig Walkthrough</h4>
          <p className="text-xs text-slate-500 mt-1 max-w-md">Launch the interactive render view to tour a full-scale industrial oil cleaning filtration loop assembly.</p>
          <button className="mt-4 bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-900">Launch Interactive Tour</button>
        </div>
      </section>

    </div>
  );
}