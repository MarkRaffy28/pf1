function formatDate(dateString) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Manila"
  }).format(date).replace(/\//g, "-").replace(",", "");
}

const UNIVERSE_ID = 7436755782; 

async function getGameStats() {
  try {
    const res = await fetch(`https://games.roproxy.com/v1/games?universeIds=${UNIVERSE_ID}`);
    const json = await res.json();
    const game = json.data[0];

    document.getElementById("stats-name").innerText = game.name; 
    document.getElementById("stats-active-players").innerText = game.playing.toLocaleString();
    document.getElementById("stats-favorited-count").innerText = game.favoritedCount.toLocaleString();
    document.getElementById("stats-total-visits").innerText = game.visits.toLocaleString();
    document.getElementById("stats-updated-at").innerText =  formatDate(game.updated)
    document.getElementById("description").innerText = game.description;
  } catch (err) {
    console.error(err);
  }
}

getGameStats();
setInterval(getGameStats, 2500);

/*  */
async function loadData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading JSON:", error);
 }
}



loadData().then(data => {
  const recipesCarousel = document.querySelector(".recipes-carousel .carousel-inner");
  const recipesGrid = document.querySelector(".recipes");

  let recipeCarouselHtml = "";
  let recipeCardHtml = "";
    
  data.recipes.forEach((recipe, index) => {
    recipeCarouselHtml += `
      <div class="carousel-item ${index == 0 ? 'active' : ''}">
        <img src="${recipe.img}" alt="${recipe.name}">
      </div>
    `;
    
    const modalId = "recipe-modal" + index;

    let typesHtml = recipe.types.map(types => {
      return `
        <img class="recipe-tier ${types.type.toLowerCase()}" alt=${types.type}>
        <ul>${types.items.map(item => `<li>${item}</li>`).join("")}</ul>
      `;
    }).join("");

    recipeCardHtml += `
      <div class="recipe card border border-dark" role="button" data-bs-toggle="modal" data-bs-target="#${modalId}">
        <img class="recipe-image" src="${recipe.img}" alt="${recipe.name}">
        <h6 class="recipe-title text-center bg-primary px-2 py-1 rounded">${recipe.name}</h6>
      </div>
      <div class="modal fade p-5" id="${modalId}" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              ${typesHtml}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button> 
            </div>
          </div>
        </div>
      </div>
    `;
  });
   
  recipesCarousel.innerHTML = recipeCarouselHtml;
  recipesGrid.innerHTML = recipeCardHtml;
})


loadData().then(data => {
  const cropsCarousel = document.querySelector(".crops-carousel .carousel-inner");
  const cropsGrid = document.querySelector(".crops");

  let cropCarouselHtml = "";
  let cropCardHtml = "";
    
  data.crops.forEach((crop, index) => {
    cropCarouselHtml += `
      <div class="carousel-item ${index == 0 ? 'active' : ''}">
        <img src="${crop.img}" alt="${crop.name}">
      </div>
    `;
    
    const modalId = "crop-modal" + index;

    cropCardHtml += `
      <div class="crop card border border-dark" role="button" data-bs-toggle="modal" data-bs-target="#${modalId}">
        <img class="tier ${crop.rarity.toLowerCase()}" alt="${crop.rarity}"> 
        <img class="crop-image" src="${crop.img}" alt="${crop.name}">
        <h6 class="crop-title text-center bg-primary px-2 py-1 rounded">${crop.name}</h6>
      </div>
      <div class="modal fade p-5" id="${modalId}" tabindex="-1">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <table class="crop-table d-flex justify-content-center">
                <tr>
                  <th>Name:</th>
                  <td>${crop.name}</td>
                </tr>
                <tr>
                  <th>Rarity:</th>
                  <td>
                    <img class="tier ${crop.rarity.toLowerCase()}" alt="${crop.rarity}">
                  </td>
                </tr>
                <tr>
                  <th>Source:</th>
                  <td>${crop.source == 1 ? 'Seed Shop' : 'Event Exclusive'}</td>
                </tr>
                <tr>
                  <th>Average Growth Time:</th>
                  <td>${crop.averageGrowthTime}</td>
                </tr>
                <tr>
                  <th>Harvest Type:</th>
                  <td>${crop.harvestType == 1 ? 'Single' : 'Multiple'}</td>
                </tr>               
              </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button> 
            </div>
          </div>
        </div>
      </div>
    `;
  });
   
  cropsCarousel.innerHTML = cropCarouselHtml;
  cropsGrid.innerHTML = cropCardHtml;
})


loadData().then(data => {
  data.tiers.forEach(tier => {
    const tiersElements = document.querySelectorAll(`.${tier.name.toLowerCase()}`);
    tiersElements.forEach(el => {
      el.src = `${tier.img}`;
     });
  });
});
