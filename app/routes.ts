import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),                  // Industrial Landing Page
  route("about", "./routes/about.tsx"),        // Company Profile & History
  route("products", "./routes/products.tsx"),  // Equipment Catalog (KLEENTEK)
  route("services", "./routes/services.tsx"),  // Maintenance & Laboratory Testing
  route("contact", "./routes/contact.tsx"),    // Business RFQ / Contact Form


  route("careers", "routes/careers.tsx"),
  route("resources", "routes/resources.tsx"),
] satisfies RouteConfig;