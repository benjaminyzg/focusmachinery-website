import { useState } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, NavLink } from "react-router";
import "./app.css";

export default function Root() {
  // Local state to track which dropdown sub-menu is currently open
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Define your sub-menu items
  const subMenus = {
    products: [
      { name: "Electrostatic Oil Cleaners (EOC Series) ", href: "/products#eoc" },
      { name: "Filter Series (KF Series)", href: "/products#filters" },
      { name: "Dehydrator Units (DH Series)", href: "/products#dehydrator" },
      { name: "Electrostatic Oil Cleaner with Dehydrator (EDH Series)", href: "/products#edh" },
      { name: "Cartridge Collectors & Filters", href: "/products#collectors&filters" },
      { name: "Accessories", href: "/products#accessories" },
    ],
    services: [
      { name: "Laboratory Oil Testing", href: "/services#lab-testing" },
      { name: "Consultancy & Advisory", href: "/services#consultancy" },
      { name: "Training Programme", href: "/services#training" },
      { name: "Technical Support", href: "/services#support" },
    ],
    resources: [
      { name: "Career with Us", href: "/careers" }, // Your clean standalone page from earlier
      { name: "Publication", href: "/resources#publication" },
      { name: "Procurement", href: "/resources#procurement" },
      { name: "Sustainability", href: "/resources#sustainability" },
      { name: "Knowledge Base", href: "/resources#knowledge-base" },
      { name: "Virtual Tours", href: "/resources#virtual-tours" },
    ],
    about: [
      { name: "Our History", href: "/about#company" },
      { name: "Our Leadership", href: "/about#leadership" },
      { name: "Our Board of Directors", href: "/about#board" },
      { name: "Our Accreditations", href: "/about#accreditations" },
      { name: "Frequent Asked Questions", href: "/about#faq" },
    ],
    contact: [
      { name: "Singapore Office (HQ)", href: "/contact#hq" },
      { name: "Request a Quote", href: "/contact#rfq" },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-white text-slate-800 font-sans antialiased">
        <div className="max-w-5xl mx-auto px-6 py-12">
          
          {/* Header Branding Panel */}
          <header className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-6 mb-8">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
                Focus Machinery <span className="text-slate-900 font-bold text-lg">PTE LTD</span>
              </h1>
              <p className="text-s text-slate-500 mt-0.5 tracking-wide uppercase">
                Heavy Machinery & Oil Contamination Control • Singapore
              </p>
            </div>
          </header>

          {/* Navigation Bar with Interactive Sub-menus */}
          <nav className="flex space-x-6 mb-10 border-b border-slate-100 text-l font-semibold tracking-tight relative z-50">
            <NavLink to="/" className={({ isActive }) => `pb-3 border-b-2 transition-colors ${isActive ? 'border-blue-600 text-blue-900' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
              Home
            </NavLink>

            {/* PRODUCTS MENU WITH SUB-MENU */}
            <div 
              className="relative pb-3"
              onMouseEnter={() => setOpenMenu("products")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink to="/products" className={({ isActive }) => `transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                Products <span className="text-[10px]">▼</span>
              </NavLink>
              {openMenu === "products" && (
                <div className="absolute left-0 mt-3 w-56 bg-white border border-slate-100 rounded-md shadow-lg py-1 animate-fadeIn">
                  {subMenus.products.map((item) => (
                    <a key={item.name} href={item.href} className="block px-4 py-2 text-m text-slate-600 hover:bg-slate-50 hover:text-blue-900 transition">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* SERVICES MENU WITH SUB-MENU */}
            <div 
              className="relative pb-3"
              onMouseEnter={() => setOpenMenu("services")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink to="/services" className={({ isActive }) => `transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                Services <span className="text-[10px]">▼</span>
              </NavLink>
              {openMenu === "services" && (
                <div className="absolute left-0 mt-3 w-56 bg-white border border-slate-100 rounded-md shadow-lg py-1 animate-fadeIn">
                  {subMenus.services.map((item) => (
                    <a key={item.name} href={item.href} className="block px-4 py-2 text-m text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* ABOUT US MENU WITH SUB-MENU */}
            <div 
              className="relative pb-3"
              onMouseEnter={() => openMenu === null ? setOpenMenu("about") : undefined}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="relative pb-0" onMouseEnter={() => setOpenMenu("resources")}>
                <NavLink to="/resources" className={({ isActive }) => `transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
                  Resources <span className="text-[10px]">▼</span>
                </NavLink>
                {openMenu === "resources" && (
                  <div className="absolute left-0 mt-3 w-48 bg-white border border-slate-100 rounded-md shadow-lg py-1 animate-fadeIn">
                    {subMenus.resources.map((item) => (
                      <a key={item.name} href={item.href} className="block px-4 py-2 text-m text-slate-600 hover:bg-slate-50 hover:text-blue-900 transition">
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* ABOUT US MENU WITH SUB-MENU */}
            <div 
              className="relative pb-3"
              onMouseEnter={() => openMenu === null ? setOpenMenu("about") : undefined}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <div className="relative pb-0" onMouseEnter={() => setOpenMenu("about")}>
                <NavLink to="/about" className={({ isActive }) => `transition-colors ${isActive ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'}`}>
                  About Us <span className="text-[10px]">▼</span>
                </NavLink>
                {openMenu === "about" && (
                  <div className="absolute left-0 mt-3 w-48 bg-white border border-slate-100 rounded-md shadow-lg py-1 animate-fadeIn">
                    {subMenus.about.map((item) => (
                      <a key={item.name} href={item.href} className="block px-4 py-2 text-m text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition">
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CONTACT MENU WITH SUB-MENU */}
            <div 
              className="relative pb-3"
              onMouseEnter={() => setOpenMenu("contact")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <NavLink to="/contact" className={({ isActive }) => `transition-colors ${isActive ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'}`}>
                Contact <span className="text-[10px]">▼</span>
              </NavLink>
              {openMenu === "contact" && (
                <div className="absolute left-0 mt-3 w-48 bg-white border border-slate-100 rounded-md shadow-lg py-1 animate-fadeIn">
                  {subMenus.contact.map((item) => (
                    <a key={item.name} href={item.href} className="block px-4 py-2 text-m text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition">
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Dynamic Page Views */}
          <main>
            <Outlet />
          </main>

          <footer className="mt-24 pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Focus Machinery Pte Ltd. All Rights Reserved.</p>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}