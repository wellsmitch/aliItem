// 公共函数

function ToVw(pixels) {
  console.log(pixels);
  let defaultsProp = {
    unitToConvert: 'px',
    viewportWidth: 1280,
    unitPrecision: 5,
    viewportUnit: 'vw',
    fontViewportUnit: 'vw',
    minPixelValue: 1
  };
  if (pixels <=  defaultsProp.minPixelValue) return;
  return toFixed((pixels / defaultsProp.viewportWidth * 100), defaultsProp.unitPrecision) + defaultsProp.viewportUnit
}
function toFixed (number, precision) {
  let multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier
}

export default {
  ToVw
}
