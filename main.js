var tmap;	// カレントマップ
var x, y;	// キャラクタ位置

////////////////////////////////////////////////////////////////////////////////
// プリロード
function preload() {
  // 主人公の位置
  x = 11;
  y = 4;

  // デフォルトマップ
  loadTiledMap("village", "data", mapLoaded);
}

////////////////////////////////////////////////////////////////////////////////
// セットアップ
function setup() {
  let cnv = createCanvas(640, 640);
}

////////////////////////////////////////////////////////////////////////////////
// ドロー
function draw() {
  background(tmap.getBackgroundColor());
  tmap.draw(x, y);
}

////////////////////////////////////////////////////////////////////////////////
// マップロード
function mapLoaded(newMap) {
  tmap = newMap;
  tmap.setPositionMode("MAP");
  tmap.setDrawMode(CENTER);
}
