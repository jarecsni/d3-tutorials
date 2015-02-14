/**
 * Created by janos on 14/02/15.
 */

console.log("D3 engine loaded")

var data = [4, 8, 15, 16, 23, 42];

var x = d3.scale.linear()
	.domain([0, d3.max(data)])
	.range([0, 420]);

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(data);
var barEnter = barUpdate.enter().append("div");
barEnter.style("width", function(d) { return x(d) + "px"; });
// if you want to see the bars at this stage
//barEnter.style("border-color", "blue");
//barEnter.style("border", "solid");
barEnter.text(function(d) { return d; });