export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-12">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wider">
          Equipment Portfolio
        </h2>
        <h1 className="text-3xl font-black text-slate-900 mt-2">
          Sustainable Fluid Contamination Control Systems
        </h1>
        <p className="text-slate-500 mt-2 text-sm">
          Customized solutions designed to meet technical engineering requirements for APAC manufacturing sectors.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6">
        
        {/* 1. KLEENTEK: EOC (SP Series) */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900">
              KLEENTEK: Electrostatic Oil Cleaner (EOC) (SP Series)
            </h3>
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded mt-2">
              Varnish & Oil Oxidation Removal (Analog)
            </span>
            <p className="text-slate-600 text-sm mt-3">
              Employs a straightforward, proven electrostatic mechanism to extract insoluble solid sub-micron contaminants and varnish from industrial hydraulic and turbine installations without degrading primary oil additives. Features an analog kV/Ampere meter and preset timers.
            </p>
            <div className="mt-2 text-xs font-mono text-slate-400">
              Models: EOC-R25A, EOC-R50A, EOC-R100A, EOC-R200A
            </div>
          </div>
          <div className="w-full md:w-48 h-32 bg-slate-50 rounded-lg flex items-center justify-center">
            <img src="/images/kleentek-sp.png" alt="SP Series" className="max-h-full max-w-full object-contain" />
          </div>
        </div>

        {/* 2. KLEENTEK: EOC (TP Series) */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900">
              KLEENTEK: Electrostatic Oil Cleaner (EOC) (TP Series)
            </h3>
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded mt-2">
              Varnish & Oil Oxidation Removal (Digital)
            </span>
            <p className="text-slate-600 text-sm mt-3">
              The all-new series featuring an improved ergonomic design, digital control and display unit, and remote monitoring capabilities. Equipped with a Higher High Voltage Transformer (15kV HVT) for an optimized cleaning rate with a smaller overall footprint.
            </p>
          </div>
          <div className="w-full md:w-48 h-32 bg-slate-50 rounded-lg flex items-center justify-center">
            <img src="/images/image_edited_edited.png" alt="TP Series" className="max-h-full max-w-full object-contain" />
          </div>
        </div>

        {/* 3. KLEENTEK: KLEENTEK Filter (KF Series) */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900">
              KLEENTEK: KLEENTEK Filter (KF Series)
            </h3>
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded mt-2">
              Moisture & Solid Contamination Management
            </span>
            <p className="text-slate-600 text-sm mt-3">
              Utilizes patented filtration elements designed by KLEENTEK Corp., Japan. Engineered specifically for setups where fluid characteristics restrict the direct application of standard electrostatic cleaner fields.
            </p>
          </div>
          <div className="w-full md:w-48 h-32 bg-slate-50 rounded-lg flex items-center justify-center">
            <img src="/images/KF-16_edited.png" alt="KF Series" className="max-h-full max-w-full object-contain" />
          </div>
        </div>

        {/* 4. KLEENTEK: Dehydrator Unit (DH Series) */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900">
              KLEENTEK: Dehydrator Unit (DH Series)
            </h3>
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-2 py-1 rounded mt-2">
              Moisture & Water Contamination Management
            </span>
            <p className="text-slate-600 text-sm mt-3">
              Employs deep-layer separation, absorption, and agglomeration techniques to coagulate minuscule water molecules into larger configurations. Designed to extract bound, free, and emulsified water safely out of critical machine lubricants.
            </p>
          </div>
          <div className="w-full md:w-48 h-32 bg-slate-50 rounded-lg flex items-center justify-center">
            <img src="/images/product-dh-big.png" alt="DH Series" className="max-h-full max-w-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}