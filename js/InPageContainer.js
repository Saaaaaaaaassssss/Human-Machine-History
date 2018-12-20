import Count from "./CountUp.js"

export default class InPageContainer {
	constructor() {
		this.container = document.querySelector(".global-container")
		this.materials = document.querySelector(".materials-1")
		this.picture = document.querySelector(".template-picture-1")
		this.explaination = document.querySelector(".explaination-1")
		this.title = document.querySelector(".date-title-1")
		this.text = document.querySelector(".text-1")
		this.text2 = document.querySelector(".text-2")
		this.button = document.querySelector(".button")
		this.time = document.querySelector(".title-1")
		this.chart = document.querySelector(".ct-chart-1")
		this.chart2 = document.querySelector(".ct-chart-2")
		this.animatedNumber = document.querySelector(".number-1")
		this.animatedNumber2 = document.querySelector(".number-2")
		this.quoteBlock = document.querySelector(".quote")
		this.quoteText = document.querySelector(".quote-text")
		this.comments = document.querySelector(".comments")
		this.sourcesButton = document.querySelector(".sources-button")
		this.sources = document.querySelector(".sources")
		this.sourcesExitButton = document.querySelector(".sources-exit")
		this.menuButton = document.querySelector(".menu-button")
		this.menu = document.querySelector(".menu-flex")
		this.menuSlider1 = document.querySelector(".menu-slider-1")
		this.menuSlider2 = document.querySelector(".menu-slider-2")
		this.menuSlider3 = document.querySelector(".menu-slider-3")
		this.menuSlider4 = document.querySelector(".menu-slider-4")
		this.menuSlider5 = document.querySelector(".menu-slider-5")
		this.menuSlider6 = document.querySelector(".menu-slider-6")
		this.sound1 = new Audio("../assets/songs/telegraphe.mp3")
		this.sound2 = new Audio("../assets/songs/locomotive.mp3")
		this.sound3 = new Audio("../assets/songs/industries2.mp3")
		this.sound4 = new Audio("../assets/songs/chars.mp3")
		this.sound5 = new Audio("../assets/songs/avion2.mp3")
		this.sound6 = new Audio("../assets/songs/enigma.mp3")
		this.sound7 = new Audio("../assets/songs/avioncivil.mp3")
		this.sound8 = new Audio("../assets/songs/radio.mp3")
		this.sound9 = new Audio("../assets/songs/television.mp3")
		this.sound10 = new Audio("../assets/songs/internet.mp3")
		this.sound11 = new Audio("../assets/songs/robotique.mp3")
		this.sound11.volume = 0.4
		this.sound12 = new Audio("../assets/songs/ai.mp3")
		this.volumeButton = document.querySelector(".sound-button")
		this.state = true
		this.currentContents = 1
		this.currentPannels = 0
		this.quoteTime = false
		this.beginExperience = 0
		this.count = new Count()
		this.changingCurrentsMaterials()
		this.muted = false
		this.menuOpen = false
		this.image1 = new Image ("../assets/picture/avionCargo.png")
	}

