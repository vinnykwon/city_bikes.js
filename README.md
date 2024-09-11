# city_bikes.js
Web-API for [citybik.es](https://citybik.es/) the most widely used dataset for building bike sharing transportation projects.

## Example
```JavaScript
async function main() {
	const { CityBikes } = require("./city_bikes.js")
	const cityBikes = new CityBikes()
	const networks = await cityBikes.getNetworks()
	console.log(networks)
}

main()
```
