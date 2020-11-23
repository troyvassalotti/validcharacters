module.exports = function (eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy({
    "src/img": "assets/img"
  });
  eleventyConfig.addPassthroughCopy({
    "src/css": "assets/css"
  });
  eleventyConfig.addPassthroughCopy({
    "src/scripts": "assets/js"
  });
  eleventyConfig.addPassthroughCopy({
    "src/audio": "assets/audio"
  });

  // Shortcodes
  eleventyConfig.addShortcode("footer", function () {
    return ``
  });

  eleventyConfig.addShortcode("logo", function () {
    return ``
  });
};