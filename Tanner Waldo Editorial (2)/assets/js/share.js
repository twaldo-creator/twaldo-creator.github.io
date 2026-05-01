/* Wire up share buttons on article pages */
document.addEventListener('DOMContentLoaded', () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(document.title);

  document.querySelectorAll('.share-btn').forEach(btn => {
    const network = btn.dataset.network;
    let href = '#';
    if (network === 'linkedin') {
      href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (network === 'x') {
      href = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    } else if (network === 'facebook') {
      href = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (network === 'email') {
      href = `mailto:?subject=${title}&body=${url}`;
    } else if (network === 'copy') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(window.location.href).then(() => {
          const original = btn.getAttribute('aria-label');
          btn.setAttribute('aria-label', 'Link copied');
          btn.classList.add('copied');
          setTimeout(() => {
            btn.setAttribute('aria-label', original);
            btn.classList.remove('copied');
          }, 1800);
        });
      });
      return;
    }
    btn.href = href;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
  });
});
