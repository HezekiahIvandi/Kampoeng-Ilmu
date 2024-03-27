document.addEventListener("DOMContentLoaded", function () {
  const tabList = document.getElementById("tablist");
  const tabButtons = tabList.querySelectorAll('[role="tab"]');

  tabButtons.forEach((tabButton) => {
    tabButton.addEventListener("click", () => {
      const targetTab = tabButton.dataset.tab;
      console.log("Clicked Tab : ", targetTab);

      // Remove tab-active class from all tabs
      tabButtons.forEach((btn) => {
        btn.classList.remove("tab-active");
      });

      // Add tab-active class to the clicked tab
      tabButton.classList.add("tab-active");

      // You can continue with your logic to show/hide tab panels here
    });
  });
  // Set default active tab (Android)
  const defaultTab = document.querySelector('[data-tab="android"]');
  defaultTab.classList.add("tab-active");
});
