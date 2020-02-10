import { HungryBear } from './../src/hungry-bear.js';

describe('Fuzzy', () => {
  jest.useFakeTimers();
  let fuzzy;

  beforeEach(function() {
    fuzzy = new HungryBear("Fuzzy");
    fuzzy.setHunger();
    fuzzy.setMood();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a food level of 10 when it is created', () => {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a mood level when onject is instantiated', () => {
    expect(fuzzy.moodLevel).toEqual(10);
  });

  test('should have a food level of 7 after 3001 milliseconds', () => {
    jest.advanceTimersByTime(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  test('should have a mood level of 5 after 10001 milliseconds', () => {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.moodLevel).toEqual(5);
  });

  test('should get angry if the mood level drops below zero', () => {
    fuzzy.moodLevel = 0;
    expect(fuzzy.didBearGetMad()).toEqual(true);
  });

  test('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should get very hungry if 10 seconds pass without feeding', function() {
    jest.advanceTimersByTime(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  test('should have a food level of ten if it is fed', function() {
    jest.advanceTimersByTime(9001);
    fuzzy.feed();
    expect(fuzzy.foodLevel).toEqual(10);
  });

  test('should have a food level of 10 when you pet the bear', ()=> {
    jest.advanceTimersByTime(9001);
    fuzzy.pet();
    expect(fuzzy.moodLevel).toEqual(10);
  })

  test('should have the bear die if you do not feed it or pet it', () => {
    fuzzy.foodLevel = 0;
    fuzzy.moodLevel = 0;
    expect(fuzzy.didBearDie()).toEqual(true);
  })

  test('should bear die, the game is over', () => {
    fuzzy.foodLevel = 0;
    fuzzy.moodLevel = 0;
    fuzzy.didBearDie(true);
    expect(fuzzy.gameOver()).toEqual(true);

  })


});