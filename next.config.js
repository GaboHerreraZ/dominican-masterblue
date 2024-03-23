/** @type {import('next').NextConfig} */



const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "llfscfhwhopxywvxgwcz.supabase.co",
        port: "",
      },
    ],
  },
};

// module.exports = withBundleAnalyzer(nextConfig);

module.exports = nextConfig;
