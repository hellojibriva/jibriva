import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Routes retired in the move to a personal portfolio. Permanent (308) so
  // search engines transfer existing links to the closest current page.
  async redirects() {
    return [
      { source: "/portfolio", destination: "/projects", permanent: true },
      { source: "/portfolio/:path*", destination: "/projects", permanent: true },
      // The portfolio-building story was withdrawn from the public portfolio.
      { source: "/projects/building-my-professional-portfolio", destination: "/projects", permanent: true },
      { source: "/our-work", destination: "/projects", permanent: true },
      { source: "/our-work/:path*", destination: "/projects", permanent: true },
      { source: "/expertise", destination: "/about", permanent: true },
      // Professional Support was folded into About (capabilities) and Contact.
      { source: "/services", destination: "/about", permanent: true },
      { source: "/insights", destination: "/", permanent: true },
      { source: "/insights/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
