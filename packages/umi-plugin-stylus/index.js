module.exports = function (api) {
  api.describe({
    key: 'stylusLoader',
    config: {
      schema(Joi) {
        return Joi.object({
          stylusOptions: Joi.alternatives(Joi.object(), Joi.func()),
          additionalData: Joi.alternatives(Joi.string(), Joi.func()),
          sourceMap: Joi.boolean(),
          webpackImporter: Joi.boolean()
        });
      }
    }
  });

  api.chainWebpack((memo, { createCSSRule }) => {
    createCSSRule({
      lang: 'stylus',
      test: /\.styl(us)?(\?.*)?$/,
      loader: require.resolve('stylus-loader'),
      options: api.config.stylusLoader || {}
    });
    return memo;
  });
};
