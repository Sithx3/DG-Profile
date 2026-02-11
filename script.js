function setThemeIcon(){
  const icon = document.getElementById("themeIcon");
  if(!icon) return;
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

function toggleDark(){
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
  setThemeIcon();
}

if(localStorage.theme === "dark"){
  document.body.classList.add("dark");
}
setThemeIcon();

function sharePage(){
  const url = window.location.href;

  if(navigator.share){
    navigator.share({ title: document.title, url });
  } else {
    navigator.clipboard.writeText(url);
    alert("Link copied!");
  }
}
