const path = require("path");
const R = require("ramda");

const withImages = require("next-images");
const withTM = require("next-transpile-modules")(["three"]);
const composeConfig = R.compose(withImages, withTM);

module.exports = composeConfig({
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
    // config.module.rules.push({
    //   test: /\.(png|jpe?g|gif)$/i,
    //   loader: "file-loader",
    //   options: {
    //     name: "[path][name].[ext]",
    //   },
    // });

    return config;
  },
});
