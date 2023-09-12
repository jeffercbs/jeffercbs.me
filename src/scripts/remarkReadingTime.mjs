import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

// eslint-disable-next-line space-before-function-paren
export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.readingTime = readingTime.text;
  };
}
