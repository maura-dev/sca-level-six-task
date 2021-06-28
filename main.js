var img= document.getElementById("tab-img");
var title=document.getElementById("tab-header");
var text=document.getElementById("tab-text");
var tab1= document.getElementById("tab-1");
var tab2= document.getElementById("tab-2");
var tab3= document.getElementById("tab-3");

function showTab1(){
	tab1.classList.add("active-tab");
	tab2.classList.remove("active-tab");
	tab3.classList.remove("active-tab");
	img.src="./images/illustration-features-tab-1.svg"
	title.innerHTML="Bookmark in one click"
	text.innerHTML="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
}

function showTab2(){
	tab2.classList.add("active-tab");
	tab1.classList.remove("active-tab");
	tab3.classList.remove("active-tab");
	img.src="./images/illustration-features-tab-2.svg"
	img.style.height="80%"
	title.innerHTML="Intelligent search"
	text.innerHTML="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
}

function showTab3(){
	tab3.classList.add("active-tab");
	tab2.classList.remove("active-tab");
	tab1.classList.remove("active-tab");
	img.src="./images/illustration-features-tab-3.svg"
	img.style.height="78%"
	title.innerHTML="Share your bookmarks"
	text.innerHTML="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
}

function showFaq(x){
	if(document.getElementById(x).classList.contains("answer")){
		document.getElementById(x).classList.remove("answer")
		document.getElementById(x).classList.add("reveal")
		document.getElementById(`img-${x}`).classList.remove("fa-chevron-down")
		document.getElementById(`img-${x}`).classList.add("fa-chevron-up")
	} 
	else{
		document.getElementById(x).classList.remove("reveal")
		document.getElementById(x).classList.add("answer")
		document.getElementById(`img-${x}`).classList.remove("fa-chevron-up")
		document.getElementById(`img-${x}`).classList.add("fa-chevron-down")
	}	
	
}

function inputValidity(){
	if(document.getElementById("email-input").checkValidity()==false){
		document.getElementById("input").style.border="2px solid hsl(0, 94%, 66%)"
		document.getElementById("error-msg").style.display="block"
		document.getElementById("error").style.display="block"
	}
}

function inputChange(){
	document.getElementById("input").style.border="white"
		document.getElementById("error-msg").style.display="none"
		document.getElementById("error").style.display="none"
}

function toggleNav(){
	document.getElementById("mobile-nav").style.display = "block";
}

function closeNav(){
	document.getElementById("mobile-nav").style.display = "none";
}