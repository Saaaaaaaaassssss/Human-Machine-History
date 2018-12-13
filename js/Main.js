export default class Main {
    constructor() {
        this.bigContainer = document.querySelector('.global-container')
        this.littleContainer = document.querySelector('.little-container')

        this.zoom()
    }

    zoom() {
        this.littleContainer.addEventListener('click', () => {
            this.littleContainer.style.transform = 'scale(20)'
            this.littleContainer.style.opacity = '0'
            console.log('oui')

            window.setTimeout(() => {
                this.bigContainer.removeChild(this.littleContainer)

                window.setTimeout(() => {
                    this.bigContainer.appendChild(this.littleContainer)
                    this.littleContainer.style.transform = 'scale(1)'
                    this.littleContainer.style.opacity = '1'
                }, 1000)
            }, 1000)
        })
    }
}    
