// TODO - Not currently in use. Add to an HTML file

//* Check if the current tab is in view / focus - Only works with DOM
// const isBrowserTabInView = (): boolean => document.hidden;
// isBrowserTabInView();
// Result: returns true or false depending on if tab is in view / focus

//* Check if an element is currently in focus - Requires DOM
// const elementIsInFocus = (el: any): boolean => (el === document.activeElement);
// elementIsInFocus(element)
// Result: will return true if in focus, false if not in focus

//* Test if the end-user has a touch-enabled device - Requires DOM
// const touchSupported = (): boolean => {
//   return ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
// }
// console.log(touchSupported());
// Result: will return true if touch events are supported, false if not

//* Check if the current user is on an Apple device
// const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
// console.log(isAppleDevice);
// Result: will return true if user is on an Apple device

//* Scroll to top of the page
// const goToTop = () => window.scrollTo(0, 0);
// goToTop();
// Result: will scroll the browser to the top of the page