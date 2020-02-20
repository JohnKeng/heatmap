const body = document.body
const heatmap = h337.create({
  container: document.getElementById('heatmapContainer'),
  maxOpacity: .6,
  radius: 40,
  blur: .8
})


// 這段是隨機九個點的矩陣 兩個矩陣 3^2 = 9 個點 （你的程式用不到可刪掉）
const X = [313.5,500,687.5]
const Y = [113.5,300,487.5]
Array.prototype.ram = function(){
  return this[(Math.random()*this.length) >> 0]
}





// 畫熱點以及框線 or 白點
function g(){

  // 隨機選一個點
  const x = X.ram()
  const y = Y.ram()
  console.log(x, y)

  // 熱點 value +1
  heatmap.addData({ x: x, y: y, value: 1 })

  // 你要的畫框 function
  dot() // 白點
  rect() // 外框
  line() // 井字線
}



// 模擬熱點用的，滑鼠移動就 +1 （你的程式用不到可刪掉）
body.onmousemove = (e) => {
  e.preventDefault()
  g()
}
// 網頁一打開先模擬30個熱點 （你的程式用不到可刪掉）
for(let i=0; i<30; i++){
  const rand = (Math.random() * 1500) >> 0
  setTimeout(g, rand)   
}






// 畫圖的主要函示 
function cins(){
  const c = document.getElementsByClassName("heatmap-canvas");
  return c[0].getContext("2d");
}
// 點
function dot(){
  const ctx = cins()
  ctx.fillStyle = "white"
  ctx.fillRect(308.5,108.5,10,10)
  ctx.fillRect(308.5,295,10,10)
  ctx.fillRect(308.5,482.5,10,10)
  ctx.fillRect(495,108.5,10,10)
  ctx.fillRect(495,295,10,10)
  ctx.fillRect(495,482.5,10,10)
  ctx.fillRect(682.5,108.5,10,10)
  ctx.fillRect(682.5,295,10,10)
  ctx.fillRect(682.5,482.5,10,10)
}
// 框
function rect(){
  const ctx = cins()
  ctx.beginPath()
  ctx.lineWidth = "5";
  ctx.strokeStyle = "#5f5fe0"
  ctx.rect(220, 20, 561, 561)
  ctx.stroke()
}
// 井
function line(){
  const ctx = cins()
  ctx.strokeStyle = "#5f5fe0"
  ctx.beginPath()

  ctx.moveTo(407, 20)
  ctx.lineTo(407, 580)
  ctx.stroke()
  ctx.moveTo(594, 20)
  ctx.lineTo(594, 580)
  ctx.stroke()

  ctx.moveTo(220, 207)
  ctx.lineTo(780, 207)
  ctx.stroke()
  ctx.moveTo(220, 394)
  ctx.lineTo(780, 394)
  ctx.stroke()
}