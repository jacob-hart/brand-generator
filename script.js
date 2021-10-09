function onClick(e) {
  e.preventDefault();

  let firstSelector = document.getElementById("firstSelector");
  let firstSelectorText = firstSelector.options[firstSelector.selectedIndex].text;
  let secondSelector = document.getElementById("secondSelector");
  let secondSelectorText = secondSelector.options[secondSelector.selectedIndex].text;

  let firstUrl = "https://random-word-form.herokuapp.com/random/" + textToQuery(firstSelectorText)
  fetch(firstUrl)
    .then(function(response) {
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      document.getElementById("first").textContent = json[0];
    });

  let secondUrl = "https://random-word-form.herokuapp.com/random/" + textToQuery(secondSelectorText)
  fetch(secondUrl)
    .then(function(response) {
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      document.getElementById("second").textContent = json[0];
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



document.getElementById("submit").addEventListener("click", onClick);
