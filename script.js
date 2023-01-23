async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd1c549baf8msh1eb738c1c3d181dp1daa7cjsn9b70fa9874cf',
            'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };

    const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Philadelphia&minDate=2023-01-11&maxDate=2023-01-13&page=1', options)
    const record = await res.json()

    document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');



}
fetchData();