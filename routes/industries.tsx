import type { MetaFunction } from "@react-router/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Target Industries | Focus Machinery" },
    { name: "description", content: "Comprehensive fluid purification and varnish mitigation across heavy industries." },
  ];
};

export default function Industries() {
  // 1. Data Array matching the structural layout pattern of your products.tsx page
  const industries = [
    {
      category: "Precision Engineering",
      name: "Plastics Manufacturing",
      description: "Safeguards continuous injection molding production lines and automated stamping tools from costly servo-valve sticking errors, lowering component reject metrics.",
      href: "/industries/plastics-manufacturing",
    },
    {
      category: "Marine Systems",
      name: "Maritime & Offshore",
      description: "Protects deep-sea steerage frameworks and directional thruster loops against aggressive salt-air micro-abrasions and moisture infusion loops.",
      href: "/industries/maritime-offshore",
    },
    {
      category: "Energy Production",
      name: "Power Generation",
      description: "Removes destructive thermal fluid oxidation matrices inside gas and steam systems to completely avoid unexpected peaking facility plant turbine trips.",
      href: "/industries/power-generation",
    
    },
    {
      category: "Heavy Operations",
      name: "Paper & Pulp Processing",
      description: "Targeted filtration removes aggressive cellulose dust fibers and ambient condensed steam particulates before critical bearing damage occurs.",
      href: "/industries/paper-pulp-processing",
    },
    {
      category: "Automotive Infrastructure",
      name: "Automotive Manufacturing",
      description: "Maintains strict fluid purity compliance criteria across high-output assembly operations to stabilize stamping press operating line pressures.",
      href: "/industries/automotive-manufacturing",
    },
    {
      category: "Metals Processing",
      name: "Iron & Steel Mills",
      description: "Engineered for severe, dust-heavy mill environments to continuously extract abrasive iron dust and airborne metallic scale fragments.",
      href: "/industries/iron-steel-mills",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* 2. Responsive 4-Column Layout Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Column Sidebar (lg:col-span-1) */}
        <div className="lg:col-span-1 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 block">
            Application
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 font-sans leading-tight">
            Applicable Industries 
          </h1>
          <p className="text-s text-slate-500 leading-relaxed">
            Our specialized fluid engineering setups and certified Japanese KLEENTEK: Electrostatic Oil Cleaner configurations provide dedicated sub-micron varnish protection across mission-critical industrial applications.
          </p>
        </div>

        {/* Right Column Content Grid (lg:col-span-3) */}
        <div className="lg:col-span-3">
          {/* Card Grid Setup */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((item, index) => (
              <div 
                key={index} 
                className="p-6 bg-white border border-slate-200/60 rounded-xl hover:shadow-md transition-shadow duration-200 flex flex-col"
              >
                {/* Header Group */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-lg mt-0.5">
                    {item.name}
                  </h3>
                </div>
                {/* Card Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}