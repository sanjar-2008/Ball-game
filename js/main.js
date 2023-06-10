let poly = document.querySelector('#poly')
let ball = document.querySelector('#ball')
let reflectLeft = document.querySelector('.poly-reflector_left')
let reflectRight = document.querySelector('.poly-reflector_right')
let polyLeft = document.querySelector('.poly-result_left')
let polyRight = document.querySelector('.poly-result_right')
let quit = document.querySelector('.quit')
let count = 150
let count2 = 150
reflectRight.style.top = count + "px"
reflectLeft.style.top = count2 + "px"
document.addEventListener('keydown', (event) => {

    if (Number((reflectRight.style.top).slice(0, (reflectRight.style.top).length - 2)) > 0) {
        if (event.code == 'ArrowUp') {
            count += -10
            reflectRight.style.top = count + 'px'
        }
    }
    if (Number((reflectRight.style.top).slice(0, (reflectRight.style.top).length - 2)) < 300) {
        if (event.code == 'ArrowDown') {
            count += 10
            reflectRight.style.top = count + 'px'
        }
    }
})
document.addEventListener('keydown', (event) => {

    if (Number((reflectLeft.style.top).slice(0, (reflectLeft.style.top).length - 2)) > 0) {
        if (event.code == 'KeyW') {
            count2 += -10
            reflectLeft.style.top = count2 + 'px'
        }
    }
    if (Number((reflectLeft.style.top).slice(0, (reflectLeft.style.top).length - 2)) < 300) {
        if (event.code == 'KeyS') {
            count2 += 10
            reflectLeft.style.top = count2 + 'px'
        }
    }
})



let res = 0
let res2 = 0
let topValue = 180
let leftValue = 383
let data = true
function getRandomItem(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let item = arr[randomIndex];
    return item;
}
let arr = ["down_right", "up_right", "down_left", "up_left"]
let result = getRandomItem(arr);
let value = result
let click = 0
document.addEventListener('keydown', (event) => {
    let space = event.code == 'Space'
    if (space) {
        data = false
        if (data == false) {

        }
        console.log(data);
        click++
        console.log(click);
        let time = setInterval(() => {
            switch (value) {
                case "down_right": {
                    ball.style.top = `${topValue++}px`
                    ball.style.left = `${leftValue++}px`
                    if (topValue == 360) {
                        value = "up_right"
                    }
                    if (leftValue == 763) {
                        value = "down_left"
                    }
                }
                    break
                case "up_right": {

                    ball.style.top = `${topValue--}px`
                    ball.style.left = `${leftValue++}px`
                    if (topValue == 0) {
                        value = "down_right"
                    }
                    if (leftValue == 763) {
                        value = "up_left"
                    }
                }
                    break
                case "down_left": {
                    ball.style.top = `${topValue++}px`
                    ball.style.left = `${leftValue--}px`
                    if (topValue == 360) {
                        value = "up_left"
                    }
                    if (leftValue == 0) {
                        value = 'down_right'
                    }
                }
                    break
                case "up_left": {

                    ball.style.top = `${topValue--}px`
                    ball.style.left = `${leftValue--}px`
                    if (topValue == 0) {
                        value = 'down_left'
                    }
                    if (leftValue == 0) {
                        value = 'up_right'
                    }
                }
                    break
            }
            if (leftValue == 723 && count + 100 > topValue && topValue > count) {
                if (value == 'down_right') {
                    value = 'down_left'
                }
                else if (value == 'up_right') {
                    value = 'up_left'
                }
            }
            if (leftValue == 40 && count2 + 100 > topValue && topValue > count2) {
                if (value == 'down_left') {
                    value = 'down_right'
                }
                else if (value == 'up_left') {
                    value = 'up_right'
                }
            }
            if (leftValue == 0) {
                data = true
                console.log(data);
                polyRight.innerHTML = `${++res}`
                clearInterval(time)

                topValue = 180
                leftValue = 383

            }
            if (leftValue == 763) {
                data = true
                polyLeft.innerHTML = `${++res2}`
                clearInterval(time)


                topValue = 180
                leftValue = 383

            }
        }, 5)
    }
    if (event.code == 'KeyQ') {
        location.href = location.href
    }
})
quit.addEventListener('click', () => {
    window.close()
})
