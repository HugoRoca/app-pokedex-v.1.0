((d) => {
  const $searchButton = d.getElementById("btnSearch");

  $searchButton.addEventListener("click", (e) => {
    alert("click");
  });
})(document);

function openLoad() {
  $("#loading").addClass("is-active");
}

function closeLoad() {
  $("#loading").removeClass("is-active");
}