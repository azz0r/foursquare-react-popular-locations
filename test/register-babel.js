require('babel-core/register')({
  ignore: /node_modules/,
  plugins: ["transform-react-jsx", "jsx-control-statements"],
  cache: false,
  presets: ["babel-preset-react"]
})
