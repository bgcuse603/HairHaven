console.log('open? yes');

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

  const APIUrl = `https://graph.instagram.com/6431553190218256/media?fields=id,caption,media_url,media_type,permalink&access_token=IGQVJYaXd1WjJCNktrMkdNbDc2d0xITTFJMUl5YndKWXpkcWF4UHpGYnBFOGhNWXp3bXhuVUlCWHBObU5XY2RkVEs2VlZAFR1pWOEs4b3dWVmZArX0FsdHpVMnRhM1JIU3VpMkc1N3ZAoOHZA5Yl9Xam5FTwZDZD`;

  console.log('Making our request');

  fetch(APIUrl)
    .then((res) => { return res.json() })
    .then((resJSON) => {

      showData(resJSON.data);
      
    })
    // .catch((err) => {
    //   // check if they spelled the country wrong?
    //   console.error(`ERROR: ${err}`)
    // });
}

const showData = (pullData) => {
  console.log(pullData);

  // Featured Section 
  document.querySelector('.postImg').src = pullData[0].media_url;
  
  const capTag = document.createElement('p');
  capTag.innerText = pullData[0].caption;
  console.log(capTag.innerText);
  capTag.setAttribute("class","caption")
  
  const featSection = document.querySelector('#featured-subSection');
  featSection.append(capTag);

  // Our Work Section
  for (let i = 10; i < 14; i++){
    const imageTag = document.createElement('img');
    imageTag.src = pullData[i].media_url;
    
    const workSection = document.querySelector('#ourWork-div');
    imageTag.setAttribute("class","work-img")
    workSection.append(imageTag);
  }


}

fetchData();



console.log('bottom of the file');
document.addEventListener('DOMContentLoaded', () => {
  console.log('The DOM is loaded');
})