console.log('Hello World');
console.log('update');

/*
// Pseudo Code
MVP
- Get a working fetch request to our API
  - deserialize the request string (ie convert to json)
  - store the json in some variable

PostMVP
- Replace API for 'retail section' and use stock images for retail. Change stock images from 'our work' section to images pulled from an Instagram API from the actual Hair Haven instagram account.
- Add text box to capture & log emails for a subscription list.
*/

const fetchData = () => {
  const APIUrl = `http://makeup-api.herokuapp.com/api/v1/products.json`;

  console.log('Making our request');

  fetch(APIUrl)
    .then((res) => { return res.json() })
    .then((resJSON) => {

      showPullData(resJSON);
      
    })
    // .catch((err) => {
    //   // check if they spelled the country wrong?
    //   console.error(`ERROR: ${err}`)
    // });
}


const showPullData = (pullData) => {
  console.log(pullData);

  const pullDataDiv = document.querySelector('#retail-div');
  // pullDataDiv.innerHTML = ''; //Empty out what was in there before writing new data to it

  // const imageTag = document.createElement('img');
  const nameTag = document.createElement('p');

  nameTag.innerText = pullData[0].brand;
  // imageTag.src = pullData[0].api_featured_image;
  console.log(nameTag.innerText);
  // Adjust Image size
  // imageTag.style.width = '50%';

  pullDataDiv.appendChild(nameTag);
    // imageTag,

}

fetchData();

// const submitButton = document.querySelector('#retail-div');
// submitButton.addEventListener('click', () => {
//   //ev.preventDefault();
//   console.log('the button was clicked');
//   // const inputData = document.querySelector('#retail-div').value;
//   fetchData();
// });

console.log('bottom of the file');
document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM is loaded');
})