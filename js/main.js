'use stript';

{
    const comment = document.getElementById('comment');
    const label = document.getElementById('label');
    
    var LIMIT = 30;
    var WARNIG = 10;
    
    label.innerHTML = LIMIT;
    
    comment.addEventListener('keyup', function(){
       var remaining = LIMIT - this.value.length;
       label.innerHTML = remaining;
       if(remaining < WARNIG ){
           label.className = 'warnig';
       }else {
           label.className = '';
       }
    });
}