module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "md"
    ]);
    eleventyConfig.addPassthroughCopy("./src/*.css");
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}