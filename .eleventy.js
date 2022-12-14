const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addPassthroughCopy({ './src/assets': './assets' })
  eleventyConfig.addShortcode('version', function () {
    return now
  })


  // Configure Alpine
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.js': './js/alpine.js',
  })

  // Layout Aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
}; 