const materialsOne = document.querySelector('.materials-1')

let data = {
    labels: ['1870','1880', '1890', '1900'],
    series: [
      [9, 16, 36, 63]
    ]
}
new Chartist.Line('.ct-chart-1', data, )