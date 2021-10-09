function onClick(e) {
  e.preventDefault();

  let value = document.getElementById("weatherInput").value;
  if (value === "")
    return;

  let url = "https://random-word-form.herokuapp.com/random/" + value
  fetch(url)
    .then(function(response) {
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      console.log(json)
    });
}

document.getElementById("weatherSubmit").addEventListener("click", onClick);
