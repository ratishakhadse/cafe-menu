document.addEventListener("DOMContentLoaded", () => {

  // Select all menu items
  const menuItems = document.querySelectorAll(".section ul li");

  // Add click effect
  menuItems.forEach(item => {
    item.addEventListener("click", () => {

      // Remove active class from all items
      menuItems.forEach(i => i.classList.remove("active"));

      // Add active class to clicked item
      item.classList.add("active");

      // Get item name and price
      const itemName = item.children[0].innerText;
      const itemPrice = item.children[1].innerText;

      alert(`You selected: ${itemName} (${itemPrice})`);
    });
  });

});
