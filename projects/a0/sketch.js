class Eye {
	constructor() {
		this.w = (width / 40);
		this.wSpace = (width / 80);
	}

	draw() {
		fill(255);
		arc(-0.5* this.wSpace, 0, this.w * sqrt(2), this.w * sqrt(2), PI + (0.85* QUARTER_PI), PI + HALF_PI + HALF_PI, OPEN);
		arc(0, -this.w / 2, this.w * sqrt(2), this.w * sqrt(2), QUARTER_PI, PI, OPEN);
	}
}

class Pupils {
	constructor() {
		this.w = (width / 40);
		this.wSpace = (width / 90);
	}

	draw() {
		fill(0);
		var disp = map(sin((TWO_PI / 1000) * millis()), -HALF_PI, HALF_PI, -0.9, 0.9);
		ellipse(0.5*this.wSpace + (this.wSpace * disp), -0.5*this.wSpace, this.wSpace, this.wSpace*1.5);
		ellipse(-3.5*this.wSpace + (this.wSpace *disp), -0.5*this.wSpace, this.wSpace, this.wSpace*1.5);
	}
}

class Eyes {
	constructor() {
		this.left = new Eye();
		this.right = new Eye();
		this.pupils = new Pupils()
		this.spacing = this.left.wSpace;
	}

	draw() {
		push();
		translate(this.left.wSpace * 1.5, 0)
		this.left.draw();
		// line(0, this.left.wSpace, this.left.wSpace, 2*this.left.wSpace);
		translate(this.left.w + this.left.wSpace, 0);
		rotateY(PI);
		this.right.draw();
		rotateY(-PI);
		this.pupils.draw();
		translate(-(this.left.w + this.left.wSpace)/2, 0);
		pop();
	}
}

class BigEye {
	constructor() {
		this.w = width/4;
		this.wSpace = width/8;
	}

	draw() {
		push();
		fill(255);
		arc(-0.4* this.wSpace, 0, 0.98 * this.w * sqrt(2), this.w * sqrt(2), PI + (0.95* QUARTER_PI), TWO_PI*1.005, OPEN);
		arc(0, -this.w / 2, this.w * sqrt(2), this.w * sqrt(2), QUARTER_PI, PI, OPEN);
		pop();
	}
}

class BigEyes {
	constructor() {
		this.left = new BigEye();
		this.right = new BigEye();
		this.w = this.left.w;
		this.wSpace = this.left.wSpace;
	}

	draw() {
		push();
		translate(-this.wSpace * 1.6, 0)
		this.left.draw();
		fill(0);
		arc(0, -this.wSpace/2, this.w*0.5, this.w*0.5, PI + HALF_PI, (hour() / 24) * TWO_PI + PI + HALF_PI)
		translate(this.w + this.wSpace, 0);
		rotateY(PI);
		this.right.draw();
		rotateY(-PI);
		fill(0);
		arc(0, -this.wSpace/2, this.w*0.5, this.w*0.5, PI + HALF_PI, (minute() / 60) * TWO_PI + PI + HALF_PI)
		translate(-(this.w + this.wSpace)/2, 0);
		pop();
	}
}
var second_hands = [];
var curr_sec = 0;

function setup() {
	createCanvas(800,600, WEBGL); // make an HTML canvas element width x height pixels
	curr_sec = second();
}

function draw() {
	background(50);
	fill(255);
	// text(second(), 10, 90);
	var e = new Eyes();
	var big_e = new BigEyes();
	push();
	translate(0, -height/4);
	big_e.draw();
	pop();
	translate(e.left.wSpace - (width/2), 0);
	for (var i = 1; i <= second(); i++) {
		e.draw();
		translate(e.left.w*4, 0);
		if (i % 10 == 0) {
			translate(-e.left.w*40, height/12.5);
		}
	}
	// e.draw();
	// translate(50, 50);
	// e.draw();
}
