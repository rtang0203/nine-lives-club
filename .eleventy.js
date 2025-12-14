module.exports = function(eleventyConfig) {
  // Copy CSS to output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy images to output
  eleventyConfig.addPassthroughCopy("src/gallery/images");
  
  // Date formatting filter
  eleventyConfig.addFilter("date", (date, format) => {
    const d = new Date(date);
    if (format === "year") return d.getFullYear();
    if (format === "month") return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  });

  // Collection: writing (sorted by date, newest first)
  eleventyConfig.addCollection("writing", (collection) => {
    return collection.getFilteredByGlob("src/writing/*.md").sort((a, b) => {
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk"
  };
};
