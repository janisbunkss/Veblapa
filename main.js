let images = [];  // Glabās attēlu ceļus
let currentIndex = 0;

// Ielādē JSON failu
fetch('images.json')
.then(response => response.json())  // Pārvērš JSON datus par JavaScript masīvu
.then(data => {
    images = data.map(file => 'images/' + file); // Izveido pilnus attēlu ceļus
    if (images.length > 0) {
        document.getElementById('galleryImage').src = images[0]; // Parāda pirmo attēlu
    }
});

// Funkcija, kas pārslēdz uz nākamo attēlu
function nextImage() {
  if (images.length === 0) return;  // Ja saraksts tukšs, neko nedara
  currentIndex = (currentIndex + 1) % images.length;  // Rotācija
  document.getElementById('galleryImage').src = images[currentIndex];  // Iestata jauno attēlu
}











const poga = document.getElementById("poga");
const pasts = document.getElementById("pasts");

poga.onclick = function() {
  if ( pasts.style.display === "none") {
  document.getElementById("pasts").style.display = "block";
  } else { document.getElementById("pasts").style.display = "none";
  }
}