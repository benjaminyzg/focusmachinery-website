import { Link } from "react-router";

export default function Home() {
  return (
    <div className="space-y-16 animate-fadeIn">
      
      {/* 1. HERO SECTION */}
      <section className="py-6 max-w-3xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight">
          Maximize Machinery Lifespan. <br />
          <span className="text-indigo-600">Eliminate Hydraulic Varnish & Contamination.</span>
        </h2>
        <p className="mt-4 text-base text-slate-500 leading-relaxed">
          Focus Machinery Pte Ltd provides industry-leading sub-micron electrostatic oil cleaning and dehydration systems. We help Singapore's manufacturing, maritime, and power generation sectors prevent premature machine failure and dramatically cut down oil consumption.
        </p>
        <div className="mt-6">
          <Link 
            to="/contact#rfq" 
            className="inline-block bg-slate-900 hover:bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
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
            <p className="text-3xl font-black text-indigo-600">Up to 70%</p>
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