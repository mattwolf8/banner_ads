window.onload = function() {
  console.log('page loaded');
  tweens();
};

function tweens(){
// Store DOM Elements
// Object to be used to store references to DOM elments
  var domElements = {};
  domElements.tw_smart = document.getElementById('tw_smart');
  domElements.tw_scarf = document.getElementById('tw_scarf');
  domElements.colorfully = document.getElementById('tw_colorfully');
  domElements.tw_link = document.getElementById('tw_link');
  domElements.photo = document.getElementById('photo');
  domElements.photo1 = document.getElementById('photo1');
  domElements.wrapper = document.getElementById('wrapper');

// Tweens
  // Smart
  TweenLite.fromTo(domElements.tw_smart, 1.6, { left: -100, autoAlpha: 1 }, { left: 32, autoAlpha: 0.9, ease: "easeOutElastic", force3D: true });
  // Scarfs
  TweenLite.to(domElements.tw_scarf, 1.8, { right: 25, autoAlpha: 0.9, delay: 0.25, ease: "easeOutElastic", force3D: true });
  // img  | Fade
  TweenLite.to(domElements.photo, 1, { opacity: 1 });
  // img  | Fade
  TweenLite.to(domElements.photo1, 1, { opacity: 1 });
  
}