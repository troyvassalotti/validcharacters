module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        dir: {
            input: "src"
        }
    }
};