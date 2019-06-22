/*(function(){
	var az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	for (var i = 0; i <= az.lenth;i++) {
		console.log(az[i]);
	}
})();*/
var rest = "KLMNOPQRSTUVWXYZ".split("");
for (var i=0; i<rest.length; i++) {
	(function(i){
		// define the current function
		window[rest[i]] = function() {
			console.log(rest[i]);
			if (i < (rest.length-1)) {
				// TODO: call the next function
				window[rest[i+1]]();
			}
		};
	})(i);
}
var J = function() {
	J = function() {
		console.log("J");
		K();
	};
};
var F = function() {
	console.log("F");
	G();
};
var D = d;
B = function() {
	console.log("B");
	C();
};
A();

C = function C() {
	console.log("OOPS!");
}

function E(f) {
	console.log("E");
	var f = F;
	f();
}

function A() {
	console.log("A");
	B();
};

var C;

function G() {
	console.log("G");

	var H = function() {
		console.log("H");
		I();
	};
	H();
}

function d() {
	console.log("D");
	E();
}

function I() {
	console.log("I");
	J();
	J();
}

function C() {
	console.log("C");
	D();
};

