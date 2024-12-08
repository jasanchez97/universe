function addEventListenerHideTitlePage() {
  const SCROLL_POSITION = window.scrollY;
  const HIDE_TITLE_PAGE = document.getElementById("hide-title-page");
  if (SCROLL_POSITION > 200) {
    HIDE_TITLE_PAGE.classList.toggle("hide-title-page");
  }
}