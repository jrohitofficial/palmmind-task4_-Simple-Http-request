function fetchData() {
  // Make a GET request 
  axios.get('https://your-backend-api.com/data')
    .then(function (response) {
      // Handle the response data
      document.getElementById('response').innerText = JSON.stringify(response.data);
    })
    .catch(function (error) {
      // Handle any errors
      console.error('Error fetching data:', error);
      document.getElementById('response').innerText = 'Error fetching data';
    });
}
