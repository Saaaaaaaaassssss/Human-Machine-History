export default class Count {
    constructor() {
        this.number = document.querySelector('.number-1')

        this.upingNumbers()
    }

    upingNumbers() {
        let options = {
              useEasing: true, 
              useGrouping: true
        }
        
        let countAnim = new CountUp(this.number, 0, 50, 0, 3, options)
        if (!countAnim.error) {
            countAnim.start()
        } else {
            console.error(countAnim.error)
        }
    }
}





