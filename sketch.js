let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background('#e7c6ff');
  
  // 計算顯示影像的寬高 (整個畫布寬高的 60%)
  let videoWidth = width * 0.6;
  let videoHeight = height * 0.6;
  
  imageMode(CENTER);
  image(capture, width / 2, height / 2, videoWidth, videoHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
