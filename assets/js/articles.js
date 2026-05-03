/* Article catalog — single source of truth for the homepage rotation
   and category pages. Update here when adding new articles. */
window.ARTICLES = [
  {
    "slug": "ten-cases",
    "title": "Ten Canadian Legal Cases Every New Manager Needs to Know",
    "deck": "There's a good chance the HR policy you're expected to enforce traces back to one of these decisions. You don't need to memorize the case names. Understanding the pattern they create changes how you manage.",
    "blurb": "A tour of the decisions that quietly shape your handbook, from constructive dismissal to the duty to accommodate.",
    "category": "Compliance & Human Rights",
    "categorySlug": "employment-law",
    "image": "assets/images/article-ten-cases.jpg",
    "readTime": 12,
    "url": "articles/ten-cases.html"
  },
  {
    "slug": "pip-problem",
    "title": "The PIP Problem: Are We Actually Trying to Help?",
    "deck": "Performance improvement plans have a near-zero success rate at many organizations. Before asking whether the paperwork is clean, it is worth asking whether anyone actually meant for them to work.",
    "blurb": "Why most performance improvement plans fail before the first check-in, and what an honest one looks like.",
    "category": "Performance & Development",
    "categorySlug": "performance",
    "image": "assets/images/article-pip-problem.jpg",
    "readTime": 8,
    "url": "articles/pip-problem.html"
  },
  {
    "slug": "good-intentions",
    "title": "Good Intentions Don't Erase Discrimination",
    "deck": "A BC Human Rights Tribunal decision involving a young worker with disabilities and a family-run convenience store, and what it means when \"we were just trying to help\" is not a defence.",
    "blurb": "A small-business human rights case and the limits of the \"we were trying to help\" defence.",
    "category": "Compliance & Human Rights",
    "categorySlug": "employment-law",
    "image": "assets/images/article-good-intentions.jpg",
    "readTime": 5,
    "url": "articles/good-intentions.html"
  },
  {
    "slug": "unpaid-tryout",
    "title": "The Myth of the Unpaid Tryout",
    "deck": "Unpaid trial shifts still show up across Canadian small businesses. A 2025 Employment Standards appeal makes the rule plain: real work under your direction is paid work.",
    "blurb": "A 2025 Employment Standards appeal on trial shifts and what counts as paid work.",
    "category": "Compliance & Human Rights",
    "categorySlug": "employment-law",
    "image": "assets/images/article-unpaid-tryout.jpg",
    "readTime": 5,
    "url": "articles/unpaid-tryout.html"
  },
  {
    "slug": "unlocking-high-performance",
    "title": "Unlocking High Performance — Jason Lauritsen",
    "deck": "A frontline-HR read of Lauritsen's argument that performance is a relationship, not a form. What works, what's missing, and where the book lands for managers and HR practitioners.",
    "blurb": "A frontline-HR read of Lauritsen's argument that performance is a relationship, not a form.",
    "category": "Book Reviews",
    "categorySlug": "book-reviews",
    "image": "assets/images/article-unlocking.jpg",
    "readTime": 7,
    "url": "articles/unlocking-high-performance.html"
  },
  {
    "slug": "what-trust-is-made-of",
    "title": "What Trust Is Made Of",
    "deck": "The research calls it belonging. The plain word for what employees feel when they have it is trust. Three things have to be working at once for any workplace to produce either — and the instinct to fix the wrong one is what costs companies the most.",
    "blurb": "Three things have to be working at once for a workplace to produce trust, and the instinct to fix the wrong one is what costs companies the most.",
    "category": "Leading Teams",
    "categorySlug": "leading-teams",
    "image": "assets/images/article-trust.jpg",
    "readTime": 11,
    "url": "articles/what-trust-is-made-of.html"
  }
];

/* ============================================
   Homepage rotation — reshuffle all four lead
   positions on each visit.
   ============================================ */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderLead() {
  const container = document.getElementById('lead-grid');
  if (!container) return;
  const shuffled = shuffle(window.ARTICLES);
  const lead = shuffled[0];
  const sides = shuffled.slice(1, 4);

  const leadHTML = `
    <article class="lead-main">
      <a href="${lead.url}">
        <div class="lead-image" style="background-image:url('assets/images/hero-signing.jpg');"></div>
      </a>
      <div class="kicker">${lead.category}</div>
      <h1><a href="${lead.url}">${lead.title}</a></h1>
      <p class="deck">${lead.deck}</p>
      <div class="meta">${lead.readTime} min read</div>
    </article>
    <aside class="lead-side">
      ${sides.map(s => `
        <article class="side-story">
          <div class="kicker">${s.category}</div>
          <h2><a href="${s.url}">${s.title}</a></h2>
          <p>${s.blurb}</p>
          <div class="meta">${s.readTime} min read</div>
        </article>
      `).join('')}
    </aside>
  `;
  container.innerHTML = leadHTML;
}

document.addEventListener('DOMContentLoaded', renderLead);
