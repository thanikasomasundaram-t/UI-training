let posters;
let leftContainerData;

$(document).ready(function () {
	$.ajax({
		async: false,
		type: 'get',
		url: 'https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346',
		data: "data",
		dataType: 'JSON',
		success: function (response) {
			posters = response;
			console.log(posters);
		}

	});

	$.ajax({
		async: false,
		type: 'get',
		url: 'https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0',
		data: "data",
		dataType: 'JSON',
		success: function (response) {
			leftContainerData = response;
			console.log(leftContainerData);
		}

	});

	// ADD VIDEO URL
	$('video').attr('src', leftContainerData.videoUrl);

	//ADD TITLE
	$('.synopsis > h2').html(leftContainerData.title);

	// ADD DESCRIPTION
	$('.description').html(leftContainerData.description);

	// RENDER REVIEWERS CONTAINER
	$(leftContainerData.comments).each(function () {
		// CARD
		const card = document.createElement('div');
		card.className = 'card';

		// REVIEWER PROFILE
		const reviewerProfile = document.createElement('div');
		reviewerProfile.className = 'reviewer-profile';

		// IMAGE
		const img = document.createElement('img');
		$(img).attr('src', this.image).attr('alt', this.name);

		$(reviewerProfile).append(img);

		// REVIEWER DETAILS
		const reviwerDetails = document.createElement('div');
		reviwerDetails.className = 'reviewer-details';

		// NAME
		const reviewerName = document.createElement('div');
		reviewerName.className = 'name';

		$(reviewerName).html(this.name);

		// REVIEWER COMMENT
		const reviewerComment = document.createElement('p');
		reviewerComment.className = 'reviewer-comment';

		$(reviewerComment).html(this.comment);

		$(reviwerDetails).append(reviewerName, reviewerComment);

		$(card).append(reviewerProfile, reviwerDetails);

		$('.reviewers').append(card);
	});

	// RENDER UPCOMING PROJECTS
	$(posters).each(function () {
		console.log(this);
		const projectPoster = document.createElement('div');
		projectPoster.className = 'project-poster';

		const image = document.createElement('img');
		$(image).attr('src', this.imageUrl).attr('alt', this.title);

		$(projectPoster).append(image);
		console.log(projectPoster);

		$('.upcoming-projects').append(projectPoster);
	})

});







