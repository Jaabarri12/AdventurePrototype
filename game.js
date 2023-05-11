
// Scene 1(The Open Sea... )
class Scene1 extends AdventureScene {
    constructor() {
        super("Scene1", "The Open Sea...");
    }

    // Some assets preloaded instead of text 
    preload (){
        this.load.image('boat', 'assets/boat.png');
        this.load.image('water', 'assets/water.png');
    }

    onEnter() {
        // Water Image
        let water = this.add.image(this.w * .25, this.w*.51, 'water')
            .setInteractive()
            // Mouse is over show text
            .on('pointerover', () => {
                this.showMessage("The water looks nice doesn't it?")
            })
            // Mouse is down add a wave
            .on('pointerdown', () => {
                this.showMessage("Woah what a big wave")
                let wave = this.add.text(this.w * .5, this.w * .4, "🌊")
                .setFontSize(this.s * 10)
            })


        // Boat image
        let boat = this.add.image(this.w * .2, this.w * .45, 'boat')
            .setInteractive()
            // Mouse is over show text
            .on('pointerover', () => {
                this.showMessage("Where should we go?")
            })
        
        // Island1 and the good ending Island because of treasure
        let island1 = this.add.text(this.w * 0.3, this.w * 0.2, "🏝️ Island 1")
            .setFontSize(this.s * 5)
            .setInteractive()
            // Mouse is over show some text
            .on('pointerover', () => {
                this.showMessage("Should we go to this island?")
            })
            // Mouse is over go to next scene(island1)
            .on('pointerdown', () => {
                this.showMessage("WOOOShhhH");
                this.gotoScene('island1')

            })
        // Island2 and the bad ending because no treasure
        let island2 = this.add.text(this.w * 0.05, this.w * 0.1, "🏖️ Island 2")
            .setFontSize(this.s * 5)
            .setInteractive()
            // Mouse is over show some text
            .on('pointerover', () => {
                this.showMessage("Should we go to this island?");
            })
            // Mouse is down go to next scene
            .on('pointerdown', () => {
                this.showMessage("*WHOOOOShhhh*");
                this.gotoScene('island2');
                
            })

    }
}

// This is the First Island
class Island1 extends AdventureScene {
    constructor() {
        super("island1", "Island1")
    }
    
    preload() {
        this.load.image('sand', 'assets/sand.jpg');
    }

    onEnter() {

        this.add.image(this.w * .281, this.w * .3, 'sand')

        // Go to boat
        let leave = this.add.text(this.w*.55, this.w*.02, "Go to Boat")
            .setFontSize(this.s*3)
            .setInteractive()
            // Mouse is over show some text
            .on('pointerover', () => {
                this.showMessage("Want to go back to the boat?")
            })
            .on('pointerdown', () => {
                if(this.hasItem('gold')) {
                    this.showMessage("Lets Gooooooo")
                    this.gotoScene('boat')
                } else{
                    this.shake(leave)
                    this.showMessage("We can't leave yet!")
                }
            })
        
        let key = this.add.text(this.w*.21,this.w*.4,"🔑")
            .setFontSize(this.s*2)
            .setInteractive()
            .on('pointerdown', () => {
                this.showMessage('*Grabbed the key*')
                this.fadeItem(key)
                this.gainItem('key')
            })


        let rock = this.add.text(this.w*.2, this.w*.4,"🪨")
            .setFontSize(this.s*4)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("I wonder what is under this rock?")
            })
            .on('pointerdown', () => {
                this.fadeItem(rock)
                this.showMessage("Oh look its a key!")

            })



        // Palm tree interaction
        let pTree = this.add.text(this.w*.6, this.w *.2, "🌴")
            .setFontSize(this.s*9)
            .setInteractive()
            // Mouse is over show some text
            .on('pointerover', () => {
                this.showMessage("What a nice tree I wonder if it has any fruit?")
            })
            .on('pointerdown', () => {
                this.gainItem('coconut');
            })

        

        let x = this.add.text(this.w*.1, this.w*.2, "❌")
            .setFontSize(this.s*9)
            .setInteractive()
            .on('pointover', () => {
                this.showMessage("What a conviniently place X on the sand.")
            })
            .on('pointerdown', () => {
                this.fadeItem(x)
                this.showMessage('OH look its some treasure!!!!')
                let gold = this.add.text(this.w*.1, this.w*.2, "⭐️")
                    .setFontSize(this.s*9)
                    .setInteractive()
                    .on('pointerdown', () => {
                        this.fadeItem(gold)
                        this.showMessage("You got the gold!!")
                        this.gainItem('gold')
                    })


                let lock = this.add.text(this.w*.1, this.w*.2, "🔒")
                    .setFontSize(this.s*9)
                    .setInteractive()
                    .on('pointerover', () => {
                        if(this.hasItem('key')) {
                            this.showMessage("Unlock the lock")
                        } else{
                            this.showMessage("We need a key")
                        }
                    })
                    .on('pointerdown', () => {
                        if(this.hasItem('key')) {
                            this.fadeItem(lock)
                            this.loseItem('key')
                        } else {
                            this.shake(lock)
                        }

                    })

            })

    }

}




