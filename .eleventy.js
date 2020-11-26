module.exports = function (eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy({
    "src/img": "assets/img"
  });
  eleventyConfig.addPassthroughCopy({
    "src/css": "assets/css"
  });
  eleventyConfig.addPassthroughCopy({
    "src/scripts": "assets/scripts"
  });
  eleventyConfig.addPassthroughCopy({
    "src/audio": "assets/audio"
  });
  eleventyConfig.addPassthroughCopy({
    "src/video": "assets/video"
  });

  // Shortcodes
  eleventyConfig.addShortcode("footer", function () {
    return ``
  });

  eleventyConfig.addShortcode("logo", function () {
    return ``
  });

  eleventyConfig.addShortcode("header", function () {
    return ``
  });
};