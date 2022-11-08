const search = document.querySelector('.search')
const drinks = document.querySelectorAll('li')

const searchItem = () => {
	for (let i = 0; i < drinks.length; i++) {
		if (!drinks[i].textContent.toLowerCase().includes(search.value.toLowerCase())) {
			drinks[i].style.display = 'none'
		} else {
			drinks[i].style.display = 'block'
		}
	}
}

search.addEventListener('keyup', searchItem)

// const searchEngine = e => {
// 	const text = e.target.value.toLowerCase()

// 	drinks.forEach(el => {
// 		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
// 			el.style.display = 'block'
// 		} else {
// 			el.style.display = 'none'
// 		}
// 	})
// }

// search.addEventListener('keyup', searchEngine)

// DRUGIE ROZWIĄZANIE REGEXP

// const filterList = () => {
//     drinks.forEach(item => {
//         const match = new RegExp(search.value, 'i').test(item.textContent)

//         if(!match) {
//             item.style.display = 'none'
//         } else {
//             item.style.display = 'block'
//         }
//     })
// }
// search.addEventListener('keyup', filterList)