	changingCurrentsMaterials() {
		this.button.addEventListener("click", () => {
			if (this.currentPannels === 0) {
				this.picture.style.transition = "0.4s ease-in-out"
				this.picture.style.transform =
					"translateX(-100%) translateY(30%) scale(0.9)"
				this.explaination.style.transition = "all 0.3s ease-in-out"
				this.explaination.style.transform =
					"translateX(130%) translateY(17.5%)"

				if (this.currentContents === 1) {
					window.setTimeout(() => {
						this.removingContents(this.materials, this.picture)
						this.removingContents(this.materials, this.explaination)
						this.picture.setAttribute("src", "../assets/picture/train.png")
						this.text.innerHTML =
							"La croissance des chemins de fer a entraîné une forte augmentation de la mobilité humaine et favorisé la croissance urbaine mais de façon assez localisée."
						this.title.innerHTML = "Chemin de fer"
						this.time.innerHTML = "Révolution industrielle"
						this.animatedNumber.style.display = "none"
						this.animatedNumber2.style.display = "none"
						this.chart.style.display = "block"
						this.chart2.style.display = "none"
						this.text2.style.display = "none"
						this.text.style.display = "block"
						this.comments.innerHTML =
							"Nombre d'employés du secteur ferroviaire en France, en milliers."
						this.comments.style.display = "block"
						this.songStop(this.sound1)
						this.songStart(this.sound2)
						this.addingContents(this.materials, this.picture)
						this.addingContents(this.materials, this.explaination)
					}, 400)

					window.setTimeout(() => {
						chartDraw(data2)
						this.picture.style.transform =
							"translateX(-5%) translateY(20%) scale(0.9)"
						this.explaination.style.transform =
							"translateX(0%) translateY(17.5%)"
						this.currentContents = 2
					}, 600)
				}

				if (this.currentContents === 2) {
					window.setTimeout(() => {
						this.removingContents(this.materials, this.picture)
						this.removingContents(this.materials, this.explaination)
						this.picture.setAttribute("src", "../assets/picture/puit.png")
						this.text.innerHTML =
							"pour cent, cela représente l’augmentation du salaire des ouvriers après l’arrivée du fordisme en 1908."
						this.title.innerHTML = "Industries"
						this.time.innerHTML = "Révolution industrielle"
						this.animatedNumber.style.display = "block"
						this.animatedNumber2.style.display = "block"
						this.text.style.display = "block"
						this.text2.style.display = "block"
						this.chart.style.display = "none"
						this.chart2.style.display = "none"
						this.comments.style.display = "none"
						this.count.upingNumbers(150)
						this.count.upingNumbers2(1000000)
						this.chart.style.display = "none"
						this.text2.innerHTML =
							"C’est l’augmentation du nombre de femmes faisant partie de la population active française entre 1911 et 1921 (7,72 millions à 8,71 millions)."
						this.text2.style.display = "block"
						this.comments.style.display = "none"
						this.songStart(this.sound3)
						this.songStop(this.sound2)
						this.addingContents(this.materials, this.picture)
						this.addingContents(this.materials, this.explaination)
					}, 400)

					window.setTimeout(() => {
						this.picture.style.transform =
							"translateX(-5%) translateY(20%) scale(0.9)"
						this.explaination.style.transform =
							"translateX(0%) translateY(17.5%)"
						this.currentContents = 3
						this.quoteTime = true
						this.currentPannels = 1
						chartDraw(data1)
					}, 600)
				}
			}

			if (this.quoteTime === true) {
				this.quoteTimeGenerator()
			}

			if (this.currentPannels === 1 && this.quoteTime === false) {
				this.picture.style.transition = "0.4s ease-in-out"
				this.picture.style.transform =
					"translateX(-100%) translateY(20%) scale(0.9)"
				this.explaination.style.transition = "all 0.3s ease-in-out"
				this.explaination.style.transform =
					"translateX(130%) translateY(17.5%)"

				if (this.currentContents === 4) {
					window.setTimeout(() => {
						this.removingContents(this.materials, this.picture)
						this.removingContents(this.materials, this.explaination)
						this.picture.setAttribute(
							"src",
							"../assets/picture/avionGuerre.png"
						)
						this.count.upingNumbers2(811814)
						this.text.innerHTML =
							"L’industrie française employait 25 % des actifs en 1850, puis a vu sa part croître pendant la période fordiste pour atteindre près de 35 % en 1930."
						this.text2.innerHTML =
							"Cela représente le nombre d’avions produits durant la Seconde Guerre Mondiale."
						this.title.innerHTML = "Aviation militaire"
						this.time.innerHTML = "Guerres"
						this.chart.style.display = "none"
						this.chart2.style.display = "none"
						this.text.style.display = "block"
						this.text2.style.display = "block"
						this.animatedNumber.style.display = "none"
						this.animatedNumber2.style.display = "block"
						this.comments.style.display = "none"
						this.songStart(this.sound5)
						this.songStop(this.sound4)
						this.addingContents(this.materials, this.picture)
						this.addingContents(this.materials, this.explaination)
					}, 400)

					window.setTimeout(() => {
						this.picture.style.transform =
							"translateX(-5%) translateY(20%) scale(0.9)"
						this.explaination.style.transform =
							"translateX(0%) translateY(17.5%)"
						this.currentContents = 5
					}, 600)
				}

				if (this.currentContents === 5) {
					window.setTimeout(() => {
						this.removingContents(this.materials, this.picture)
						this.removingContents(this.materials, this.explaination)
						this.picture.setAttribute("src", "../assets/picture/enigma.png")
						this.count.upingNumbers(5000)
						this.text.innerHTML =
							"opérations par seconde. C'est ce qu'était capable d'effectuer Collossus, une machine parue à la même période que Bombe, qui a été utilisé pour décrypter Enigma. La Seconde Guerre Mondiale a permis à l'informatique de prendre son envol, portée par l'effort de guerre, et la cryptographie."
						this.text2.innerHTML =
							"La Seconde Guerre Mondiale a permis à l'informatique de prendre son envol, portée par l'effort de guerre, et la cryptographie."
						this.title.innerHTML = `Informatique`
						this.time.innerHTML = "Guerres"
						this.chart.style.display = "none"
						this.chart2.style.display = "none"
						this.text.style.display = "block"
						this.text2.style.display = "block"
						this.animatedNumber.style.display = "block"
						this.animatedNumber2.style.display = "none"
						this.comments.style.display = "none"
						this.songStart(this.sound6)
						this.songStop(this.sound5)
						this.addingContents(this.materials, this.picture)
						this.addingContents(this.materials, this.explaination)
					}, 400)

					window.setTimeout(() => {
						this.picture.style.transform =
							"translateX(-5%) translateY(20%) scale(0.9)"
						this.explaination.style.transform =
							"translateX(0%) translateY(17.5%)"
						this.currentContents = 6
						this.currentPannels = 2
					}, 600)
					this.quoteTime = true
				}
			}

			if (this.quoteTime === false) {
				this.picture.style.transition = "0.4s ease-in-out"
				this.picture.style.transform =
					"translateX(-100%) translateY(20%) scale(0.9)"
				this.explaination.style.transition = "all 0.3s ease-in-out"
				this.explaination.style.transform =
					"translateX(130%) translateY(17.5%)"

				if (this.currentContents === 7) {
					window.setTimeout(() => {
						this.removingContents(this.materials, this.picture)
						this.removingContents(this.materials, this.explaination)
						this.picture.setAttribute(
							"src",
							"../assets/picture/avionCargo.png"
						)
						this.animatedNumber.style.display = "block"
						this.animatedNumber2.style.display = "block"
						this.count.upingNumbers(62000)
						this.count.upingNumbers2(10200000)
						this.text.style.display = "block"
						this.text2.style.display = "block"
						this.time.innerHTML = "Retombées scientifiques"
						this.text.innerHTML =
							" tonnes, c’est la quantité de fret aérien transportée en 2017. Cela représentait 95,9 milliards de $."
						this.text2.innerHTML =
							"C’est le nombre de personnes qu'emploie le secteur de l'aviation en 2016."
						this.title.innerHTML = "Aviation de fret"
						this.chart.style.display = "none"
						this.chart2.style.display = "none"
						this.comments.style.display = "none"
						this.addingContents(this.materials, this.picture)
						this.addingContents(this.materials, this.explaination)
					}, 400)

					window.setTimeout(() => {
						this.picture.style.transform =
							"translateX(-5%) translateY(20%) scale(0.9)"
						this.explaination.style.transform =
							"translateX(0%) translateY(17.5%)"
						this.currentContents = 8
						this.currentPannels = 3
					}, 600)
					this.quoteTime = true
				}

				if (this.currentContents === 9) {
					window.setTimeout(() => {
						this.removingContents(this.materials, this.picture)
						this.removingContents(this.materials, this.explaination)
						this.picture.setAttribute(
							"src",
							"../assets/picture/television.png"
						)
						this.animatedNumber.style.display = "none"
						this.count.upingNumbers(200)
						this.title.innerHTML = "Télévision"
						this.time.innerHTML = "Médias"
						this.text.style.display = "block"
						this.text2.style.display = "none"
						this.text.innerHTML =
							"dollars, c'est le prix moyen d'un téléviseur en 1953."
						this.animatedNumber.style.display = "block"
						this.animatedNumber2.style.display = "none"
						this.addingContents(this.materials, this.picture)
						this.addingContents(this.materials, this.explaination)
						chartDraw(data5)
						this.chart.style.display = "block"
						this.chart2.style.display = "none"
						this.comments.style.display = "block"
						this.comments.innerHTML =
							"Nombre d'utilisateurs de télévision aux États-Unis, en millions."
						this.currentContents = 11
						this.songStart(this.sound9)
						this.songStop(this.sound8)
					}, 400)

					window.setTimeout(() => {
						this.picture.style.transform =
							"translateX(-5%) translateY(20%) scale(0.9)"
						this.explaination.style.transform =
							"translateX(0%) translateY(17.5%)"
					}, 600)
				}

				if (this.currentContents === 11) {
					window.setTimeout(() => {
						this.removingContents(this.materials, this.picture)
						this.removingContents(this.materials, this.explaination)
						this.animatedNumber.style.display = "block"
						this.animatedNumber2.style.display = "block"
						this.count.upingNumbers(21)
						this.count.upingNumbers2(22)
						this.picture.setAttribute("src", "../assets/picture/planete1.png")
						this.text.innerHTML =
							"pour cent, elle représente l'augmentation du PIB dans les économies matures qui découle d'Internet. C'est aujourd'hui un des secteurs qui recrute le plus."
						this.text2.innerHTML =
							"milliards de dollars d'échanges ont lieu chaque jour au travers du e-commerce. <br> 10% de moins, c'est en moyenne la différence de prix entre un produit acheté en ligne ou dans un magasin physique."
						this.title.innerHTML = "Internet"
						this.time.innerHTML = "Médias"
						this.chart.style.display = "none"
						this.chart2.style.display = "none"
						this.text.style.display = "block"
						this.text2.style.display = "block"
						this.comments.style.display = "none"
						this.addingContents(this.materials, this.picture)
						this.addingContents(this.materials, this.explaination)
						this.songStart(this.sound10)
						this.songStop(this.sound9)
					}, 400)

					window.setTimeout(() => {
						this.picture.style.transform =
							"translateX(-5%) translateY(20%) scale(0.9)"
						this.explaination.style.transform =
							"translateX(0%) translateY(17.5%)"
						this.currentContents = 12
						this.currentPannels = 4
					}, 600)
					this.quoteTime = true
				}

				if (this.currentContents === 12) {
					window.setTimeout(() => {
						this.removingContents(this.materials, this.picture)
						this.removingContents(this.materials, this.explaination)
						this.animatedNumber.style.display = "block"
						this.animatedNumber2.style.display = "block"
						this.title.innerHTML = `Intelligence artificielle`
						this.time.innerHTML = "Futur"
						this.count.upingNumbers(61)
						this.count.upingNumbers2(150)
						this.picture.setAttribute("src", "../assets/picture/ia.png")
						this.text.innerHTML =
							"pour cent des entreprises utilisent l'intelligence artificielle pour identifier des opportunités qu'ils auraient probablement ratés."
						this.text.style.display = "block"
						this.text2.style.display = "block"
						this.chart.style.display = "none"
						this.chart2.style.display = "none"
						this.comments.style.display = "none"
						this.text2.innerHTML =
							"milliards de $ par an, c'est ce que les applications médicales utilisant l'intelligence artificielle devraient permettre aux Etats-Unis d'économiser d'ici 2026."
						this.addingContents(this.materials, this.picture)
						this.addingContents(this.materials, this.explaination)
						this.songStart(this.sound12)
						this.songStop(this.sound11)
					}, 400)

					window.setTimeout(() => {
						this.picture.style.transform =
							"translateX(-5%) translateY(20%) scale(0.9)"
						this.explaination.style.transform =
							"translateX(0%) translateY(17.5%)"
						this.currentContents = 13
						this.currentPannels = 6
					}, 600)
					this.quoteTime = true
				}
			}
		})

		this.quoteBlock.addEventListener("click", () => {
			if (this.beginExperience === 0) {
				this.quoteText.style.opacity = "0"

				window.setTimeout(() => {
					this.quoteText.innerHTML =
						"Comment la relation Homme et la machine s'est-elle articulée au fil des ciels dans les économies humaines ?"
					this.quoteText.style.opacity = "1"
					this.beginExperience = 1
				}, 300)
			}

			if (this.beginExperience === 1) {
				this.quoteText.style.opacity = "0"

				window.setTimeout(() => {
					this.quoteText.innerHTML =
						"La révolution industrielle a vu le jour en Angleterre à la fin du XVIIIe siècle avec la machine à vapeur mise au point par James Watt et a conduit au début du machinisme. L’industrie textile a ainsi pu se développer, passant d’une production artisanale à une production mécanisée. <br> <br> Cela a permis d’augmenter le rendement et de faire baisser les coûts de production. L’homme maîtrisait alors la machine et l’utilisait selon ses propres méthodes pour transformer la matière première et maximiser son savoir-faire."
					this.quoteText.style.opacity = "1"
					this.beginExperience = 2
				}, 300)
			}

			if (this.beginExperience === 2) {
				this.quoteBlock.style.opacity = "0"

				window.setTimeout(() => {
					this.materials.style.transform = "scale(1)"
					this.materials.style.opacity = "1"
				}, 300)

				window.setTimeout(() => {
					this.quoteBlock.style.display = "none"
					this.animatedNumber.style.display = "block"
					this.count.upingNumbers(50)
					this.beginExperience = 3
					this.songStart(this.sound1)
				}, 500)
			}

			if (this.currentContents === 3) {
				this.materials.style.transform = "scale(0)"
				this.quoteBlock.style.opacity = "0"
				this.time.innerHTML = "Guerres"
				this.currentContents = 4

				window.setTimeout(() => {
					this.removingContents(this.materials, this.picture)
					this.removingContents(this.materials, this.explaination)
					this.picture.setAttribute("src", "../assets/picture/tank.png")
					this.text.innerHTML =
						"Cela représente le nombre de chars produits durant la Seconde Guerre Mondiale. (hors Asie)."
					this.text2.innerHTML =
						"De décembre 1914 à août 1918, le National Bureau of Economic Research enregistrera une période d’expansion de 44 mois qui se traduira par une remarquable décrue du taux de chômage, celui-ci passant de 7,9 % de la population active en 1914 à 1,4 % en 1918."
					this.title.innerHTML = "Chars"
					this.time.innerHTML = "Guerres"
					this.addingContents(this.materials, this.picture)
					this.addingContents(this.materials, this.explaination)
					this.count.upingNumbers(251923)
					this.chart.style.display = "none"
					this.chart2.style.display = "none"
					this.text.style.display = "block"
					this.text2.style.display = "block"
					this.comments.style.display = "none"
					this.animatedNumber.style.display = "block"
					this.animatedNumber2.style.display = "none"
					this.materials.style.transform = "scale(1)"
					this.materials.style.opacity = "1"
					this.songStart(this.sound4)
					this.songStop(this.sound3)
				}, 300)

				window.setTimeout(() => {
					this.picture.style.transform =
						"translateX(-5%) translateY(20%) scale(0.9)"
					this.explaination.style.transform =
						"translateX(0%) translateY(17.5%)"
				}, 600)

				window.setTimeout(() => {
					this.quoteBlock.style.display = "none"
				}, 500)
			}

			if (this.currentContents === 6) {
				this.materials.style.transform = "scale(0)"
				this.quoteBlock.style.opacity = "0"
				this.time.innerHTML = "Retombées scientifiques"
				this.currentContents = 7
				this.container.style.backgroundImage =
					"url('../assets/picture/backgroundNuage.png')"

				window.setTimeout(() => {
					this.removingContents(this.materials, this.picture)
					this.removingContents(this.materials, this.explaination)
					this.animatedNumber.style.display = "block"
					this.animatedNumber2.style.display = "none"
					this.count.upingNumbers(2700)
					this.picture.setAttribute("src", "../assets/picture/avionCivile.png")
					this.text.innerHTML =
						"milliards de $, c'est la valeur créée directement et indirectement par le secteur de l'aviation en 2016, soit 3,6% du PIB mondial."
					this.title.innerHTML = "Aviation civile"
					this.time.innerHTML = "Retombées scientifiques"
					this.chart.style.display = "block"
					this.chart2.style.display = "none"
					this.addingContents(this.materials, this.picture)
					this.addingContents(this.materials, this.explaination)
					this.text.style.display = "block"
					this.text2.style.display = "none"
					this.materials.style.transform = "scale(1)"
					this.materials.style.opacity = "1"
					this.comments.style.display = "block"
					this.comments.innerHTML =
						"Nombre de passagers aériens par an, en millions."
					this.songStart(this.sound7)
				}, 300)

				window.setTimeout(() => {
					chartDraw(data3)
					this.quoteBlock.style.display = "none"
				}, 600)
			}

			if (this.currentContents === 8) {
				this.materials.style.transform = "scale(0)"
				this.quoteBlock.style.opacity = "0"
				this.time.innerHTML = "Médias"
				this.currentContents = 9
				this.container.style.backgroundImage =
					"url('../assets/picture/background.png')"
				window.setTimeout(() => {
					this.removingContents(this.materials, this.picture)
					this.removingContents(this.materials, this.explaination)
					this.animatedNumber.style.display = "block"
					this.animatedNumber2.style.display = "block"
					this.count.upingNumbers(80)
					this.count.upingNumbers2(400000000)
					this.picture.setAttribute("src", "../assets/picture/radio.png")
					this.text.innerHTML =
						"pour cent des foyers des pays développés possèdent une radio en 1950."
					this.text2.innerHTML =
						"dollars, c’est le montant dépensé dans des publicités radiophoniques en 1949, créant des milliers d'emplois dans le secteur. <br> La radio révolutionna les codes du marketing, offrant un support de communication de masse."
					this.title.innerHTML = "Radio"
					this.time.innerHTML = "Médias"
					this.addingContents(this.materials, this.picture)
					this.addingContents(this.materials, this.explaination)
					this.text.style.display = "block"
					this.text2.style.display = "block"
					this.materials.style.transform = "scale(1)"
					this.materials.style.opacity = "1"
					this.chart.style.display = "none"
					this.chart2.style.display = "none"
					this.comments.style.display = "none"
					this.songStart(this.sound8)
				}, 300)

				window.setTimeout(() => {
					this.picture.style.transform =
						"translateX(-5%) translateY(20%) scale(0.9)"
					this.explaination.style.transform =
						"translateX(0%) translateY(17.5%)"
				}, 600)

				window.setTimeout(() => {
					this.quoteBlock.style.display = "none"
				}, 500)
			}
			this.quoteTime = false

			if (this.currentContents === 12) {
				this.materials.style.transform = "scale(0)"
				this.quoteBlock.style.opacity = "0"
				this.time.innerHTML = "Futur"
				this.currentContents = 12

				window.setTimeout(() => {
					this.removingContents(this.materials, this.picture)
					this.removingContents(this.materials, this.explaination)
					this.picture.setAttribute("src", "../assets/picture/future.png")
					this.animatedNumber.style.display = "block"
					this.animatedNumber2.style.display = "block"
					this.count.upingNumbers(55)
					this.text.innerHTML =
						"milliards d'euros. C'est ce que devrait valoir le marché de la robotique en 2025. L'utilisation de la robotique dans le domaine médical devrait augmenter de 50% en 2019."
					this.count.upingNumbers2(50)
					this.text.style.display = "block"
					this.text2.style.display = "block"
					this.text2.innerHTML =
						"pour cent, c'est l'augmentation prévisionnelle de l'utilisation de la robotique dans le domaine médical en 2019."
					this.title.innerHTML = "Robotique"
					this.time.innerHTML = "Futur"
					this.addingContents(this.materials, this.picture)
					this.addingContents(this.materials, this.explaination)
					this.chart.style.display = "none"
					this.chart2.style.display = "none"
					this.comments.style.display = "none"
					this.materials.style.transform = "scale(1)"
					this.materials.style.opacity = "1"
					this.songStart(this.sound11)
				}, 300)

				window.setTimeout(() => {
					this.picture.style.transform =
						"translateX(-5%) translateY(20%) scale(0.9)"
					this.explaination.style.transform =
						"translateX(0%) translateY(17.5%)"
				}, 600)

				window.setTimeout(() => {
					this.quoteBlock.style.display = "none"
				}, 500)
			}
			this.quoteTime = false
		})
		this.sourcesButton.addEventListener("click", () => {
			this.sources.style.display = "flex"
			window.setTimeout(() => {
				this.sources.style.opacity = "1"
			}, 50)
		})
		this.sourcesExitButton.addEventListener("click", () => {
			this.sources.style.opacity = "0"
			window.setTimeout(() => {
				this.sources.style.display = "none"
			}, 300)
		})

		this.volumeButton.addEventListener("click", () => {
			if (this.muted) {
				this.volumeButton.style.opacity = "0"
				this.muted = false
				this.sound1.volume = 1
				this.sound2.volume = 1
				this.sound3.volume = 1
				this.sound4.volume = 1
				this.sound5.volume = 1
				this.sound6.volume = 1
				this.sound7.volume = 1
				this.sound8.volume = 1
				this.sound9.volume = 1
				this.sound10.volume = 0.4
				this.sound11.volume = 1
				this.sound12.volume = 1
				window.setTimeout(() => {
					this.volumeButton.setAttribute(
						"src",
						"../assets/picture/soundUnmuted.svg"
					)
					this.volumeButton.style.opacity = "1"
				}, 100)
			} else {
				this.volumeButton.style.opacity = "0"
				this.muted = true
				this.sound1.volume = 0
				this.sound2.volume = 0
				this.sound3.volume = 0
				this.sound4.volume = 0
				this.sound5.volume = 0
				this.sound6.volume = 0
				this.sound7.volume = 0
				this.sound8.volume = 0
				this.sound9.volume = 0
				this.sound10.volume = 0
				this.sound11.volume = 0
				this.sound12.volume = 0
				window.setTimeout(() => {
					this.volumeButton.setAttribute(
						"src",
						"../assets/picture/soundMuted.svg"
					)
					this.volumeButton.style.opacity = "1"
				}, 100)
			}
		})
		this.menuButton.addEventListener("click", () => {
			if (this.menuOpen) {
				this.menuOpen = false
				this.menu.style.transform = "translateX(-115%)"
				window.setTimeout(() => {
					this.menu.style.display = "none"
				}, 600)
				if (this.currentContents === 7) {
					this.container.style.backgroundImage =
						"url('../assets/picture/backgroundNuage.png')"
				}
			} else {
				this.menuOpen = true
				this.menu.style.display = "flex"
				window.setTimeout(() => {
					this.menu.style.transform = "translateX(0)"
				}, 50)
				window.setTimeout(() => {
					if ((this.menu.style.transform = "translateX(0)")) {
						this.container.style.backgroundImage =
							"url('../assets/picture/background.png')"
					}
				}, 600)
			}
		})

		this.menuSlider1.addEventListener("click", () => {
			this.quoteText.innerHTML =
				"La révolution industrielle a vu le jour en Angleterre à la fin du XVIIIe siècle avec la machine à vapeur mise au point par James Watt et a conduit au début du machinisme. L’industrie textile a ainsi pu se développer, passant d’une production artisanale à une production mécanisée. <br> <br> Cela a permis d’augmenter le rendement et de faire baisser les coûts de production. L’homme maîtrisait alors la machine et l’utilisait selon ses propres méthodes pour transformer la matière première et maximiser son savoir-faire."
			this.currentContents = 1
			this.currentPannels = 0
			this.menu.style.transform = "translateX(-115%)"
			this.beginExperience = 2
			this.quoteTimeGenerator()
			this.picture.setAttribute("src", "../assets/picture/telegraphe.png")
			this.materials.style.transform = "scale(0)"
			this.text.innerHTML =
				"fois plus rapide que les moyens de communication traditionnels. L'arrivée du télégraphe révolutionna les échanges."
			this.title.innerHTML = "Télégraphe"
			this.time.innerHTML = "Révolution industrielle"
			this.animatedNumber.style.display = "block"
			this.animatedNumber2.style.display = "none"
			this.chart.style.display = "block"
			this.chart2.style.display = "none"
			this.count.upingNumbers(50)
			this.text.style.display = "block"
			this.text2.style.display = "none"
			this.comments.style.display = "block"
			this.comments.innerHTML =
				"Nombre de messages envoyés par télégraphe aux États-Unis, en milliers."
			chartDraw(data)
		})

		this.menuSlider2.addEventListener("click", () => {
			this.menu.style.transform = "translateX(-115%)"
			this.currentContents = 3
			this.currentPannels = 1
			this.quoteTimeGenerator()
		})
		this.menuSlider3.addEventListener("click", () => {
			this.menu.style.transform = "translateX(-115%)"
			this.currentContents = 6
			this.currentPannels = 2
			this.quoteTimeGenerator()
		})
		this.menuSlider4.addEventListener("click", () => {
			this.menu.style.transform = "translateX(-115%)"
			this.currentContents = 8
			this.currentPannels = 3
			this.quoteTimeGenerator()
		})
		this.menuSlider5.addEventListener("click", () => {
			this.quoteBlock.style.opacity = "0"
			this.quoteBlock.style.opacity = "0"
			this.stopAllSongs()
			this.menu.style.transform = "translateX(-115%)"
			this.removingContents(this.materials, this.picture)
			this.removingContents(this.materials, this.explaination)
			this.animatedNumber.style.display = "block"
			this.animatedNumber2.style.display = "block"
			this.count.upingNumbers(21)
			this.count.upingNumbers2(22)
			this.picture.setAttribute("src", "../assets/picture/planete1.png")
			this.text.innerHTML =
				"pour cent, elle représente l'augmentation du PIB dans les économies matures qui découle d'Internet. C'est aujourd'hui un des secteurs qui recrute le plus."
			this.text2.innerHTML =
				"milliards de dollars d'échanges ont lieu chaque jour au travers du e-commerce. <br> 10% de moins, c'est en moyenne la différence de prix entre un produit acheté en ligne ou dans un magasin physique."
			this.title.innerHTML = "Internet"
			this.time.innerHTML = "Médias"
			this.chart.style.display = "none"
			this.chart2.style.display = "none"
			this.text.style.display = "block"
			this.text2.style.display = "block"
			this.comments.style.display = "none"
			this.addingContents(this.materials, this.picture)
			this.addingContents(this.materials, this.explaination)
			this.songStart(this.sound10)
			this.currentContents = 12
			this.currentPannels = 4
			this.quoteTime = true
			window.setTimeout(() => {
				this.materials.style.opacity = "1"
				if ((this.materials.style.transform = "scale(0)")) {
					this.materials.style.transform = "scale(1)"
				}
			}, 400)
			window.setTimeout(() => {
				this.quoteBlock.style.display = "none"
			}, 500)
		})
		this.menuSlider6.addEventListener("click", () => {
			this.menu.style.transform = "translateX(-115%)"
			this.currentContents = 12
			this.currentPannels = 6
			this.quoteTimeGenerator()
		})
	}
	stopAllSongs() {
		this.songStop(this.sound1)
		this.songStop(this.sound2)
		this.songStop(this.sound3)
		this.songStop(this.sound4)
		this.songStop(this.sound5)
		this.songStop(this.sound6)
		this.songStop(this.sound7)
		this.songStop(this.sound8)
		this.songStop(this.sound9)
		this.songStop(this.sound10)
		this.songStop(this.sound11)
		this.songStop(this.sound12)
	}
	quoteTimeGenerator() {
		this.quoteBlock.style.display = "flex"
		this.materials.style.transform = "scale(3)"
		this.materials.style.opacity = "0"
		this.stopAllSongs()
		if (this.currentContents === 3) {
			this.quoteText.innerHTML =
				"Les deux guerres mondiales ont changé drastiquement la relation entre les hommes et les machines. L’arrivée des chars et des avions, ainsi que les prémices de l’informatique, initièrent ce mouvement. <br> <br>Ces progrès aggravèrent ces conflits et les rendirent meurtriers. Malgré cela, ils permirent aux hommes de profiter de boom économiques et de faciliter leur quotidien."
		}

		if (this.currentContents === 6) {
			this.quoteText.innerHTML =
				"Après les deux guerres mondiales, les avancées technologiques émises pendant ces conflits arrivèrent dans le domaine civil. <br> <br> Par exemple, les progrès dans le domaine de l’aéronautique facilitèrent les échanges et les déplacements des hommes dans le monde. Cependant, ces progrès créerent plus de problèmes environnementaux, notamment de pollution."
		}

		if (this.currentContents === 8) {
			this.quoteText.innerHTML =
				"L’utilisation des machines (radio, télévision) permis aux médias d’agrandir leur audience et in fine, leur impact. <br> <br> Leur impact économique fut énorme car ces nouveaux supports révolutionnèrent le marketing et la publicité, incitant à la consommation de masse, qui apparut durant les Trente Glorieuses. Malgré cela, ces outils permirent aussi de créer un différent type de propagande, néfaste aux libertés fondamentales de l’Homme."

			window.setTimeout(() => {
				this.animatedNumber2.style.display = "none"
				this.text2.style.display = "none"
			}, 600)
		}
		if (this.currentContents === 12) {
			this.quoteText.innerHTML =
				"La robotique et l'intelligence artificielle prennent une part de plus en plus conséquente dans les économies aujourd'hui. Cette tendance devrait s’accélérer avec l’arrivée de machines de plus en plus autonomes, intelligentes et interconnectées, les robots. <br><br>Le rôle de l’homme devrait alors se limiter au contrôle, à la surveillance et à la maintenance de ces machines. Mais de nombreuses personnes craignent que celles-ci les remplacent dans le monde du travail."
		}
		if (this.currentContents === 13) {
			this.quoteText.innerHTML =
				"Au travers des différentes périodes montrées, nous avons pu voir la collaboration entre l’homme et la machine dans les économies. <br><br>Avec l’arrivée de la robotique et de l’intelligence artificielle, le marché du travail se trouvera bouleversé.<br><br>Mais une question reste en suspens. Comment vont s'affirmer ces technologies dans le modèle économique de demain ? Vont-elles tout simplement effacer le travail humain ? Ou au contraire, vont-elles contribuées à l’essor de nouveaux métiers, au détriment d’autres ?"
			this.menu.style.zIndex = "9"
			this.menuButton.style.display = "block"
			this.menuButton.style.zIndex = "10"
			this.materials.style.transform = "scale(0)"
		}

		window.setTimeout(() => {
			this.quoteBlock.style.opacity = "1"
		}, 50)
	}

	removingContents(_parent, _child) {
		_parent.removeChild(_child)
	}

	addingContents(_parent, _child) {
		_parent.appendChild(_child)
	}

	songStart(_launchAudio) {
		_launchAudio.play()
	}

	songStop(_launchAudio) {
		_launchAudio.pause()
		_launchAudio.currentTime = 0
	}
}
