const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

database.ref(`cards/${urlParams.get("id")}`).once("value", (snapshot) => {
  let cardProps = Object.values(snapshot.val())[0];

  document.getElementById("userNameCard").innerText = cardProps.userName;
  document.getElementById("userAddressCard").innerText = cardProps.userAddress
    .split(",")
    .join("\n");
  document.getElementById(
    "museumNameCard"
  ).innerText = `Bezoek aan ${cardProps.museumName}`;
  document.getElementById(
    "userMessageCard"
  ).innerText = `${cardProps.userMessage}`;

  //add an image html element to the page for each image in the card
  for (let i = 0; i < cardProps.imageUrls.length; i++) {
    //let image = document.getElementById(`image${i}`);
    //use placeholder url of 150x150
    //image.src = "https://via.placeholder.com/150";
  }
});
