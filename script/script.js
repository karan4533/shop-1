document.getElementById("menuButton").addEventListener("click", function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("menuButton").addEventListener("click", function() {
      document.getElementById("menuContainer").style.display = "block";
    });
  } else {
    window.location.href = "index.html";
  }
});


document.getElementById("closeMenu").addEventListener("click", function() {
  document.getElementById("menuContainer").style.display = "none";
});

var menuItems = document.querySelectorAll(".menu li");
menuItems.forEach(function(item) {
  item.addEventListener("click", function() {
      document.getElementById("menuContainer").style.display = "none";
      alert('soon updated');
  });
});
