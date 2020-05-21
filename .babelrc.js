const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: "last 2 versions",
        },
        loose: true,
        modules: isTest ? "commonjs" : false,
      },
    ],
    ["@emotion/babel-preset-css-prop", { sourceMap: false }],
  ],
};
