export default class Count {
    constructor() {
        this.number = document.querySelector('.number-1')
        this.number2 = document.querySelector('.number-2')

        this.upingNumbers()
    }

    upingNumbers(_value) {
        let options = {
              useEasing: true, 
              useGrouping: true
        }
        
        let countAnim = new CountUp(this.number, 0, _value, 0, 3, options)
        countAnim.start()
    }

    upingNumbers2(_value2) {
        let options2 = {
            useEasing: true,
            useGrouping: true
        }

        let countAnim2 = new CountUp(this.number2, 0, _value2, 0, 3, options2)
        countAnim2.start()
    }
}





