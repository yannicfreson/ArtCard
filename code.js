let database = firebase.database();

//console.log snapshot of the database
database.ref().on("value", function (snapshot) {
  console.log(snapshot.val());
});

//set new card in db
/* const id = crypto.randomUUID();
database.ref(`cards/${id}`).push({
  id: id,
  name: "test",
  description: "test",
  image: "test",
}); */
