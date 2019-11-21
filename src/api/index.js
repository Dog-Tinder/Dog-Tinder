const BASE = 'http://localhost:3000'

let getDogs = function() {
    return fetch(BASE + '/dogs')
    .then((resp) => {
        let json = resp.json()
        return json
    })
}
export {
    getDogs
}


let createDog = function(dog) {
	return fetch(BASE + '/dogs', {
		body: JSON.stringify(dog),  // <- we need to stringify the json for fetch
		headers: {  // <- We specify that we're sending JSON, and expect JSON back
			'Content-Type': 'application/json'
		},
		method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
	})
		.then((resp) => {
			let json = resp.json()

			return json
		})
}

export {
    createDog
}
