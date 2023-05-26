fetch(
  `https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`
).then(function(response) {
  return response.json();
}).then(function (json) {
  console.log(JSON.stringify(json));
  showHeroes(json);

}).catch(function(error) {
  console.log(error);
});