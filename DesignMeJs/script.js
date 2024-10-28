const menuButton = document.getElementById("menuButton");
      const navMenu = document.getElementById("navMenu");
      const closeButton = document.getElementById("closeButton");

      menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("visible");
        menuButton.classList.toggle("hidden");
        closeButton.classList.toggle("hidden");
      });

      closeButton.addEventListener("click", () => {
        navMenu.classList.toggle("visible");
        menuButton.classList.toggle("hidden");
        closeButton.classList.toggle("hidden");
      });
      
      
      
      function sendNotificationToServer(product) {
    fetch('send_mail.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            product: product
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Notification sent:', data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
