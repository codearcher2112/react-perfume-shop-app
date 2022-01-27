async function login(body) {
	try {
		return fetch('http://localhost:8080/login', {
			method: 'POST',
			headers: {
				platform: 'website',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})
	} catch (err) {
		console.trace('Log :::  err ::: ', err);
		return { message: 'Something went wrong', status: 'error' }
	}
}