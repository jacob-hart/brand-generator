function onClick(e) {
  e.preventDefault();

  let firstSelector = document.getElementById("firstSelector");
  let firstSelectorText = firstSelector.options[firstSelector.selectedIndex].text;
  let secondSelector = document.getElementById("secondSelector");
  let secondSelectorText = secondSelector.options[secondSelector.selectedIndex].text;

  let firstUrl = "https://random-word-form.herokuapp.com/random/" + textToQuery(firstSelectorText)
  let secondUrl = "https://random-word-form.herokuapp.com/random/" + textToQuery(secondSelectorText)

  Promise.all([
    fetch(firstUrl),
    fetch(secondUrl)
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function(data) {
      document.getElementById("first").textContent = capitalize(data[0][0]);
      document.getElementById("second").textContent = capitalize(data[1][0]);
    });
}

function textToQuery(text) {
  switch (text)
  {
    case "Noun":
      return "noun";
    case "Adjective":
      return "adjective";
    case "Animal":
      return "animal";
    default:
      throw text + " cannot be converted into a query!"
  }
}

function capitalize(text) {
  return text[0].toUpperCase() + text.substring(1)
}



document.getElementById("submit").addEventListener("click", onClick);
