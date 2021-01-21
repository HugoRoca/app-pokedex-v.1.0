((d) => {
  const $searchButton = d.getElementById("btnSearch");
  const $textSearch = d.getElementById("txtPokemonSearch");
  const $btnModelMoreInformation = d.getElementById("btnModelMoreInformation");
  
  $searchButton.addEventListener("click", (e) => {
    getDataSearch();
  });

  // $btnModelMoreInformation.addEventListener("click", (e) => {
  //   // const _this = $(e.target);
  //   // const item = _this.closest("[data-item=\"PokemonInformation\"]").eq(0);
  //   // const jsonPokemon = item.find('#jsonPokemon').val();

  //   // console.log(jsonPokemon);

  // })

  $textSearch.addEventListener("keyup", (e) => {
    if(e.keyCode == 13)
    {
        getDataSearch();
    }
  })
})(document);

function openLoad() {
  $("#loading").addClass("is-active");
}

function closeLoad() {
  $("#loading").removeClass("is-active");
}

function callModalPokemon(data) {
  console.log(data)
  $('#titlePokemon').html(data.name.english);
  SetHandlebars('#js-modelMoreInformation', data, '#modalPokemonData');
}

function getDataSearch() {
  textSearch = $('#txtPokemonSearch').val();
  pageNumber = 0
  
  const idHtml = '#listSection'
  $(idHtml).html('');
  
  _pokemonEvent.applyChanges(_pokemonEvent.eventName.onPokemonEvent);
}

function validateScroll() {
  if (load) return false;
  if (pageNumber > totalPage) return false;

  var documentHeight = $(document).height(),
    footerHeight = $(window).scrollTop() + $(window).height();

  footerHeight += $("footer").innerHeight() || 0;

  return footerHeight >= documentHeight;
}

function providerDataPokemon() {
  const url = 'http://localhost:2705/api/pokemon'
  let urlParamsText = ''

  if (textSearch !== '') {
    urlParamsText = `&text=${textSearch}`;
  }

  const urlData = url + `?page=${pageNumber}&limit=${pageLimit}${urlParamsText}`;

  var dfd = jQuery.Deferred();
  jQuery.ajax({
    type: "get",
    url: urlData,
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    async: true,
    success: function (data) {
      dfd.resolve(data);
    },
    error: function (data, error) {
      dfd.reject(data, error);
    },
  });
  return dfd.promise();
}

function printData(data) {
  const idHtml = '#listSection'
  const dataCard = SetHandlebars('#js-listSectionTemplate', data);
  $(idHtml).append(dataCard);
}

_pokemonEvent.subscribe(_pokemonEvent.eventName.onPokemonEvent, function () {
  openLoad();
  providerDataPokemon().done(function (data) {
    pageNumber = pageNumber + 1;
    printData(data);
    closeLoad();
  }).fail(function (error) {
    console.log(error)
    closeLoad();
  });
  closeLoad();
});
