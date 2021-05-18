const path = require("path");
module.exports = {
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
};
