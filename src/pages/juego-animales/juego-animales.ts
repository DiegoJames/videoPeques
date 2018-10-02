import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import * as Phaser from "phaser-ce";

@IonicPage()
@Component({
  selector: 'page-juego-animales',
  templateUrl: 'juego-animales.html',
})
export class JuegoAnimalesPage {

  constructor() {
    
    this.iniciar();
  }

  iniciar(){
    //this game will have only 1 state
    let GameState = {
      
      //load the game assets before the game starts
      preload() {
        
        this.load.image('background', './assets/imgs/background.png');
        this.game.load.image('arrow', './assets/imgs/arrow.png');

        this.load.spritesheet('chicken', './assets/imgs/chicken_spritesheet.png', 131, 200, 3);
        this.load.spritesheet('horse', './assets/imgs/horse_spritesheet.png', 212, 200, 3);
        this.load.spritesheet('pig', './assets/imgs/pig_spritesheet.png', 297, 200, 3);
        this.load.spritesheet('sheep', './assets/imgs/sheep_spritesheet.png', 244, 200, 3);

        this.load.audio('chickenSound', ['assets/audio/chicken.ogg', 'assets/audio/chicken.mp3']);
        this.load.audio('horseSound', ['assets/audio/horse.ogg', 'assets/audio/horse.mp3']);
        this.load.audio('pigSound', ['assets/audio/pig.ogg', 'assets/audio/pig.mp3']);
        this.load.audio('sheepSound', ['assets/audio/sheep.ogg', 'assets/audio/sheep.mp3']);
      },
      //executed after everything is loaded
      create() {

        //scaling options
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //have the game centered horizontally
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        
        this.background = this.game.add.sprite(0, 0, 'background');

        //group for animals
        let animalData:any = [
          {key: 'chicken', text: 'CHICKEN', audio: 'chickenSound'},
          {key: 'horse', text: 'HORSE', audio: 'horseSound'},
          {key: 'pig', text: 'PIG', audio: 'pigSound'},
          {key: 'sheep', text: 'SHEEP', audio: 'sheepSound'}
        ];
        
        //create a group to store all animals
        this.animals = this.game.add.group();
    
        let self:any = this;
        let animal:any;
    
        for (let element of animalData) {
            //create each animal and save it's properties
            animal = self.animals.create(-1000, self.game.world.centerY, element.key, 0);
        
             //I'm saving everything that's not Phaser-related in an object
            animal.customParams = {text: element.key, sound: self.game.add.audio(element.audio)};
      
            //anchor point set to the center of the sprite
            animal.anchor.setTo(0.5);

            //create animal animation
            animal.animations.add('animate', [0, 1, 2, 1, 0, 1], 3, false);
      
            //enable input so we can touch it
            animal.inputEnabled = true;
            animal.input.pixelPerfectClick = true;
            animal.events.onInputDown.add(self.animateAnimal, self);
          };
      
          //place current animal in the middle
          this.currentAnimal = this.animals.next();
          this.currentAnimal.position.set(this.game.world.centerX, this.game.world.centerY);
         
          //show animal text
          this.showText(this.currentAnimal);

          //left arrow
          this.leftArrow = this.game.add.sprite(60, this.game.world.centerY, 'arrow');
          this.leftArrow.anchor.setTo(0.5);
          this.leftArrow.scale.x = -1;
          this.leftArrow.customParams = {direction: -1};
      
          //left arrow user input
          this.leftArrow.inputEnabled = true;
          this.leftArrow.input.pixelPerfectClick = true;
          this.leftArrow.events.onInputDown.add(this.switchAnimal, this);
      
          //right arrow
          this.rightArrow = this.game.add.sprite(580, this.game.world.centerY, 'arrow');
          this.rightArrow.anchor.setTo(0.5);
          this.rightArrow.customParams = {direction: 1};
      
          //right arrow user input
          this.rightArrow.inputEnabled = true;
          this.rightArrow.input.pixelPerfectClick = true;
          this.rightArrow.events.onInputDown.add(this.switchAnimal, this);    
      
        },
        //this is executed multiple times per second
        update() {
          //this.animals.addAll('angle', 2);
        },
        //play animal animation and sound
        animateAnimal(sprite, event) {
          sprite.play('animate');
          sprite.customParams.sound.play();
            
        },
        //switch animal
        switchAnimal(sprite, event) {

          //if an animation is taking place don't do anything
          if(this.isMoving) {
            return false;
          }
      
          this.isMoving = true;

          //hide text
          this.animalText.visible = false;

          let newAnimal:any, endX:any;

          //according to the arrow they pressed, which animal comes in
          if(sprite.customParams.direction > 0) {
              newAnimal = this.animals.next();
              newAnimal.x = -newAnimal.width/2;
              endX = 640 + this.currentAnimal.width/2;
             }
             else {
              newAnimal = this.animals.previous();
              newAnimal.x = 640 + newAnimal.width/2;
              endX = -this.currentAnimal.width/2;
             }
        
             //tween animations, moving on x
            let newAnimalMovement:any = this.game.add.tween(newAnimal);
            newAnimalMovement.to({x: this.game.world.centerX}, 1000);
            newAnimalMovement.onComplete.add(()=>{
              this.isMoving = false;
              this.showText(newAnimal);
            }, this);
            newAnimalMovement.start();  
        
            let currentAnimalMovement:any = this.game.add.tween(this.currentAnimal);
            currentAnimalMovement.to({x: endX}, 1000);
            currentAnimalMovement.start();  
        
            this.currentAnimal = newAnimal;

          },
          showText(animal) {
            if(!this.animalText) {
              var style = {
                font: 'bold 30pt Arial',
                fill: '#D0171B',
                align: 'center'
              }
            this.animalText = this.game.add.text(this.game.width/2, this.game.height * 0.85, '', style);
            this.animalText.anchor.setTo(0.5);
          }
        
          this.animalText.setText(animal.customParams.text);
          this.animalText.visible = true;
          },
          
         
        };


       
    //initiate the Phaser framework
    let game = new Phaser.Game(640, 360, Phaser.CANVAS, 'juegoAnimales');

    
    
    //game.state.restart(true);
    game.state.add('GameState', GameState);
    game.state.start('GameState');
    
    
    

    
    
  
    
  }
  
  
}
