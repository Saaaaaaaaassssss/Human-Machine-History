import Count from './CountUp.js'
let quoteTime=false
let beginExperience=0
export default class InPageContainer {
    constructor() {
        this.container = document.querySelector('.global-container')
        this.materials = document.querySelector('.materials-1')
        this.picture = document.querySelector('.template-picture-1')
        this.explaination = document.querySelector('.explaination-1')
        this.title = document.querySelector('.date-title-1')
        this.text = document.querySelector('.text-1')
        this.text2 = document.querySelector('.text-2')
        this.button = document.querySelector('.button')
        this.time = document.querySelector('.title-1')
        this.chart = document.querySelector('.ct-chart-1')
        this.animatedNumber = document.querySelector('.number-1')
        this.animatedNumber2 = document.querySelector('.number-2')
        this.quoteBlock = document.querySelector('.quote')
        this.quoteText = document.querySelector('.quote-text')
        this.state = true
        this.currentContents = 1
        this.currentPannels = 0
        this.count = new Count()
        this.changingCurrentsMaterials()
    }

    changingCurrentsMaterials() {
        this.button.addEventListener('click', () => {
            if(this.currentPannels===0) {
                this.picture.style.transition = '0.4s ease-in-out'
                this.picture.style.transform = 'translateX(-100%) translateY(30%) scale(0.9)'
                this.explaination.style.transition = 'all 0.3s ease-in-out'
                this.explaination.style.transform = 'translateX(130%) translateY(17.5%)'

                if(this.currentContents === 1) {
                    window.setTimeout(() => {
                        this.removingContents(this.materials, this.picture)  
                        this.removingContents(this.materials, this.explaination)
                        this.picture.setAttribute('src', '../assets/picture/train.png')
                        this.text.innerHTML = "Les machines à vapeur, et la locomotive, révolutionnèrent la façon dont l'Homme pensait son environnement proche, et sa manière de commercer."
                        this.title.innerHTML = 'Locomotive'
                        this.animatedNumber.style.display='none'
                        this.addingContents(this.materials, this.picture)
                        this.addingContents(this.materials, this.explaination)
                    }, 400)

                    window.setTimeout(() => {
                        chartDraw(data2)
                        this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                        this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                        this.currentContents=2
                    }, 600)
                }

                if(this.currentContents === 2) {
                    window.setTimeout(() => {
                        this.removingContents(this.materials, this.picture)
                        this.removingContents(this.materials, this.explaination)
                        this.picture.setAttribute('src', '../assets/picture/puit.png')
                        this.text.innerHTML = "C'est la différence de salaire en pourcentage entre les ouvriers de chez Ford et les autres. Les lignes de montage vues par Ford n'a pas seulement permis d'augmenter la productivité, elles ont aussi permis aux ouvriers d'augmenter leur pouvoir d'achat."
                        this.title.innerHTML = 'Industries'
                        this.animatedNumber.style.display='block'
                        this.count.upingNumbers(150)
                        this.addingContents(this.materials, this.picture)
                        this.addingContents(this.materials, this.explaination)
                    }, 400)

                    window.setTimeout(() => {
                        chartDraw(data2)
                        this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                        this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                        this.currentContents=3
                        quoteTime=true
                        this.currentPannels=1
                    }, 600)
                }
            }

            if(quoteTime===true) {
                this.quoteBlock.style.display='flex'
                this.materials.style.transform='scale(3)'
                this.materials.style.opacity='0'

                if(this.currentContents===3) {
                    this.quoteText.innerHTML="Les deux guerres mondiales ont changé drastiquement la relation entre les hommes et les machines. L’arrivée des chars et des avions, ainsi que les prémices de l’informatique, initièrent ce mouvement. <br> <br>Ces progrès aggravèrent ces conflits et les rendirent meurtriers. Malgré cela, ils permirent aux hommes de profiter de boom économiques et de faciliter leur quotidien."
                }

                if(this.currentContents===6) {
                    this.quoteText.innerHTML="Après les deux guerres mondiales, les avancées technologiques émises pendant ces conflits arrivèrent dans le domaine civil. <br> <br> Par exemple, les progrès dans le domaine de l’aéronautique facilitèrent les échanges et les déplacements des hommes dans le monde. Cependant, ces progrès créerent plus de problèmes environnementaux, notamment de pollution."
                }

                if (this.currentContents===8) {
                    this.quoteText.innerHTML="L’utilisation des machines (radio, télévision) permis aux médias d’agrandir leur audience et in fine, leur impact. <br> <br> Leur impact économique fut énorme car ces nouveaux supports révolutionnèrent le marketing et la publicité, incitant à la consommation de masse, qui apparut durant les Trente Glorieuses. Malgré cela, ces outils permirent aussi de créer un différent type de propagande, néfaste aux libertés fondamentales de l’Homme."
                }
                if (this.currentContents===10) {
                    this.quoteText.innerHTML="La robotique et l'intelligence artificielle prennent une part de plus en plus conséquente dans les économies aujourd'hui. Cette tendance devrait s’accélérer avec l’arrivée de machines de plus en plus autonomes, intelligentes et interconnectées, les robots. Le rôle de l’homme devrait alors se limiter au contrôle, à la surveillance et à la maintenance de ces machines. <br> Comment vont s'affirmer ces technologiques dans le modèle économique de demain ?"
                }

                window.setTimeout(() => {
                    this.quoteBlock.style.opacity='1'
                }, 50)
            }

            if(this.currentPannels===1 && quoteTime===false) {
                this.picture.style.transition = '0.4s ease-in-out'
                this.picture.style.transform = 'translateX(-100%) translateY(20%) scale(0.9)'
                this.explaination.style.transition = 'all 0.3s ease-in-out'
                this.explaination.style.transform = 'translateX(130%) translateY(17.5%)'

                if(this.currentContents===4) {
                   window.setTimeout(() => {
                       this.removingContents(this.materials, this.picture)
                       this.removingContents(this.materials, this.explaination)
                       this.picture.setAttribute('src', '../assets/picture/avionGuerre.png')
                       this.text.innerHTML = "L’apparition et l’avancée technologique de l’aviation transforma profondément les échanges et les combats au cours du XXème siècle.     L’impact économique en fut d’autant plus grand."
                       this.title.innerHTML = 'Aviation civile'
                       this.addingContents(this.materials, this.picture)
                       this.addingContents(this.materials, this.explaination)
                   }, 400)

                   window.setTimeout(() => {
                       this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                       this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                       this.currentContents=5
                   }, 600)
                }

                if(this.currentContents===4) {
                   window.setTimeout(() => {
                       this.removingContents(this.materials, this.picture)
                       this.removingContents(this.materials, this.explaination)
                       this.picture.setAttribute('src', '../assets/picture/avionGuerre.png')
                       this.text.innerHTML = "L’apparition et l’avancée technologique de l’aviation transforma profondément les échanges et les combats au cours du XXème siècle.     L’impact économique en fut d’autant plus grand."
                       this.title.innerHTML = 'Aviation'
                       this.addingContents(this.materials, this.picture)
                       this.addingContents(this.materials, this.explaination)
                   }, 400)
                   window.setTimeout(() => {
                       this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                       this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                       this.currentContents=5
                   }, 600)
                }

                if(this.currentContents===5) {
                   window.setTimeout(() => {
                       this.removingContents(this.materials, this.picture)
                       this.removingContents(this.materials, this.explaination)
                       this.picture.setAttribute('src', '../assets/picture/enigma.png')
                       this.animatedNumber.style.display='block'
                       this.count.upingNumbers(5000)
                       this.text.innerHTML = "opérations par seconde. C'est ce qu'était capable d'effectuer Collossus, une machine parue à la même période que Bombe, qui a été utilisé pour décrypter Enigma. La Seconde Guerre Mondiale a permis à l'informatique de prendre son envol, portée par l'effort de guerre, et la cryptographie."
                       this.title.innerHTML = `L'électronique`
                       this.addingContents(this.materials, this.picture)
                       this.addingContents(this.materials, this.explaination)
                   }, 400)

                   window.setTimeout(() => {
                       this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                       this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                       this.currentContents=6
                       this.currentPannels=2
                   }, 600)
                   quoteTime=true
                }       
            }

            if(quoteTime===false) {
                this.picture.style.transition = '0.4s ease-in-out'
                this.picture.style.transform = 'translateX(-100%) translateY(20%) scale(0.9)'
                this.explaination.style.transition = 'all 0.3s ease-in-out'
                this.explaination.style.transform = 'translateX(130%) translateY(17.5%)'

                if(this.currentContents===7) {
                   window.setTimeout(() => {
                       this.removingContents(this.materials, this.picture)
                       this.removingContents(this.materials, this.explaination)
                       this.picture.setAttribute('src', '../assets/picture/avionCargo.png')
                       this.animatedNumber.style.display='block'
                       this.count.upingNumbers(62000)
                       this.text.innerHTML = " tonnes, c'est la quantité de fret aérien transportée en 2017.Cela représente 95,9 milliards de $."
                       this.title.innerHTML = 'Aviation'
                       this.addingContents(this.materials, this.picture)
                       this.addingContents(this.materials, this.explaination)
                   }, 400)

                   window.setTimeout(() => {
                       this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                       this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                       this.currentContents=8
                       this.currentPannels=3
                   }, 600)
                   quoteTime=true      
                }

                if(this.currentContents===9) {
                   window.setTimeout(() => {
                       this.removingContents(this.materials, this.picture)
                       this.removingContents(this.materials, this.explaination)
                       this.picture.setAttribute('src', '../assets/picture/television.png')
                       this.animatedNumber.style.display='none'
                       this.title.innerHTML = 'Télévision'
                       this.text.innerHTML="placeholder en attendant le deuxième graph"
                       this.addingContents(this.materials, this.picture)
                       this.addingContents(this.materials, this.explaination)
                       chartDraw(data5)
                   }, 400)

                   window.setTimeout(() => {
                       this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                       this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                       this.currentContents=10
                       this.currentPannels=4
                   }, 600)
                   quoteTime=true      
                }

                if(this.currentContents===11) {
                   window.setTimeout(() => {
                       this.removingContents(this.materials, this.picture)
                       this.removingContents(this.materials, this.explaination)
                       this.picture.setAttribute('src', '../assets/picture/planete2.png')
                       this.animatedNumber.style.display='block'
                       this.count.upingNumbers(10)
                       this.picture.setAttribute('src', '../assets/picture/planete2.png')
                       this.text.innerHTML = "pourcents de moins, c'est en moyenne la différence de prix entre un produit acheté en ligne ou dans un magasin physique. Internet contribue au pouvoir d'achat de ses utilisateurs."
                       this.title.innerHTML = `Internet dans l'économie`
                       this.addingContents(this.materials, this.picture)
                       this.addingContents(this.materials, this.explaination)
                   }, 400)

                   window.setTimeout(() => {
                       this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                       this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                       this.currentContents=12
                       this.currentPannels=5
                   }, 600)
                   quoteTime=true      
                }

                if(this.currentContents===12) {
                   window.setTimeout(() => {
                       this.removingContents(this.materials, this.picture)
                       this.removingContents(this.materials, this.explaination)
                       this.picture.setAttribute('src', '../assets/picture/planete2.png')
                       this.animatedNumber.style.display='block'
                       this.title.innerHTML = `L'IA`
                       this.count.upingNumbers(61)
                       this.picture.setAttribute('src', '../assets/picture/future.png')
                       this.text.innerHTML = `pourcents des entreprises utilisent l'intelligence artificielle pour identifier des opportunités qu'ils auraient probablement ratés.`
                       this.addingContents(this.materials, this.picture)
                       this.addingContents(this.materials, this.explaination)
                   }, 400)

                   window.setTimeout(() => {
                       this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                       this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                       this.currentContents=13
                       this.currentPannels=6
                   }, 600)
                   quoteTime=true      
                }
            }
        })


        this.quoteBlock.addEventListener('click', () => {
            if(beginExperience===0) {
                this.quoteText.style.opacity="0"

                window.setTimeout(() => {
                    this.quoteText.innerHTML="Comment la relation Homme et la machine s'est-elle articulée au fil des ciels dans les économies humaines ?"
                    this.quoteText.style.opacity= '1'
                    beginExperience=1
                }, 300)
            }

            if(beginExperience===1) {
                this.quoteText.style.opacity= '0'

                window.setTimeout(() => {
                    this.quoteText.innerHTML="La révolution industrielle a vu le jour en Angleterre à la fin du XVIIIe siècle avec la machine à vapeur mise au point par James Watt et a conduit au début du machinisme. L’industrie textile a ainsi pu se développer, passant d’une production artisanale à une production mécanisée. <br> <br> Cela a permis d’augmenter le rendement et de faire baisser les coûts de production. L’homme maîtrisait alors la machine et l’utilisait selon ses propres méthodes pour transformer la matière première et maximiser son savoir-faire."
                    this.quoteText.style.opacity="1"
                    beginExperience=2
                }, 300)            
            }

            if(beginExperience===2) {
                this.quoteBlock.style.opacity='0'

                window.setTimeout(() => {
                    this.materials.style.transform='scale(1)'
                    this.materials.style.opacity='1'
                }, 300)    

                window.setTimeout(() => {
                    this.quoteBlock.style.display="none"
                    beginExperience=3
                }, 500)            
            }

            if(this.currentContents===3) {
                this.materials.style.transform='scale(0)'
                this.quoteBlock.style.opacity='0'
                this.time.innerHTML='Guerres'
                this.currentContents=4
                this.animatedNumber.style.display='none'

                window.setTimeout(() => {
                    this.removingContents(this.materials, this.picture)  
                    this.removingContents(this.materials, this.explaination)
                    this.picture.setAttribute('src', '../assets/picture/tank.png')
                    this.text.innerHTML = "L'introduction des chars durant la Première Guerre Mondiale changea drastiquement les rapports entre l'Homme et la machine."
                    this.title.innerHTML = 'Chars'
                    this.addingContents(this.materials, this.picture)
                    this.addingContents(this.materials, this.explaination)
                    this.materials.style.transform='scale(1)'
                    this.materials.style.opacity='1'
                }, 300)

                window.setTimeout(() => {
                    this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                    this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                }, 600)

                window.setTimeout(() => {
                    this.quoteBlock.style.display='none'
                }, 500)
            }

            if(this.currentContents===6) {
                this.materials.style.transform='scale(0)'
                this.quoteBlock.style.opacity='0'
                this.time.innerHTML='Retombées technologiques'
                this.currentContents=7

                window.setTimeout(() => {
                    this.removingContents(this.materials, this.picture)  
                    this.removingContents(this.materials, this.explaination)
                    this.animatedNumber.style.display='block'
                    this.count.upingNumbers(2700)
                    this.picture.setAttribute('src', '../assets/picture/avionCivile.png')
                    this.text.innerHTML = "milliards de $, c'est la valeur créée directement et indirectement par le secteur de l'aviation en 2016, soit 3,6% du PIB mondial."
                    this.title.innerHTML = 'Aviation civile'
                    this.addingContents(this.materials, this.picture)
                    this.addingContents(this.materials, this.explaination)
                    this.materials.style.transform='scale(1)'
                    this.materials.style.opacity='1'
                    chartDraw(data3)
                    this.container.style.backgroundImage = "url('../assets/picture/backgroundNuage.png')" 
                }, 300)

                window.setTimeout(() => {
                    this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                    this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                }, 600)

                window.setTimeout(() => {
                    this.quoteBlock.style.display='none'
                }, 500)
            }

            if(this.currentContents===8) {
                this.materials.style.transform='scale(0)'
                this.quoteBlock.style.opacity='0'
                this.time.innerHTML='Médias'
                this.currentContents=9

                window.setTimeout(() => {
                    this.removingContents(this.materials, this.picture)  
                    this.removingContents(this.materials, this.explaination)
                    this.animatedNumber.style.display='block'
                    this.count.upingNumbers(400000000)
                    this.picture.setAttribute('src', '../assets/picture/radio.png')
                    this.text.innerHTML = "dollars, c'est le montant dépensé dans des publicités radiophoniques en 1949, créant des milliers d'emplois dans le secteur. La radio révolutionna les codes du marketing, offrant un support de communication de masse."
                    this.title.innerHTML = 'Radio'
                    this.addingContents(this.materials, this.picture)
                    this.addingContents(this.materials, this.explaination)
                    this.materials.style.transform='scale(1)'
                    this.materials.style.opacity='1'
                    chartDraw(data4)
                    this.container.style.backgroundImage = "url('../assets/picture/background.png')" 
                }, 300)

                window.setTimeout(() => {
                    this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                    this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                }, 600)

                window.setTimeout(() => {
                    this.quoteBlock.style.display='none'
                }, 500)
            }
            quoteTime=false

            if(this.currentContents===10) {
                this.materials.style.transform='scale(0)'
                this.quoteBlock.style.opacity='0'
                this.time.innerHTML='Internet'
                this.currentContents=11

                window.setTimeout(() => {
                    this.removingContents(this.materials, this.picture)  
                    this.removingContents(this.materials, this.explaination)
                    this.picture.setAttribute('src', '../assets/picture/planete1.png')
                    this.animatedNumber.style.display='block'
                    this.count.upingNumbers(21)
                    this.text.innerHTML = "pourcents de l'augmentation du PIB dans les économies matures découle d'Internet. C'est aujourd'hui un des secteurs qui recrute le plus."
                    this.title.innerHTML = `Internet dans l'économie`
                    this.addingContents(this.materials, this.picture)
                    this.addingContents(this.materials, this.explaination)
                    this.materials.style.transform='scale(1)'
                    this.materials.style.opacity='1'
                }, 300)

                window.setTimeout(() => {
                    this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                    this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                }, 600)

                window.setTimeout(() => {
                    this.quoteBlock.style.display='none'
                }, 500)
            }
            quoteTime=false

            if(this.currentContents===11) {
                this.materials.style.transform='scale(0)'
                this.quoteBlock.style.opacity='0'
                this.time.innerHTML='Et maintenant ?'
                this.currentContents=12

                window.setTimeout(() => {
                    this.removingContents(this.materials, this.picture)  
                    this.removingContents(this.materials, this.explaination)
                    this.picture.setAttribute('src', '../assets/picture/future.png')
                    this.animatedNumber.style.display='block'
                    this.count.upingNumbers(55)
                    this.text.innerHTML = "milliards d'euros. C'est ce que devrait valoir le marché de la robotique en 2025. L'utilisation de la robotique dans le domaine médical devrait augmenter de 50% en 2019."
                    this.title.innerHTML = `La robotique`
                    this.addingContents(this.materials, this.picture)
                    this.addingContents(this.materials, this.explaination)
                    this.materials.style.transform='scale(1)'
                    this.materials.style.opacity='1'
                }, 300)

                window.setTimeout(() => {
                    this.picture.style.transform = 'translateX(-5%) translateY(20%) scale(0.9)'
                    this.explaination.style.transform = 'translateX(0%) translateY(17.5%)'
                }, 600)

                window.setTimeout(() => {
                    this.quoteBlock.style.display='none'
                }, 500)
            }
            quoteTime=false
        })
    }

    removingContents(_parent, _child) {
        _parent.removeChild(_child)
    } 

    addingContents(_parent, _child) {
        _parent.appendChild(_child)
    }
}
