function newItem() {
	//jQuery
	//1. Adding a new item to the list of items:
	let li = $('<li></li>');
	let inputValue = $('#input').val();
	let text = document.createTextNode('inputValue');
	li.append(inputValue);

	if (inputValue === '') {
		alert('Please write something.');
	} else {
		$('#list').append(li);
	}

	//javascript
	//1. Adding a new item to the list of items:
	//let li = document.createElement('li');
	//let inputValue = document.getElementById('input').value;
	//let text = document.createTextNode(inputValue);
	//li.appendChild(text);

	//	if (inputValue === '') {
	//		alert('You must write something!');
	//	} else {
	//		let list = document.querySelector('#list');
	//		list.appendChild(li);
	//	}

	//jQuery
	//2. Crossing out an item from the list of items:
	li.on('dblclick', function crossOut() {
		li.toggleClass('strike');
	});

	// javascript
	// 2. Crossing out an item from the list of items:
	// function crossOut() {
	// li.classList.toggle('strike');
	// }
	// li.addEventListener('dblclick', crossOut);

	//jQuery
	//3(i). Adding the delete button "X":
	let crossOutButton = $('<crossOutButton></crossOutButton>');
	crossOutButton.append(document.createTextNode('X'));
	li.append(crossOutButton);

	crossOutButton.on('click', deleteListItem);
	//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
	function deleteListItem() {
		li.addClass('delete');

		//javascript
		//3(i). Adding the delete button "X":
		//crossOutButton = document.createElement('crossOutButton');
		//crossOutButton.appendChild(document.createTextNode('X'));
		//li.appendChild(crossOutButton);

		//crossOutButton.addEventListener('click', deleteListItem);
		//3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
		//function deleteListItem() {
		//li.classList.add('delete');
		//}

		// 4. Reordering the items (already in jQuery):
	}
	$('#list').sortable();
}
