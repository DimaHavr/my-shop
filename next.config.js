const withFonts = require("next-fonts");
module.exports = withFonts();
// next.config.js

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};
