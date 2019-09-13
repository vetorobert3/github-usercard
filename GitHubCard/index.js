/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/vetorobert3')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createCard(data) {

  //creating elements
  const newImg = document.createElement('img');
  const newCard = document.createElement('div');
  const newName = document.createElement('h3');
  const newUserName = document.createElement('p');
  const newLocation = document.createElement('p');
  const newProfile = document.createElement('p');
  const newFollowers = document.createElements('p');
  const newFollowing = document.createElement('p');
  const newBio = document.createElement('p');

  //adding classes
  newCard.classList.add('card-info');
  newName.classList.add('name');
  newUserName.classList.add('username');

  //adding content
  newImg.src = data.avatar_url;
  newName.textContent = data.name;
  newUserName.textContent = data.login;
  newLocation.textcontent = data.location;
  newProfile.a = data.url;
  newFollowers.textContent = data.followers;
  newFollowing.textContent = data.following;
  newBio.textContent = data.bio;

  

}

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
