import faker from 'faker';
const testStats = {
	hp: 35,
	attack: 55,
	defense: 40,
	specialAttack: 50,
	specialDefense: 50,
	speed: 90
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
console.log(labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })))

const statsArray = Object.values(testStats);

console.log(statsArray); // Output: [35, 55, 40, 50, 50, 90]
