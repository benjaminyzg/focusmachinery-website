import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
  // This maps the root path '/' to home.tsx
  index("routes/home.tsx"), 

  // Explicitly map your other flat files in app/routes/
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("industries", "routes/industries.tsx"),
  route("products", "routes/products.tsx"),
  route("projects", "routes/projects.tsx"),
  route("services", "routes/services.tsx"),
  route("careers", "routes/careers.tsx"),
  route("resources", "routes/resources.tsx"),
] satisfies RouteConfig;