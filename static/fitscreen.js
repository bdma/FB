(function (win) {
  var docElem = document.documentElement
  var docElemWidth = docElem.getBoundingClientRect().width
  var dpr = win.devicePixelRatio
  console.log("dpr:", dpr)
  // win.dpr = dpr
  if (docElemWidth <= screen.availWidth) dpr = 1 //htc bug
  var usefulAreaWidth = docElemWidth / dpr > 640 ? 640 * dpr : docElemWidth
  console.log("docElem:", docElem)
  console.log("docElemWidth:", docElemWidth)
  console.log("win.dpr :", win.dpr )
  console.log("usefulAreaWidth:", usefulAreaWidth)  
  docElem.style.fontSize = 20 * usefulAreaWidth / 375 + 'px'
  // docElem.style.fontSize = usefulAreaWidth  + 'px'
})(window)