export default function Products() {
  const machineryProducts = [
    {
      name: "KLEENTEK: Electrostatic Oil Cleaner (EOC)",
      tagline: "Varnish & Oil Oxidation Removal",
      description: "Employs an electrostatic mechanism to extract insoluble solid sub-micron contaminants and varnish from industrial hydraulic and turbine installations without degrading primary oil additives.",
    },
    {
      name: "KLEENTEK: Dehydrator Unit (DH)",
      tagline: "Moisture & Water Contamination Management",
      description: "Industrial dehydration systems optimized to extract bound, free, and emulsified water configurations out of machine lubricants safely.",
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="max-w-2xl">
        <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Equipment Portfolio</h3>
        <h2 className="text-xl font-bold text-slate-900">Sustainable Fluid Contamination Control Systems</h2>
        <p className="text-sm text-slate-500 mt-2">Customized solutions designed to meet technical engineering requirements for APAC manufacturing sectors.</p>
      </div>

      <div className="grid gap-4 mt-6">
        {machineryProducts.map((prod, idx) => (
          <div key={idx} className="p-6 border border-slate-100 rounded-lg bg-slate-50/40">
            <h4 className="font-bold text-slate-900 text-base">{prod.name}</h4>
            <span className="inline-block px-2 py-0.5 mt-1 bg-indigo-50 border border-indigo-100 text-indigo-700 font-medium text-[11px] rounded">
              {prod.tagline}
            </span>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
              {prod.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}