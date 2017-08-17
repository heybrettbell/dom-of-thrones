function scene3() {

  // Setup Stage
  stage = document.querySelector('#stage');
  desert = document.querySelector('#desert');
  stageImg = stage.querySelector('#stage-img');
  desertImgSrc = desert.getAttribute('src');
  stageImg.setAttribute('src', desertImgSrc);


  // Setup Cast

  // Danerys Stormborn
    danyContainer = document.createElement('div')
    danyContainer.id = "dany-container"
    stage.append(danyContainer)
    danyContainer.style.position = 'absolute'
    danyContainer.style.width = '10%'
    danyContainer.style.height = '44%'
    danyContainer.style.top = '55%'
    danyContainer.style.left = '25%'

    dany = document.querySelector('#danerys')
    danyContainer.append(dany)
    danerys.style.position = 'absolute'
    danerys.style.top = 0

    dress = document.querySelector('#blue-dress')
    danyContainer.append(dress)
    dress.style.position = 'absolute'
    dress.style.bottom = 0

  // Khal Drogo
    drogoContainer = document.createElement('div')
    drogoContainer.id = 'drogo-container'
    stage.append(drogoContainer)
    drogoContainer.style.width = '12%'
    drogoContainer.style.position = 'absolute'
    drogoContainer.style.height = '31%'
    drogoContainer.style.top = '67%'
    drogoContainer.style.left = '56%'


    drogo = document.querySelector('#drogo')
    drogoContainer.append(drogo)
    drogo.style.width = '75%'
    drogo.style.position = 'absolute'
    drogo.style.left = '14%'
    drogo.style.bottom = '93%'

    getSwoll = document.querySelector('#bulky-man')
    drogoContainer.append(getSwoll)
    getSwoll.style.position = 'absolute'
    getSwoll.style.bottom = 0

  // Setup Props
    egg = document.querySelector('#egg')
    stage.append(egg)
    egg.style.position = 'absolute'
    egg.style.top = '77%'
    egg.style.left = '31%'
    egg.style.height = '10%'

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '77%'
    egg.style.left = '31%'
    egg.style.transform = 'rotateZ(220deg)'
    })

  frame(function() {
    egg.style.top = '74%'
    egg.style.left = '36%'
    egg.style.transform = 'rotateZ(140deg)'
    })

  frame(function() {
    egg.style.top = '71%'
    egg.style.left = '41%'
    egg.style.transform = 'rotateZ(220deg)'
    })

  frame(function() {
    egg.style.top = '68%'
    egg.style.left = '47%'
    egg.style.transform = 'rotateZ(180deg)'
    })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left = '53%'
    egg.style.transform = 'rotateZ(100deg)'
    })

  frame(function() {
    egg.style.top = '64%'
    egg.style.left = '53%'
    egg.style.transform = 'rotateZ(220deg)'
    })

  frame(function() {
    egg.style.top = '68%'
    egg.style.left = '47%'
    egg.style.transform = 'rotateZ(140deg)'
    })

  frame(function() {
    egg.style.top = '71%'
    egg.style.left = '41%'
    egg.style.transform = 'rotateZ(220deg)'
    })

  frame(function() {
    egg.style.top = '74%'
    egg.style.left = '36%'
    egg.style.transform = 'rotateZ(180deg)'
    })

  frame(function() {
    egg.style.top = '77%'
    egg.style.left = '31%'
    egg.style.transform = 'rotateZ(100deg)'
      })
}
