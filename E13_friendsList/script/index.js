
for(userDetail of data) {
    // GET CLASS LIST FROM DOM
    let list = document.querySelector('.list');

    // CREATE CARD ELEMENT
    let card = document.createElement('div');
    card.className = 'card';

    // CREATE PROFILE ELEMENT
    let profile = document.createElement('div');
    profile.className = 'profile';
    
    // CREATE IMG ELEMENT
    let img = document.createElement('img');
    let imgLink = userDetail.img;
    img.setAttribute('src', imgLink);

    // APPEND IMG TO PROFILE
    profile.appendChild(img);

    // CREATE DETAILS ELEMENT
    let details = document.createElement('div');
    details.className = 'details';
    
    // CREATE NAME ELEMENT 
    let userName = document.createElement('div');
    userName.className = 'name';
    let userFullName = userDetail.first_name + ' ' + userDetail.last_name;
    userName.innerHTML = userFullName;

    // CREATE EMAIL ELEMENT
    let email = document.createElement('div');
    email.className = 'email';
    email.innerHTML = userDetail.email;

    // APPEND NAME AND EMAIL TO DETAILS
    details.appendChild(userName);
    details.appendChild(email);

    // APPEND PROFILE AND DETAILS TO CARD
    card.appendChild(profile);
    card.appendChild(details);

    // APPPEND CARD TO LIST
    list.appendChild(card);

}





