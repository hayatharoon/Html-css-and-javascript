const tabItems = document.querySelectorAll('.tab-item');
const tabContentItem = document.querySelectorAll('.tab-content-item');

// Select tab content item...
function selectItem(e) {
  //remove the border...
  removeBorder();
  removeShow();

  //grab ID
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
  //Add border to the current item...
  this.classList.add('tab-border');
}
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove('tab-border'));
}
function removeShow() {
  tabContentItem.forEach((item) => item.classList.remove('show'));
}

//Listen to tab click.....
tabItems.forEach((item) => item.addEventListener('click', selectItem));
