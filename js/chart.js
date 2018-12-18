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

new Chartist.Line('.ct-chart-1', data)


