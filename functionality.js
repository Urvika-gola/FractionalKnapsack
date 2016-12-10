function fun() {

document.getElementById('suggest').style.display = "block";
document.getElementById('Finalanswer').style.display = "block";
document.getElementById('know').style.display = "block";
document.getElementById('knowalgo').style.display = "block";
document.getElementById('algo').style.display = "block";
var obj2=document.getElementById("algo");
var obj1=document.getElementById("suggest");

name1 = document.getElementById('1.1').value;
time1 = parseInt(document.getElementById('1.2').value);
priority1=parseInt(document.getElementById('1.3').value);

name2 = document.getElementById('2.1').value;
time2 = parseInt(document.getElementById('2.2').value);
priority2=parseInt(document.getElementById('2.3').value);

name3 = document.getElementById('3.1').value;
time3 = parseInt(document.getElementById('3.2').value);
priority3=parseInt(document.getElementById('3.3').value);

name4 = document.getElementById('4.1').value;
time4 = parseInt(document.getElementById('4.2').value);
priority4=parseInt(document.getElementById('4.3').value);

name5 = document.getElementById('5.1').value;
time5 = parseInt(document.getElementById('5.2').value);
priority5=parseInt(document.getElementById('5.3').value);

var totaltime = parseInt(document.getElementById('total').value);


var list = [
    {name: name1, time:time1 , priority:priority1, ratio:(parseFloat(priority1/time1)).toFixed(3)}, 
    {name: name2, time:time2 , priority:priority2, ratio:(parseFloat(priority2/time2)).toFixed(3)},
    {name: name3, time:time3 , priority:priority3,ratio:(parseFloat(priority3/time3)).toFixed(3)}, 
    {name: name4, time:time4 , priority:priority4,ratio:(parseFloat(priority4/time4)).toFixed(3)}, 
    {name: name5, time:time5 , priority:priority5,ratio:(parseFloat(priority5/time5)).toFixed(3)},
    ];

list.sort(function(a, b) {
    return ((a.ratio > b.ratio) ? -1 : ((a.ratio == b.ratio) ? 0 : 1));
});
sum=0;
currtime=0;
totalpriority=0; 
for(x=0;x<5;x++)
{
	sum+=list[x].priority;
	if(currtime+list[x].time<=totaltime)
	{
		currtime+=list[x].time;
		totalpriority+=list[x].priority;
		var txt=document.createTextNode("\n"+(x+1) +".  "+ list[x].name+" for a time period of "+list[x].time+" minutes.\n");
		obj1.appendChild(txt);
	}
	else
	{
		remaintime=totaltime-currtime;
		totalpriority+=((list[x].priority)*(remaintime/list[x].time));	
		var txt=document.createTextNode("\n"+(x+1) +". "+ list[x].name+" for a time period of "+remaintime+" minutes.\n");
		obj1.appendChild(txt);
	}
}
for (x=0; x<5; x++) 
{
    var txt=document.createTextNode("\n"+(x+1) +". "+list[x].name+" = "+list[x].ratio+"\n");
	obj2.appendChild(txt);
}
document.getElementById("Finalanswer").innerHTML="Theoritically you can achieve "+sum+" priority. However you can achieve maximum of "+totalpriority.toFixed(3)+" priority in time limit "+totaltime+" minutes.";

}
