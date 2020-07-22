const container = document.querySelector('.container');


fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    
    // Arrow function instead of regular function
    return response.json();
})
.then (data => {
    console.log(data)

    // const firstElement = data[0];

    // const capsuleId = firstElement.capsule_id;
    // console.log(capsuleId);

    // let details = firstElement.details;
    // console.log(details);

    // let missions = firstElement.missions[0].name;
    // console.log(missions)

    // let landings = firstElement.landings;
    // console.log(landings);

    for (let i = 0; i < data.length; i++) {
        let eachCapsule = data[i];
        // console.log(eachCapsule);
        const obj = {
            capsuleID: eachCapsule.capsule_id,
            details: eachCapsule.details,
            landings: eachCapsule.landings
        }
        console.log(obj);

        const capsuleElement = document.createElement('p');
        capsuleElement.textContent = obj.details;
        container.appendChild(capsuleElement);
    }
})