const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all border classes and add hidden classes
  removeBorder();
  addHidden();
  removeWhite();
	// Add border to current tab item и класс white-active в выбранную кнопку
  this.classList.add('tab-border');
  this.classList.add('white-active');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Remove hidden class
	tabContentItem.classList.remove('hidden');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Удаление подсветки клавиш выбора
function removeWhite() {
  tabItems.forEach(item => {
    item.classList.remove('white-active');
  } );
}

// Add hidden class from all content items
function addHidden() {
	tabContentItems.forEach(item => {
		item.classList.add('hidden');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});