const renderFeeds = ({
  feeds,
  posts,
  // status,
  // errors,
}, element) => {
  if (feeds.length > 0) {
    // console.log('def render rss');
    const lastIndex = feeds.length - 1;
    const feed = feeds[lastIndex];

    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    [h2.textContent, p.textContent] = feed;

    const ul = document.createElement('ul');

    const currentPosts = posts.filter((post) => post[2] === feed[2]);

    currentPosts.forEach((post) => {
      const a = document.createElement('a');
      const li = document.createElement('li');

      [li.textContent, a.href] = post;

      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
      // todo: + description, pubDate

      a.append(li);
      ul.append(a);
    });

    element.append(h2, p, ul);
  }
};

export default renderFeeds;
