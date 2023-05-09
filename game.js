class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    preload (){
        this.load.image('boat', 'assets/boat.png');
        this.load.image('water', 'assets/water.png');
    }

    onEnter() {
        // Water Image
        let water = this.add.image(this.w * .25, this.w*.51, 'water')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("The water looks nice doesn't it?")
            })
            .on('pointerdown', () => {
                this.showMessage("Woah what a big wave")
                let wave = this.add.text(this.w * .5, this.w * .4, "🌊")
                .setFontSize(this.s * 10)
            })


        // Boat image
        let boat = this.add.image(this.w * .2, this.w * .45, 'boat')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Where should we go?")
            })
        

        let island1 = this.add.text(this.w * 0.3, this.w * 0.2, "🏝️ Island 1")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Should we go to this island?")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let island2 = this.add.text(this.w * 0.05, this.w * 0.1, "🏖️ Island 2")
            .setFontSize(this.s * 5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Should we go to this Island?");
            })

            
            .on('pointerdown', () => {
                this.showMessage("*WHOOOOShhhh*");
                this.gotoScene('demo2');
                
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});

