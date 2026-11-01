---
permalink: /assets/js/search-data.js
---
// Curate public portfolio content; retain demo source files outside the index.
const ninja = document.querySelector('ninja-keys');
const searchCatalog = {
{% for locale in site.data.ui %}
{% assign lang = locale[0] %}
{% assign text = locale[1] %}
{{ lang | jsonify }}: [
  { id: 'nav-{{ lang }}-home', title: {{ text.about | jsonify }}, section: {{ text.search_navigation | jsonify }}, url: {{ text.home | relative_url | jsonify }} },
  {% assign nav_pages = site.pages | sort: 'nav_order' %}
  {% for p in nav_pages %}
    {% assign p_lang = p.lang | default: site.lang %}
    {% if p.nav and p.autogen == null and p_lang == lang %}
      { id: 'nav-{{ lang }}-{{ p.url | slugify }}', title: {{ p.title | jsonify }}, description: {{ p.description | default: '' | strip_html | jsonify }}, section: {{ text.search_navigation | jsonify }}, url: {{ p.url | relative_url | jsonify }} },
    {% endif %}
  {% endfor %}
  {% if lang == 'en' %}
    {% for project in site.projects %}
      {% if project.category == 'research' and project.published != false %}
        { id: 'project-en-{{ project.slug }}', title: {{ project.title | jsonify }}, description: {{ project.description | jsonify }}, section: {{ text.search_research | jsonify }}, url: {{ project.url | relative_url | jsonify }} },
      {% endif %}
    {% endfor %}
    {% for book in site.books %}
      {% if book.published != false and book.released %}
        { id: 'book-en-{{ book.slug }}', title: {{ book.title | jsonify }}, section: {{ text.search_books | jsonify }}, url: {{ book.url | relative_url | jsonify }} },
      {% endif %}
    {% endfor %}
  {% else %}
    {% for p in site.pages %}
      {% if p.lang == lang %}
        {% if p.url contains '/fr/projects/' and p.url != '/fr/projects/' %}
          { id: 'project-fr-{{ p.url | slugify }}', title: {{ p.title | jsonify }}, description: {{ p.description | jsonify }}, section: {{ text.search_research | jsonify }}, url: {{ p.url | relative_url | jsonify }} },
        {% elsif p.url contains '/fr/books/' and p.url != '/fr/books/' %}
          { id: 'book-fr-{{ p.url | slugify }}', title: {{ p.title | jsonify }}, section: {{ text.search_books | jsonify }}, url: {{ p.url | relative_url | jsonify }} },
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endif %}
  { id: 'tutoring-{{ lang }}', title: {{ text.search_tutoring | jsonify }}, section: {{ text.search_services | jsonify }}, url: {{ text.home | append: '#tutoring' | relative_url | jsonify }} },
  {% for item in site.news %}
    {% if lang == 'en' or item.content_fr %}
      {% if lang == 'fr' %}{% assign news_text = item.content_fr | markdownify | strip_html | strip_newlines %}{% else %}{% assign news_text = item.content | markdownify | strip_html | strip_newlines %}{% endif %}
      { id: 'news-{{ lang }}-{{ forloop.index }}', title: {{ news_text | truncatewords: 16 | jsonify }}, description: {{ news_text | jsonify }}, section: {{ text.news | jsonify }}, url: {{ text.news_url | relative_url | jsonify }} },
    {% endif %}
  {% endfor %}
  { id: 'download-cv-{{ lang }}', title: {{ text.search_cv | jsonify }}, section: {{ text.search_contact | jsonify }}, url: {{ text.cv_url | relative_url | jsonify }} },
  {% if site.data.socials.email %}
    { id: 'contact-email-{{ lang }}', title: {{ text.search_email | jsonify }}, section: {{ text.search_contact | jsonify }}, url: {{ site.data.socials.email | prepend: 'mailto:' | jsonify }} },
  {% endif %}
  {% if site.data.socials.linkedin_username %}
    { id: 'contact-linkedin-{{ lang }}', title: 'LinkedIn', section: {{ text.search_contact | jsonify }}, url: {{ site.data.socials.linkedin_username | prepend: 'https://www.linkedin.com/in/' | jsonify }}, external: true },
  {% endif %}
  {% if site.data.socials.github_username %}
    { id: 'contact-github-{{ lang }}', title: 'GitHub', section: {{ text.search_contact | jsonify }}, url: {{ site.data.socials.github_username | prepend: 'https://github.com/' | jsonify }}, external: true },
  {% endif %}
  {% if site.enable_darkmode %}
    { id: 'theme-light-{{ lang }}', title: {{ text.search_theme_light | jsonify }}, section: {{ text.theme | jsonify }}, theme: 'light' },
    { id: 'theme-dark-{{ lang }}', title: {{ text.search_theme_dark | jsonify }}, section: {{ text.theme | jsonify }}, theme: 'dark' },
    { id: 'theme-system-{{ lang }}', title: {{ text.search_theme_system | jsonify }}, section: {{ text.theme | jsonify }}, theme: 'system' },
  {% endif %}
],
{% endfor %}
};
const searchLanguage = document.documentElement.lang === 'fr' ? 'fr' : 'en';
ninja.data = searchCatalog[searchLanguage].map(({ url, theme, external, ...item }) => ({
  ...item,
  handler: () => {
    if (theme) setThemeSetting(theme);
    else if (external) window.open(url, '_blank', 'noopener');
    else window.location.href = url;
  },
}));
