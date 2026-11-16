
// FocusLab 共用 JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // 自動更新頁尾年份
  const footer = document.querySelector(".site-footer");

  if (footer) {
    const yearText = footer.querySelector("p");

    if (yearText) {
      yearText.textContent =
        `© ${new Date().getFullYear()} FocusLab｜專注力學習實驗室`;
    }
  }

  // 標示目前所在的導覽頁面
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".site-header nav a");

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentPath) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
});
