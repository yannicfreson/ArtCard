let database = firebase.database();

//set new card in db
function addCardToDB(props) {
  const id = crypto.randomUUID();
  console.log(props);
  database.ref(`cards/${id}`).push({
    id: id,
    date: new Date().toISOString(),
    userName: props.userName,
    userAddress: props.userAddress,
    museumName: props.museumName,
    userMessage: props.userMessage,
    imageUrls: [],
  });

  document.getElementById(
    "shareUrl"
  ).innerText = `Share the link to your ArtCard!\n10.254.3.83:5500/card.html?id=${id}`;
}

function parseForm() {
  let props = {
    userName: document.getElementById("userName").value,
    userAddress: document.getElementById("userAddress").value,
    museumName: document.getElementById("museumName").value,
    userMessage: document.getElementById("userMessage").value,
  };
  addCardToDB(props);
}
