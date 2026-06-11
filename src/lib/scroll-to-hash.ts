export function scrollToHash(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function parseHashHref(href: string) {
  const hashIndex = href.indexOf("#");

  if (hashIndex === -1) {
    return { path: href, hash: null };
  }

  return {
    path: href.slice(0, hashIndex) || "/",
    hash: href.slice(hashIndex + 1),
  };
}
