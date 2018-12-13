export default class InPageContainer {
    constructor() {
        this.materials = document.querySelector('.materials')
        this.round = document.querySelector('.round')
        this.picture = document.querySelector('.template-picture')
        this.explaination = document.querySelector('.explaination')
        this.title = document.querySelector('.date-title')
        this.text = document.querySelector('.text')
        this.button = document.querySelector('.button')

        this.removingCurrentMaterials()
    }

    removingCurrentMaterials() {
        this.button.addEventListener('click', () => {
            this.picture.style.transition = '0.4s ease-in-out'
            this.picture.style.transform = 'translateX(-115%) translateY(47.5%)'
            this.picture.style.opacity = '0'
            this.removingContents(this.materials, this.picture)

            this.round.style.transition = '0.4s ease-in-out 0.2s'
            this.round.style.transform = 'translateX(-130%) translateY(10%)'
            this.round.style.opacity = '0'
            this.removingContents(this.materials, this.round)

            this.title.style.transition = '0.4s ease-in-out 0.1s'
            this.title.style.transform = 'translateX(70%)'
            this.title.style.opacity = '0'
            this.removingContents(this.explaination, this.title)

            this.text.style.transition = '0.4s ease-in-out 0.2s'
            this.text.style.transform = 'translateX(90%)'
            this.text.style.opacity = '0'
            this.removingContents(this.explaination, this.text)

            this.button.style.transition = '0.4s ease-in-out'
            this.button.style.transform = 'translateX(110%) translateY(65%)'
            this.button.style.opacity = '0'
            this.removingContents(this.explaination, this.button)
        })
    }

    removingContents(parent, child) {
        window.setTimeout(() => {
            if(child.style.opacity = '0') {
                parent.removeChild(child)
            }
        }, 400)
    }
}