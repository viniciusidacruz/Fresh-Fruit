/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.pinimg.com",
      "static9.depositphotos.com",
      "encrypted-tbn3.gstatic.com",
      "encrypted-tbn2.gstatic.com",
      "encrypted-tbn0.gstatic.com",
      "d3ugyf2ht6aenh.cloudfront.net",
      "encrypted-tbn1.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
