'use strict';

function getDogImage() {
  // this function calls on the API
  fetch(`https://dog.ceo/api/breed/${$('.breed-input').val()}/images`)
    .then(response => response.json())
    .then(responseJson => displayImage(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayImage(responseJson) {
    console.log(responseJson);

    // finds a random item from responseJson.message
    let item = responseJson.message[Math.floor(Math.random() * responseJson.message.length)];
    console.log(item);

    if (item.startsWith('https://') == true) {
        // adds the image to the DOM
        $('.dog-img').append(`
            <h2>Here's a ${$('.breed-input').val()}!</h2>
            <img src='${item}' alt='dog image' class='response-img'>`);
    } else {
        return alert("404 Error: Breed not found (master breed does not exist)");
    }
}

function handleForm() {
  // this function disables the default form behavior
  // it records the number input by the user
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}


$(function() {
    console.log('App loaded! Waiting for submit!');
    handleForm();
  });