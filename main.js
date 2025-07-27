let accX = 0
let accY = 0
let accZ = 0

I2C_LCD1602.LcdInit(0x3C)

basic.forever(function () {
    accX = input.acceleration(Dimension.X)
    accY = input.acceleration(Dimension.Y)
    accZ = input.acceleration(Dimension.Z)

    I2C_LCD1602.clear()
    I2C_LCD1602.ShowString("X:" + accX + " Y:" + accY, 0, 0)
    I2C_LCD1602.ShowString("Z:" + accZ, 0, 1)

    // Z normalmente es ~1023 en reposo (por gravedad)
    if (Math.abs(accX) > 1500 || Math.abs(accY) > 1500 || Math.abs(accZ - 1023) > 1500) {
        basic.showIcon(IconNames.Skull)
        music.playTone(988, music.beat(BeatFraction.Whole))
    }

    basic.pause(1500)
})
