const marked = require("marked");

const sanitizeHtmlLibrary = require("sanitize-html");

const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();

  //1. Convert markdown to html
  const convertedHtml = marked.parse(markdownContent);
  console.log("converted Html ", convertedHtml);

  //2.Sanitize html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });

  console.log("sanitized  Html ", sanitizedHtml);

  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  console.log("sanitized Markdown", sanitizedMarkdown);
  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;

// const input = `

//   # heading

//   ### this is a markdown

//   - something

//   <script>alert("wohoo")</script>

//   [Link](www.google.com)

// `;

// sanitizeMarkdownContent(input);
