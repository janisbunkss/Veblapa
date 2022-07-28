const poga = document.getElementById("poga");
const pasts = document.getElementById("pasts");

poga.onclick = function() {
  if ( pasts.style.display === "none") {
  document.getElementById("pasts").style.display = "block";
  } else { document.getElementById("pasts").style.display = "none";
  }
}