//Boat Scene(Back on Boat)
class boat extends AdventureScene {
    constructor() {
        super("boat", "Back on the Boat");
    }

    // Some assets preloaded instead of text 
    preload (){
        this.load.image('boat', 'assets/boat.png');
        this.load.image('water', 'assets/water.png');
    }

    onEnter() {
        // Water Image
        let water = this.add.image(this.w * .25, this.w*.51, 'water')
            .setInteractive()
            // Mouse is over show text
            .on('pointerover', () => {
                this.showMessage("The water looks nice doesn't it?")
            })
            // Mouse is down add a wave
            .on('pointerdown', () => {
                this.showMessage("Woah what a big wave")
                let wave = this.add.text(this.w * .5, this.w * .4, "🌊")
                .setFontSize(this.s * 10)
            })


        // Boat image
        let boat = this.add.image(this.w * .2, this.w * .45, 'boat')
            .setInteractive()
            // Mouse is over show text
            .on('pointerover', () => {
                this.showMessage("Lets Head home we got some gold")
            })
        
        let home = this.add.text((this.w/2)-500, (this.h/2)-400, '🏡 Home')
        .setFontSize(this.s * 10)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("Lets go HOMMEEEEE!!!!")
        })
        .on('pointerdown', () => {
            this.showMessage("Away we gooooo")
            this.gotoScene('goodEnding')
        })


    }
}








class Island2 extends AdventureScene {
    constructor() {
        super("island2", "Island2");
    }

    preload() {
        this.load.image('niceIsland', 'assets/island2.jpg')
    }

    onEnter() {

        this.add.image(this.w*.281, this.h*.5,'niceIsland')

        let monkey = this.add.text((this.w/2)*.2, (this.h/2)-200,'🐵')
            .setFontSize(this.s*7)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("Hi my name is Jerron")
            })
            .on('pointerdown', () => {
                this.showMessage("Take my favorite banana")
                this.gainItem('banana')
            })

        let mountain = this.add.text(this.w/2, this.h/2*.4, '⛰️')
            .setFontSize(this.s*25)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("What a nice Mountain")
            })
            .on('pointerdown', () => {
                this.showMessage("Lets Check it out")
                this.gotoScene("cave")
            })
        let snake = this.add.text((this.w/2)*.1, (this.h/2)*1.3, '🐍')
            .setFontSize(this.s*5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('You should go check out the Cave in the mountain')
            })
            .on('pointerdown', () => {
                this.showMessage("DONT TOUCH ME")
                this.shake(snake)
            })
        

        



    }
}



class Cave extends AdventureScene {
    constructor() {
        super("cave", "Cave")
    }

    preload() {
        this.load.image('monster', 'assets/creature.png');
        this.load.image('black', 'assets/blackB.png');
    }

    onEnter() {

        let black = this.add.image(this.w*.27, this.w * .3, 'black');

        let torch = this.add.text(this.w/2, this.h/2+200, "🪵")
            .setFontSize(this.s*5)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('It is really dark, Lets light a fire')
            })
            .on('pointerdown', () => {
                this.fadeItem(torch)
                let fire = this.add.text(this.w/2, this.h/2+200, "🔥")
                    .setFontSize(this.s*7)
                    .setInteractive()
                let creature = this.add.image(this.w/2, this.h/2, 'monster')
                this.showMessage('RUNNNNN')
                this.time.delayedCall(1000, () => this.gotoScene('badEnding'))
            })

    }

}



class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload() {
        this.load.image('pirate', 'assets/pirate.png');
        this.load.audio('introMusic', 'assets/introMusic.mp3');
    }

    create() {

        let sound = this.sound.add('introMusic')
        sound.loop = true;
        sound.play()
        this.add.image(this.cameras.main.width / 2,this.cameras.main.height / 2 , 'pirate');

        this.add.text(50,50, "Adventure awaits!").setFontSize(50);
        this.add.text(50,100, "Click anywhere to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('Scene1'));
        });
    }
}

class GoodEnding extends Phaser.Scene {
    constructor() {
        super('goodEnding');
    }

    preload () {
        this.load.image('ending1', 'assets/goodEnd.png');
    }

    create() {
  
    
        this.add.image(this.cameras.main.width / 2,this.cameras.main.height / 2 , 'ending1')

        this.add.text(50, 50, "That's all!").setFontSize(50);

    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Scene1, Island1, boat, Island2, Cave, GoodEnding],
    title: "Adventure Game",
});

