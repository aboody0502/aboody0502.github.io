$(document).ready(function () {
  // Native buttons provide Enter/Space activation. Hidden panels also hide any
  // focusable descendants, including copy controls added after initialization.
  document.addEventListener("click", function (event) {
    const button = event.target.closest("button[data-publication-disclosure]");
    if (!button) return;

    const panel = document.getElementById(button.getAttribute("aria-controls"));
    if (!panel) return;
    const expanded = button.getAttribute("aria-expanded") !== "true";

    // Keep the author list independent while showing one details panel at a time.
    const links = button.closest(".links");
    if (links && expanded) {
      links.querySelectorAll("button[data-publication-disclosure]").forEach(function (other) {
        const otherPanel = document.getElementById(other.getAttribute("aria-controls"));
        if (other !== button && otherPanel) {
          other.setAttribute("aria-expanded", "false");
          otherPanel.hidden = true;
          otherPanel.classList.remove("open");
        }
      });
    }

    button.setAttribute("aria-expanded", String(expanded));
    panel.hidden = !expanded;
    panel.classList.toggle("open", expanded);
    if (button.dataset.expandedLabel) {
      button.textContent = expanded ? button.dataset.expandedLabel : button.dataset.collapsedLabel;
    }
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
