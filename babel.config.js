module.exports = function (api) {
  api.cache(true)
  const presets = [
    ['@babel/preset-env', {
      targets: {
        esmodules: true,
        node: true,
      },
    }],
    '@babel/preset-flow',
  ]
  const plugins = []

  return {
    presets,
    plugins,
  }
}
