function switchTheme(){const currentIsDark=document.documentElement.classList.contains("dark");localStorage.setItem("theme",currentIsDark?"light":"dark");document.documentElement.classList.toggle("dark");}
if(localStorage.getItem("theme")==="dark")
document.documentElement.classList.add("dark");