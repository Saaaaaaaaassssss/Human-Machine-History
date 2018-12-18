let data = {
    labels: ['1870','1880', '1890', '1900'],
    series: [
      [9, 16, 36, 63]
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


let chartDraw = (_data) =>
{
  new Chartist.Line('.ct-chart-1', _data)

}


new Chartist.Line('.ct-chart-1', data)


