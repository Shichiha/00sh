module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats([
        "md",
        "css"
    ]);
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}