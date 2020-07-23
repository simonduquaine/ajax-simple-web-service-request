async function getData(){
    let response = await fetch('https://thatsthespir.it/api');
    let data = await response.json();
    return data;
}

getData()
.then(data => {
    document.getElementById('quote').innerHTML = data.quote + '<br>' + '-' + '<br>' + '<b>' + data.author + '</b>';
});