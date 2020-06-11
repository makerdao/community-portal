export const TitleConverter = ({
  frontmatter,
  title,
  headings,
  fileAbsolutePath,
}) => {
  const splitPath = fileAbsolutePath.split("/");
  let fileName = splitPath.pop().replace(/(.mdx|.md)$/gm, "");

  //If the filename is index.mdx, use the name of it's directory instead.
  if (fileName === "index") {
    fileName = splitPath[splitPath.length - 1];
  }

  const frontMatterTitle =
    frontmatter && frontmatter.title ? frontmatter.title : null;
  const headingsTitle =
    headings && headings.length > 0 ? headings[0].value : null;

  //Classic title rule.
  return frontMatterTitle || headingsTitle || fileName;
};
