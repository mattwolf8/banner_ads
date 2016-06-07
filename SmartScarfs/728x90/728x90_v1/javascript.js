window.onload = function() {
  console.log('page loaded');
  tweens();
};

function tweens(){
    // Variables
      var tw_smart = document.getElementById('tw_smart');
      var tw_scarf = document.getElementById('tw_scarf');
      var colorfully = document.getElementById('tw_colorfully');
      var tw_link = document.getElementById('tw_link');
      var photo = document.getElementById('photo');
      var wrapper = document.getElementById('wrapper');

    // Tweens
      // Smart
      TweenLite.fromTo(tw_smart, 1.6, {left:-100, autoAlpha:1}, {left:38, autoAlpha:0.9,ease:"easeOutElastic",force3D:true});
      // Scarfs
      TweenLite.to(tw_scarf,1.8, {left:150,autoAlpha:0.9,delay:0.25,ease:"easeOutElastic",force3D:true});
      // Colorfully Secure
      TweenLite.to(colorfully,1, {bottom:10, ease:'Elastic.easeOut',force3D:true});
      // // img  | Fade
      // TweenLite.to(photo,1, {opacity:1});
      // // colorfully fade
      // TweenLite.to(colorfully,1.25,{opacity:0, delay:3.25});
      // // tw_link fade in
      // TweenLite.to(tw_link,4.9, {opacity:1, delay:3});
}