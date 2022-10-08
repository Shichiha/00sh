module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(["md"]);
    eleventyConfig.setBrowserSyncConfig({
		files: './_site/css/**/*.css'
	});
    return { dir: { input: "src" } }
}