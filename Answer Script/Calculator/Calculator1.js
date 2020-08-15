/* global $ */

// D E F A U L T   V A L U E S;

var numStored = null;
var displayNumIsStored = false;
var activeOperator = null;

// B U T T O N S

$("#clear").click(function () {
	clear();
});

$("#sign").click(function () {
	var newNum = parseFloat($("#display-number").text()) * -1;
	$("#display-number").text(newNum);
});

$("#num0").click(function () {
	appendNumber(0);
});

$("#num1").click(function () {
	appendNumber(1);
});

$("#num2").click(function () {
	appendNumber(2);
});

$("#num3").click(function () {
	appendNumber(3);
});

$("#num4").click(function () {
	appendNumber(4);
});

$("#num5").click(function () {
	appendNumber(5);
});

$("#num6").click(function () {
	appendNumber(6);
});

$("#num7").click(function () {
	appendNumber(7);
});

$("#num8").click(function () {
	appendNumber(8);
});

$("#num9").click(function () {
	appendNumber(9);
});

$("#decimal").click(function () {
	if ($("#display-number").text().includes(".")) {
		console.log(true);
	} else {
		$("#display-number").append(".");
	}
});

$("#divide").click(function () {
	solve();
	storeDisplayNumber();
	setActiveOperator("divide");
});

$("#multiply").click(function () {
	solve();
	storeDisplayNumber();
	setActiveOperator("multiply");
});

$("#subtract").click(function () {
	solve();
	storeDisplayNumber();
	setActiveOperator("subtract");
});

$("#add").click(function () {
	solve();
	storeDisplayNumber();
	setActiveOperator("add");
});

$("#solve").click(function () {
	solve();
	setActiveOperator(null);
});

// F U N C T I O N A L I T Y

function clear() {
	$("#display-number").text(0);
	$("#display-percent").hide();
	numStored = null;
	displayNumIsStored = false;
	activeOperator = null;
}

function appendNumber(num) {
	if (displayNumIsStored) {
		$("#display-number").text(0);
		displayNumIsStored = false;
	}
	if ($("#display-number").text() !== "0") {
		$("#display-number").append(num);
	} else {
		$("#display-number").text(num);
	}
}

function storeDisplayNumber() {
	numStored = parseFloat($("#display-number").text());
	displayNumIsStored = true;
}

function setActiveOperator(oper) {
	activeOperator = oper;
}

function solve() {
	if (numStored !== null) {
		var currentNum = parseFloat($("#display-number").text());
		if (activeOperator === "divide") {
			var solution = numStored / currentNum;
			$("#display-number").text(solution);
		}
		if (activeOperator === "multiply") {
			var solution = numStored * currentNum;
			$("#display-number").text(solution);
		}
		if (activeOperator === "subtract") {
			var solution = numStored - currentNum;
			$("#display-number").text(solution);
		}
		if (activeOperator === "add") {
			var solution = numStored + currentNum;
			$("#display-number").text(solution);
		}
		numStored = null;
	}
}
