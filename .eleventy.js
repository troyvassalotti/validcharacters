module.exports = function (eleventyConfig) {
    // Passthroughs
    eleventyConfig.addPassthroughCopy('assets');

    return {
        dir: {
            input: "src"
        }
    }
};