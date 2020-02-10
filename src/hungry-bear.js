export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
    this.moodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }

  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 2000);
  }

  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  didBearGetMad() {
    if (this.moodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  didBearDie() {
    if ((this.moodLevel == 0) && (this.foodLevel == 0)) {
      return true; 
      } else; {
      return false;
      }
  }

  gameOver() {
    if (this.didBearDie() === true) {
      return true;
    } else {
      return false;
    }
  }

  pet() {
    this.moodLevel = 10;
  }


  feed() {
    this.foodLevel = 10;
  }

}