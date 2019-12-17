/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let numberOfListItems = sections.length;


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function createListItem() {
	for (section of sections) {
		sectioName = section.getAttribute('data-nav');
		sectionLink = section.getAttribute('id');
        // create an item for each one
        listItem = document.createElement('li');

		// Add the item text
        listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectioName}</a>`;

   	    // Add listItem to the menu
       	menu.appendChild(listItem);
	}
}



// Determines if section is in viewport

function sectionInViewPort (elem) {
	let sectionPos = elem.getBoundingClientRect();
    return (
        sectionPos.top >= 0 &&
        sectionPos.left >= 0 &&
        sectionPos.bottom <= window.innerHeight &&
        sectionPos.right <= window.innerWidth
    );
}

// Gives the section being viewed a different appearance
function toggleActiveClass() {
	for (section of sections) {
		if (sectionInViewPort(section)) {
			section.classList.toggle('your-active-class');
		}
	}
}


/**
 * End Helper Functions
*/

// build the nav

createListItem();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', toggleActiveClass);



// Scroll to anchor ID
function scrollTo(i) {
	let sectionLinks = document.getElementsByTagName('section');
	let sectionBounding = sectionLinks[i].getBoundingClientRect();
	let sectionHightFromTop = sectionBounding.top - getPageHeaderHight() + 1;
	for(let i=0; i<sectionLinks; i++) {
		libks[i].onclick= function () {
			window.scrollBy({left:0, top: sectionHightFromTop, behavior: 'smooth'});
		};
	}
}



