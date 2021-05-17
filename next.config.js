const path = require("path");
const withMDX = require("@next/mdx")({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "mdx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      use: ["raw-loader", "glslify-loader"],
      exclude: /node_modules/,
    });
    return config;
  },
});
