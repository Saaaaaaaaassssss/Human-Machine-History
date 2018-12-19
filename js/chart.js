let options = {
  width: 700,
  height: 230
}

let data = {
    labels: ['1800','1870'],
    series: [
      [36000, 1000000]
    ]
}

let data1 = {
  labels: ['1911','1921'],
  series: [
    [7.72, 8.61]
  ]
}

let data2 = {
    labels: ['1850','1875', '1890', '1910'],
    series: [
      [56000, 250000, 350000, 600000]
    ]
}

let data3 = {
  labels: ['1950','2017'],
  series: [
    [31000000, 4093000000]
  ]
}

let data4 = {
  labels: ['1923','1929'],
  series: [
    [60000000, 840000000]
  ]
}

let data5 = {
  labels: ['1950','1960'],
  series: [
    [3000000, 55000000]
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

