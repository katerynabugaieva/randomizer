input.onButtonPressed(Button.A, function () {
    if (count < girls) {
        basic.showIcon(list[count]);
basic.pause(2000)
        basic.clearScreen()
        count += 1
    } else {
        basic.showString("stop")
    }
})
input.onButtonPressed(Button.B, function () {
    createRandomList();
basic.showString("Go")
})
let girls = 0
let count = 0
let list: IconNames[] = []
girls = 10
let createRandomList = () => {
    count = 0;
    for (let j = 0; j < girls; j++) {
        if (j % 2 == 0) {
            list.push(IconNames.SmallHeart);
        } else {
            list.push(IconNames.Happy);
        }
    }
    return list.sort((a, b) => 0.5 - Math.random())
}
