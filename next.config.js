/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                 // 👈 enables static export
  images: { unoptimized: true },    // 👈 required for Next <Image/> on GitHub Pages
};

module.exports = nextConfig;
