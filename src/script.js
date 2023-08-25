function generateContainerCards(count) {
  let containerCard = document.querySelector(".container-card");
  let cardHtml = `
    <div class="card">
      <div class="container-card-photo">
        <img src="image/photo.png" alt="card-photo" />
      </div>
      <h2>Ідеальний зволожувальний догляд за шкірою</h2>

      <ul class="icon-card-list">
        <li>
          <span class="material-symbols-rounded icon icon-fill second-icon">
            visibility
          </span>
          600
        </li>
        <li>
          <span class="material-symbols-rounded icon icon-fill second-icon">
            favorite
          </span>
          139
        </li>
        <li>
          <span class="material-symbols-rounded icon icon-fill second-icon">
            bookmark
          </span>
          250
        </li>
      </ul>
    </div>
  `;

  for (let i = 0; i < count; i++) {
    containerCard.innerHTML += cardHtml;
  }
}

generateContainerCards(3);
