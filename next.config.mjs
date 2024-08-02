// next.config.mjs

const nextConfig = {
    //   output: "export",
  
    async redirects() {
      return [
        {
          source: "/",
          destination: "/home",
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;