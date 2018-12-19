let options = {
  width: 700,
  height: 230,
  axisTitle: "bite",
  axisClass: "ct-axis-title",
  offset: { x: 10, y: 30 },
  textAnchor: "middle",
  flipTitle: false
}

let data = {
    labels: ['1800','1870'],
    series: [
      [36, 1000]
    ]
}

let data1 = {
  labels: ['1911','1870'],
  series: [
    [36, 1000]
  ]
}

let data2 = {
    labels: ['1850','1875', '1890', '1910'],
    series: [
      [56, 250, 350, 600]
    ]
}

let data3 = {
  labels: ['1950','2017'],
  series: [
    [31, 4093]
  ]
}

let data4 = {
  labels: ['1923','1929'],
  series: [
    [60, 840]
  ]
}

let data5 = {
  labels: ['1950','1960'],
  series: [
    [3, 55]
  ]
}

let data6 = {
  labels: ['1949', '1953'],
  series: [
    [500, 200]
  ]
}

let chartDraw = (_data) => {
  new Chartist.Line('.ct-chart-1', _data, options)
}

let chartDraw2 = (_data2) => {
  new Chartist.Line('.ct-chart-2', _data2, options)
}

new Chartist.Line('.ct-chart-1', data, options)

