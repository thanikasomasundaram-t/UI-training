// GET CLASS LIST FROM DOM
const list = document.querySelector('.list');
const fragment = new DocumentFragment();

for(userDetail of data) {

    // CREATE CARD ELEMENT
    const card = document.createElement('div');
    card.className = 'card';

    // CREATE PROFILE ELEMENT
    const profile = document.createElement('div');
    profile.className = 'profile';
    
    // CREATE IMG ELEMENT
    const img = document.createElement('img');
    const imgLink = userDetail.img;
    img.setAttribute('src', imgLink);

    // APPEND IMG TO PROFILE
    profile.appendChild(img);

    // CREATE DETAILS ELEMENT
    const details = document.createElement('div');
    details.className = 'details';
    
    // CREATE NAME ELEMENT 
    const userName = document.createElement('div');
    userName.className = 'name';
    const userFullName = userDetail.first_name + ' ' + userDetail.last_name;
    userName.innerHTML = userFullName;

    // CREATE EMAIL ELEMENT
    const email = document.createElement('div');
    email.className = 'email';
    email.innerHTML = userDetail.email;

    // APPEND NAME AND EMAIL TO DETAILS
    details.appendChild(userName);
    details.appendChild(email);

    // APPEND PROFILE AND DETAILS TO CARD
    card.appendChild(profile);
    card.appendChild(details);

    // APPPEND CARD TO FRAGMENT
    fragment.appendChild(card);
}

list.appendChild(fragment);






