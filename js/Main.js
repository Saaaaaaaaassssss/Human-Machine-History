export default class Main {
    constructor() {
        this.bigContainer = document.querySelector('.global-container')
        this.littleContainer = document.querySelector('.little-container')

        const loop = () => {
            window.requestAnimationFrame(loop)

        }
        loop()
    }

    zoom() {
        this.bigContainer.addEventListener('click', () => {
            this.littleContainer.style.transform = 'scale(20)'

            window.setTimeout(() => {
                this.bigContainer.removeChild(this.littleContainer)

                window.setTimeout(() => {
                    this.bigContainer.appendChild(this.littleContainer)
                    this.littleContainer.style.transform = 'scale(1)'
                }, 1000)
            }, 1000)
        })
    }
}    
