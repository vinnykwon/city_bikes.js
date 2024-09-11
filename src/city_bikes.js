class CityBikes {
	constructor() {
		this.api = "http://api.citybik.es/v2"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getNetworks() {
		const response = await fetch(
			`${this.api}/networks`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getNetwork(networkId) {
		const response = await fetch(
			`${this.api}/networks/${networkId}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {CityBikes}
