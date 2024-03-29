// carousel view
document.addEventListener("DOMContentLoaded", function () {
  let items = document.querySelectorAll(".carousel .carousel-item");
  const minPerSlide = 5;

  items.forEach((el) => {
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
});

// Modal
document.addEventListener("DOMContentLoaded", function () {
  var openModalBtn = document.getElementById("openModalBtn");
  var closeModalBtn = document.getElementById("closeModalBtn");

  openModalBtn.addEventListener("click", function () {
    var loadingSpinner = new bootstrap.Modal(
      document.getElementById("loadingSpinner"),
      {
        backdrop: "static",
        keyboard: false,
      }
    );

    loadingSpinner.show();

    setTimeout(function () {
      loadingSpinner.hide();
    }, 1000);
  });

  closeModalBtn.addEventListener("click", function () {
    var loadingSpinner = new bootstrap.Modal(
      document.getElementById("loadingSpinner"),
      {
        backdrop: "static",
        keyboard: false,
      }
    );

    loadingSpinner.show();

    setTimeout(function () {
      closeModal();
      loadingSpinner.hide();
    }, 1000);
  });

  function closeModal() {
    var modal = document.getElementById("gameViewModal");
    var modalInstance = bootstrap.Modal.getInstance(modal);
    modalInstance.hide();
  }
});

// clock

function updateClock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, "0");
  var minutes = now.getMinutes().toString().padStart(2, "0");
  var seconds = now.getSeconds().toString().padStart(2, "0");
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();
