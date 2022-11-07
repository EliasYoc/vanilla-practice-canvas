// https://joshondesign.com/p/books/canvasdeepdive/chapter02.html
let data = [
  { month: "JANUARY", val: 16 },
  { month: "FEBruat", val: 68 },
  { month: "MAR", val: 20 },
  { month: "APR", val: 30 },
  { month: "MAY", val: 54 },
  { month: "JUN", val: 1 },
  { month: "JUL", val: 3 },
  { month: "AUG", val: 2 },
  { month: "sep", val: 10 },
  { month: "OCT", val: 5 },
  { month: "NOV", val: 200 },
  { month: "DEC", val: 4 },
];
const d = document;

const $canvas = d.getElementById("canvas");
const ctx = $canvas.getContext("2d");
// ctx.scale(3, 3);
const canvasWidth = $canvas.width,
  canvasHeight = $canvas.height;
let {
  moveLeftLine,
  moveRightLine,
  moveTopLine,
  moveBottomLine,
  axisHeight,
  axisWidth,
  pixelGapGraph,
  pixelBottomBar,
  firstBarHeightMeasure,
} = {
  moveLeftLine: 10,
  moveRightLine: 10,
  moveTopLine: 10,
  moveBottomLine: 20,
  axisWidth: 0,
  axisHeight: 0,
  pixelGapGraph: 10,
  pixelBottomBar: 5,
  firstBarHeightMeasure: 1.5,
};
axisWidth = canvasWidth - moveLeftLine - moveRightLine;
axisHeight = canvasHeight - moveTopLine - moveBottomLine;
//.................x axis layout
ctx.lineWidth = 1.3;

ctx.beginPath();
ctx.moveTo(moveLeftLine, moveTopLine);
ctx.lineTo(moveLeftLine, canvasHeight - moveBottomLine);
ctx.lineTo(canvasWidth - moveRightLine, canvasHeight - moveBottomLine);
ctx.stroke();
console.log(axisHeight);
ctx.fillStyle = "crimson";
ctx.strokeStyle = "black"; //outline

for (let i = 0; i < data.length; i++) {
  const dataPoint = data[i].val;
  const barWidth = axisWidth / data.length - pixelGapGraph;
  const barHeight = dataPoint * firstBarHeightMeasure; //dpValue * firstBarHe.....
  //rectangle with bg x,y ,width,height
  //rectangle with radius
  ctx.beginPath();
  ctx.roundRect(
    moveLeftLine + pixelGapGraph + i * (axisWidth / data.length), //x
    canvasHeight - barHeight - (moveBottomLine + pixelBottomBar), //y
    barWidth, //width //(data.length + 200) / data.length
    barHeight, //height
    [5] //borderradius
  );
  ctx.fill();
  ctx.stroke();

  //................labels (x axis)
  ctx.textAlign = "center";
  ctx.fillText(
    data[i].month,
    moveLeftLine + pixelGapGraph + barWidth / 2 + i * (axisWidth / data.length),
    axisHeight + moveTopLine + 20,
    barWidth
  );
  //-.............lines (x axis)
  ctx.beginPath();
  ctx.moveTo(
    moveLeftLine + pixelGapGraph + barWidth / 2 + i * (axisWidth / data.length),
    axisHeight + moveTopLine
  );
  ctx.lineTo(
    moveLeftLine + pixelGapGraph + barWidth / 2 + i * (axisWidth / data.length),
    axisHeight + moveTopLine + 5
  );
  ctx.stroke();
}
// ctx.setTransform(1, 0, 0, 1, 0, 0);
// ctx.lineCap = "round";

//................labels (y axis)
//.
//.
