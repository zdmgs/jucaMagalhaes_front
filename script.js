// v0.1
const links = {
  instagram: 'https://www.instagram.com/jotade_juca/',
  linkedin: 'https://www.linkedin.com/in/jucamagalhaes/',
  email: 'contato@jucamagalhaes.com'
};

document.querySelectorAll('[data-link]').forEach((element) => {
  const value = links[element.dataset.link];

  if (value) {
    element.href = element.dataset.link === 'email' ? `mailto:${value}` : value;
    if (element.dataset.link !== 'email') {
      element.target = '_blank';
      element.rel = 'noopener noreferrer';
    }
  } else {
    element.hidden = true;
  }
});
