/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // TODO: 測試資料用的圖片
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
