
    var games = [
    {'id':101,'name':'Subway Surfers','image':'assets/img/subway.png'},
    {'id':102,'name':'Blades of Brim','image':'assets/img/bladesofbrim.jpg'},
    {'id':103,'name':'Geometry Dash','image':'assets/img/geometryDash.png'},
    {'id':104,'name':'Red Ball','image':'assets/img/redball.png'},
    {'id':105,'name':'Drift Racer','image':'assets/img/logo.jpeg'},
    {'id':101,'name':'Subway Surfers','image':'assets/img/subway.png'},
    {'id':102,'name':'Blades of Brim','image':'assets/img/bladesofbrim.jpg'},
    {'id':103,'name':'Geometry Dash','image':'assets/img/geometryDash.png'},
    {'id':104,'name':'Red Ball','image':'assets/img/redball.png'},
    {'id':105,'name':'Drift Racer','image':'assets/img/logo.jpeg'},
    ];
 
        var src = '../assets/gif/cardrift.gif';
   function changeImage(){
switch(src){
    case '../assets/gif/cardrift.gif':
        src = '../assets/gif/car2.gif';
        document.getElementById('image-div').innerHTML += '<div style="background: url('+src+');height:95%;width:100%;  background-repeat: no-repeat;background-size: cover;"></div>"';
    break;
    case '../assets/gif/car2.gif':
        src = '../assets/gif/fornite.gif';
        document.getElementById('image-div').innerHTML += '<div style="background: url('+src+');height:95%;width:100%;  background-repeat: no-repeat;background-size: cover;"></div>"';
    break;
    case '../assets/gif/fornite.gif':
            src = '../assets/gif/offroad.gif';
            document.getElementById('image-div').innerHTML += '<div style="background: url('+src+');height:95%;width:100%;  background-repeat: no-repeat;background-size: cover;"></div>"';
    break;
    case '../assets/gif/offroad.gif':
            src = '../assets/gif/ontheroad.gif';
            document.getElementById('image-div').innerHTML += '<div style="background: url('+src+');height:95%;width:100%;  background-repeat: no-repeat;background-size: cover;"></div>"';
    break;
    case '../assets/gif/ontheroad.gif':
                src = '../assets/gif/tourism.gif';
                document.getElementById('image-div').innerHTML += '<div style="background: url('+src+');height:95%;width:100%;  background-repeat: no-repeat;background-size: cover;"></div>"';
    break;
}
for(var i=0;i<games.length;i++){
    document.getElementById('cardbox').innerHTML += '<div class="card"><img src='+games[i].image+' ><div class="content"><h4>'+games[i].name+'</h4><div class="info"><a href="#">Play Now</a></div>  </div>   </div>'
        }
    }
