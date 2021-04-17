function openPage(pageName, elmnt) {
  var tabcontent = document.getElementsByClassName("tabs__block");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();