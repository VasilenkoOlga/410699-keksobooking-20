'use strict';

var TOTAL_ADS = 8;
var AVATARS = ['01', '02', '03', '04', '05', '06', '07', '08'];
var CHECKOUT = ['12:00', '13:00', '14:00'];
var CHECKIN = ['12:00', '13:00', '14:00'];
var TYPES = ['palace', 'flat', 'house', 'bungalo'];
var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
var PRICE_MIN = 500;
var PRICE_MAX = 500000;
var POINT_MAX = 630;
var POINT_MIN = 130;

var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomElement = function (elementsRandom) {
  var randElement = Math.floor(Math.random() * elementsRandom.length);
  return elementsRandom[randElement];
};

var generatedPins = [];

var createElements = function () {
  for (var i = 0; i < TOTAL_ADS; i++) {
    generatedPins.push({
      'author': {
        'avatar': 'img/avatars/user' + AVATARS[i] + '.png'
      },
      'offer': {
        'title': 'Объявление' + i,
        'address': {
          'x': getRandomNumber(POINT_MIN, POINT_MAX),
          'y': getRandomNumber(POINT_MIN, POINT_MAX)
        },
        'price': getRandomNumber(PRICE_MIN, PRICE_MAX),
        'type': getRandomElement(TYPES),
        'rooms': getRandomNumber(1, 5),
        'guests': getRandomNumber(1, 10),
        'checkin': getRandomElement(CHECKIN),
        'checkout': getRandomElement(CHECKOUT),
        'features': getRandomElement(FEATURES),
        'description': 'Описание объекта',
        'photos': getRandomElement(PHOTOS),
      },
      'location': {
        'x': getRandomNumber(POINT_MIN, POINT_MAX),
        'y': getRandomNumber(POINT_MIN, POINT_MAX)
      }
    });
  }
};

createElements();

// Открытие карты //
var map = document.querySelector('.map');
map.classList.remove('map--faded');
