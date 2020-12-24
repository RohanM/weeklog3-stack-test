module.exports = {
  webpack: (config, { webpack }) => {
    // When building, ignore specs in pages dir
    // Warning: This may throw off common module bundling:
    // https://github.com/vercel/next.js/issues/1914#issuecomment-327364599
    config.plugins.push(new webpack.IgnorePlugin(/pages\/.*spec.*/));

    return config;
  },
}
