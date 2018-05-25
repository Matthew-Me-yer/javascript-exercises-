//COINFLIP
var r=prompt("Flip How many coins?");
r=parseInt(r);
if(!r)r=0;

var tails=0;
var heads=0;
var c = 0;
var i=0;

while(i<r){

c=Math.random()<.5;
if(c){heads++;}
else{tails++;}

i++;
}
