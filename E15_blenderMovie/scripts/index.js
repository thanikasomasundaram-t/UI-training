// ADD VIDEO URL
document.querySelector('video').setAttribute('src', leftContainerData.videoUrl);

//ADD TITLE
document.querySelector('.synopsis > h2').innerText = leftContainerData.title;

// ADD DESCRIPTION
document.querySelector('.description').innerText = leftContainerData.description;

// FETCH REVIEWERS CONTAINER
let reviewers = document.querySelector('.reviewers');

// CREATE DOCUMENT FRAGMENT
const fragment = document.createDocumentFragment();

// GET COMMENT DATA
const comments = leftContainerData.comments;

comments.forEach((commentDetails) => {
	// CARD
	const card = document.createElement('div');
	card.className = 'card';

	// REVIEWER PROFILE
	const reviewerProfile = document.createElement('div');
	reviewerProfile.className = 'reviewer-profile';

	// IMAGE
	const img = document.createElement('img');
	img.setAttribute('src', commentDetails.image);
	img.setAttribute('alt', commentDetails.name);

	reviewerProfile.appendChild(img);

	// REVIEWER DETAILS
	const reviwerDetails = document.createElement('div');
	reviwerDetails.className = 'reviewer-details';

	// NAME
	const reviewerName = document.createElement('div');
	reviewerName.className = 'name';

	reviewerName.innerText = commentDetails.name;

	// REVIEWER COMMENT
	const reviwerComment = document.createElement('p');
	reviwerComment.className = 'reviewer-comment';
	
	reviwerComment.innerHTML = commentDetails.comment;

	reviwerDetails.appendChild(reviewerName);
	reviwerDetails.appendChild(reviwerComment);


	card.appendChild(reviewerProfile);
	card.appendChild(reviwerDetails);

	fragment.appendChild(card);
});

reviewers.appendChild(fragment);

// FETCH UPCOMING PROJECTS
const upcomingProjects = document.querySelector('.upcoming-projects');

posters.forEach((data) => {
	// PROJECT-POSTER
	const projectPoster = document.createElement('div');
	projectPoster.className = 'project-poster';

	const image = document.createElement('img');
	image.setAttribute('src', data.imageUrl);
	image.setAttribute('alt', data.title);

	projectPoster.appendChild(image);

	fragment.appendChild(projectPoster);
});

upcomingProjects.appendChild(fragment);









