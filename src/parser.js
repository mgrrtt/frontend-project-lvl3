export default (xmlString) => {
  const parser = new DOMParser();

  const document = parser.parseFromString(xmlString, 'application/xml');

  const errorNode = document.querySelector('parsererror');

  if (errorNode) {
    return errorNode; // if parsing failed
  }

  const content = {};

  content.id = Date.now();

  content.title = document.querySelector('title').textContent;
  content.description = document.querySelector('description').textContent;
  content.items = [];

  const items = document.querySelectorAll('item');

  items.forEach((item) => {
    const title = item.querySelector('title').textContent;
    const link = item.querySelector('link').textContent;

    // todo: + description, pubDate

    content.items.push([title, link, content.id]);
  });

  return content;
};
