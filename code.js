let database = firebase.database();

//console.log snapshot of the database
database.ref().on("value", function (snapshot) {
  console.log(snapshot.val());
});

//set new card in db
function addCardToDB(props) {
  const id = crypto.randomUUID();
  database.ref(`cards/${id}`).push({
    id: id,
    date: new Date().toISOString(),
    userName: props.userName,
    userAddress: props.userAddress,
    museumAddress: props.museumAddress,
    museumName: props.museumName,
    imageUrls: props.imageUrls,
  });
}
