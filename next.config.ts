import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*", // Áp dụng cho tất cả các đường dẫn
        destination: "/client/:path*", // Điều hướng đến thư mục client
      },
    ];
  },
};

export default nextConfig;
