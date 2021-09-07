const getProfileData = () => {
    const userName = document.getElementById('input-field').value;
    document.getElementById('input-field').value = '';

    fetch(`https://codeforces.com/api/user.info?handles=${userName}`)
        .then(res => res.json())
        .then(data => displayUserDetails(data))
}

const displayUserDetails = userData => {
    const userContainer = document.getElementById('user-details');
    const userDataResult = userData.result[0];
    userContainer.innerHTML = `
    <img id="profile-image" src="${userDataResult.titlePhoto}" alt="">
    <h2 id="full-name">${userDataResult.firstName + ' ' + userDataResult.lastName}</h2>
    <h4 id="rank">${userDataResult.rank ? userDataResult.rank : ''}</h4>
    <a id="handle" href="https://codeforces.com/profile/${userDataResult.handle}">@${userDataResult.handle}</a>
    <h5 id="address">${userDataResult.city + ', ' + userDataResult.country}</h5>
    <div class="rating">
        <h3 id="current-rating">Current Rating: ${userDataResult.rating ? userDataResult.rating : 'No rating'}</h3>
        <h3 id="max-rating">Max Rating: ${userDataResult.maxRating ? userDataResult.maxRating : 'No rating'}</h3>
    </div>
    `
}