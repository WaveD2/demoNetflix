export function ScrollingRow(e, time, amount, start) {
  var eAmt = amount / 100;
  var curTime = 0;
  var scrollCounter = 0;
  const scrollY = window.scrollY;

  while (curTime <= time) {
    window.setTimeout(
      CurrSlider,
      curTime,
      e,
      scrollCounter,
      eAmt,
      start,
      scrollY
    );
    curTime += time / 100;
    scrollCounter++;
  }
}

const CurrSlider = (e, sc, eAmt, start, scrollY) => {
  e.scrollLeft = eAmt * sc + start;
};

export function randomColor(opacity) {
  const R = Math.round(Math.random() * 256);
  const G = Math.round(Math.random() * 256);
  const B = Math.round(Math.random() * 256);

  let color = `rgba(${R} ,${G}, ${B} , ${opacity})`;
  return color;
}
