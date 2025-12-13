document.querySelectorAll(".flip-card").forEach(card => {
  
  card.querySelector(".flip-btn-front").addEventListener("click", () => {
    card.classList.add("flipped");
  });

  card.querySelector(".flip-btn-back").addEventListener("click", () => {
    card.classList.remove("flipped");
  });

});