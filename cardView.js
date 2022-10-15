const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

console.log(urlParams.get("id"));

database.ref(`cards/${urlParams.get("id")}`).once("value", (snapshot) => {
  let cardProps = Object.values(snapshot.val())[0];
  document.getElementById("userName").innerHTML = cardProps.userName;
});
