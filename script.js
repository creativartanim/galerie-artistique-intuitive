
const artworks = [
  {
    name: "Paysage de mon cœur – Paysage intérieur",
    technique: "acrylique",
    year: "2025",
    format: "178x70 cm",
    price: "Sur demande",
    description: "Un paysage abstrait vibrant, entre vagues intérieures et souffle naturel. Le papillon au centre incarne la délicatesse du mouvement émotionnel.",
    image: "images/paysage-de-mon-coeur.jpeg"
  },
  {
    name: "Offrande divine",
    technique: "mixte",
    year: "2014",
    format: "70x50 cm",
    price: "500€",
    description: "Une offrande vibratoire entre mains humaines et flux coloré. Les baies fondantes deviennent énergie, transformation, passage. Une œuvre symbolique, entre matière et mystère.",
    image: "images/offrande-divine.jpeg"
  }
];

const gallery = document.getElementById("gallery");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupPrice = document.getElementById("popupPrice");

function displayGallery(filtered = artworks) {
  gallery.innerHTML = "";
  filtered.forEach((art) => {
    const div = document.createElement("div");
    div.className = "artwork";
    div.innerHTML = `
      <img src="${art.image}" alt="${art.name}" style="width:100%; border-radius:8px;" />
      <h3>${art.name}</h3>
      <p>${art.technique} – ${art.year}</p>
      <p>${art.format}</p>
      <p>${art.price}</p>
    `;
    div.onclick = () => {
      popupTitle.textContent = art.name;
      popupDescription.textContent = art.description;
      popupPrice.textContent = `Prix : ${art.price}`;
      popup.classList.remove("hidden");
    };
    gallery.appendChild(div);
  });
}

document.querySelector(".close").onclick = () => popup.classList.add("hidden");

document.getElementById("techniqueFilter").onchange = filterGallery;
document.getElementById("yearFilter").onchange = filterGallery;

function filterGallery() {
  const tech = document.getElementById("techniqueFilter").value;
  const year = document.getElementById("yearFilter").value;
  const filtered = artworks.filter((art) => {
    return (!tech || art.technique === tech) && (!year || art.year === year);
  });
  displayGallery(filtered);
}

displayGallery();
