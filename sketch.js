 var ant;
var ants = [];
var backgroundImage;
var counter = 0;


function preload(){
	ant = loadImage('images/ant.png');
	//Image Credits https://pixabay.com/en/ant-insect-animal-159283/
}

function setup() {
	createCanvas(800,600);
	backgroundImage = loadImage('images/picnic.jpg');
	for(var i=0; i<100; i++) {
		ants.push(new Ant(random(0, 800),random(0, 600)));
	}
}

function draw() {
	imageMode(CORNER);
	background(backgroundImage);
	//Image Credits https://www.dreamstime.com/royalty-free-stock-photos-red-picnic-fabric-image4813628
	for(var i = 0; i<100; i++) {
		ants[i].move();
		ants[i].show();
	}
		textSize(60);
		textAlign(CENTER);
		text(counter, width/2, height/2);
		fill("lightblue");
}

function Ant(x, y) {
	this.x = x;
	this.y = y;
	this.start = 3;
	this.end = -4;
	this.width = 144;
	this.height = 187;

	this.show = function() {
		imageMode(CENTER);
		image(ant, this.x, this.y, this.width, this.height);

		
	};

	this.move = function() {
		this.x += random(this.start, this.end);
		this.y += random(this.start, this.end);

	};
 
 	this.check = function(){
 	
 		if (dist(mouseX, mouseY, this.x, this.y) < this.width/2) { 
 			counter += 1
 			return true }
 			else {return false}

 	};

}

function mousePressed(){
for(var i = 0; i<100; i++) {	
  if(ants[i].check() == true){
ants[i].start = 0
ants[i].end = 0

 } 
}
}