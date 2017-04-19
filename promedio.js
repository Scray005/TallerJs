var n1,n2,n3,n4,n5,suma,pr;
n1=80;
n2=77;
n3=88;
n4=95;
n5=68;
suma=n1+n2+n3+n4+n5;
pr=suma/5;
if (pr<60) {
	alert("el rango es F el promedio fue " + pr);
}else if (pr<70) {
	alert("el rango es D el promedio fue " + pr);
}else if (pr<80) {
	alert("el rango es C  el promedio fue " + pr);
}else if (pr <90) {
	alert("el rango es B el promedio fue " + pr);
}else {
	alert("el rango es A el promedio fue " + pr);
}