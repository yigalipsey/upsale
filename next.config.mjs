/** @type {import('next').NextConfig} */
const nextConfig = {
  // אופטימיזציה לביצועים
  experimental: {
    optimizePackageImports: ["react-icons"],
  },

  // אופטימיזציה לתמונות
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 ימים
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // דחיסה
  compress: true,

  // קאשינג
  generateEtags: true,

  // אופטימיזציה לבאנדלים
  swcMinify: true,

  // הגדרות אבטחה
  poweredByHeader: false,

  // אופטימיזציה לפונטים
  optimizeFonts: true,

  // הגדרות נוספות לביצועים
  reactStrictMode: true,

  // אופטימיזציה לקבצי CSS
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // אופטימיזציה לבאנדלים
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
