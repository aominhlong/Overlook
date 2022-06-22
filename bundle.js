/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "specificUserData": () => (/* binding */ specificUserData),
/* harmony export */   "allCustomersData": () => (/* binding */ allCustomersData),
/* harmony export */   "allRoomsData": () => (/* binding */ allRoomsData),
/* harmony export */   "allBookingsData": () => (/* binding */ allBookingsData)
/* harmony export */ });
let rooms = `https://overlook-api-na.herokuapp.com/api/v1/rooms`
let customers = `https://overlook-api-na.herokuapp.com/api/v1/customers`
let bookings = `https://overlook-api-na.herokuapp.com/api/v1/bookings`



const specificUserData = (id) => {
    return fetch(`https://overlook-api-na.herokuapp.com/api/v1/customers/${id}`)
    .then(response => response.json())
    .catch(err => console.log('Error getting specific customer data'))
}

const allCustomersData = () => {
    return fetch(customers)
    .then(response => response.json())
    .catch(err => console.log('Error getting customer data'))
}

const allRoomsData = () => {
    return fetch(rooms)
    .then(response => response.json())
    .catch(err => console.log('Error getting rooms data'))
}

const allBookingsData = () => {
    return fetch(bookings)
    .then(response => response.json())
    .catch(err => console.log('Error getting bookings data'))
}





/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Hotel {
    constructor(roomsData, customerData, bookingsData) {
        this.customerList = customerData;
        this.roomsAvailable = roomsData
        this.roomsUnavailable = bookingsData
        this.filteredRoomsAvailable = []
        this.unbookedRooms = []
    }
    
    filterRoomsByType(roomType) {
        this.roomsAvailable.forEach((room) => {
            if (room.roomType === roomType) {
                this.filteredRoomsAvailable.push(room)
            }
        })
    }

    filterRoomsByDate(date) {
        let filteredRoomsAvailable = []
        this.unbookedRooms = []
       
        this.roomsAvailable.forEach((room) => filteredRoomsAvailable.push(room))
        
        let filterBookings = this.roomsUnavailable.filter((booking) => {
            return booking.date === date.split('-').join('/')
        })

        filterBookings.forEach((booking) => {
            filteredRoomsAvailable.forEach((room, index) => {
                if (parseInt(room.number) === parseInt(booking.roomNumber)) {
                    this.unbookedRooms.push(room)
                    filteredRoomsAvailable.splice(index, 1)
                }
            })
        })
        return filteredRoomsAvailable
    }

    filterRoomsByBoth(date, roomType) {
        let filteredRoomsAvailable = []
      
        this.roomsAvailable.forEach((room) => filteredRoomsAvailable.push(room))
       
        let filterBookings = this.roomsUnavailable.filter((booking) => {
            return booking.date === date.split('-').join('/')
        })
        filterBookings.forEach((booking) => {
        filteredRoomsAvailable.forEach((room, index) => {
                if (room.number === booking.roomNumber) {
                    filteredRoomsAvailable.splice(index, 1)
                }
            })
        })

        return filteredRoomsAvailable.filter((room) => {
            return room.roomType === roomType
        })
    }    
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hotel);

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Customer {
    constructor(customerData, hotel) {
        this.name = customerData.name
        this.id = customerData.id
        this.roomsBooked = []
        this.totalSpent = 0
        this.roomsAvailable = hotel.roomsAvailable
        this.bookedRooms = hotel.roomsUnavailable
    }

    findRoomsBooked(bookedRooms) {
        bookedRooms.forEach((room) => {
            if (this.id === room.userID) {
                this.roomsBooked.push(room)
            }
        })   
    }

    findMoneySpent(roomData) {
        let roomDetail = [];
        this.roomsBooked.forEach((roomBooked) => {
            roomData.forEach((room) => {
                if (roomBooked.roomNumber === room.number) {
                    roomDetail.push(room)
                }
            })
        })

        this.totalSpent = roomDetail.reduce((acc, room) => {
            acc += room.costPerNight
            return acc
        }, 0)
    }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer); 

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 6 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-repeat: no-repeat;\n  background-size: cover;\n  font-family: 'Comic Sans MS';\n  height: 100vh;\n  margin: 0;\n  width: 100%;\n}\n\n/* LOGIN PAGE */\n\n.login-page{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  margin: 0;\n  width: 100%;\n}\n\n.greeting{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 40%;\n  justify-content: center;\n}\n\n.login{\n  text-shadow: 2px 2px #4a4848;\n}\n\n.login-title{\n  font-size: 100px;\n  size: 5em;\n  text-align: center;\n  text-shadow: 2px 2px #4a4848;\n}\n\n.slogan{\n  font-size: 30px;\n  margin: 0;\n  text-shadow: 2px 2px #000000;\n}\n\n.login-capsule{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-size: 25px;\n  height: 60%;\n  justify-content: center;\n}\n\n.login-area{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2%;\n  height: 30%;\n  justify-content: center;\n  width: 80%;\n}\n\n.username,\n.password{\n  height: 3em;\n  width: 18em;\n}\n\n.login-btn{\n  height: 20%;\n  width: 15%;\n}\n\n.login-error{\n  color: rgb(78, 10, 10);\n  /* color: rgb(26, 7, 7); */\n  text-shadow: 1px 1px #000000;\n}\n\n\n/* MAIN DASHBOARD */\n\n.title-user-container{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 90%;\n}\n\n.title-container{\n  height: 100%;\n}\n\n.title-money-spent-container{\n  border: 2px solid red;\n}\n\n.login-title, \n.title{\n  color: rgb(255,254,255);\n  font-size: 5em;\n}\n\n.login,\n.slogan{\n  color: rgb(255,254,255); \n}\n\n.login-capsule{\n  background-color: rgb(170, 168, 168, 0.9);\n  border-radius: 50px;\n  height: 30%;\n  margin: 10%;\n  width: 40%;\n}\n\n.login{\n  margin: 5%;\n  outline-color: black;\n}\n\n.mini-title-capsule{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n}\n\n.money-spent{\n  text-align: center;\n}\n\n.bookings{\n  display: flex;\n  justify-content: space-between;\n  max-height: 35%;\n  width: 100%;\n}\n\n.pastBooked,\n.currentBooking{\n  background-color: rgb(170, 168, 168, 0.8);\n  border: 1px solid grey;\n  margin: 0;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  text-align: center;\n  width: 40%;\n}\n\n.no-bookings{\n  align-items: center;\n  color:rgb(160, 160, 160);\n  display: flex;\n  height: 95%;\n  justify-content: center;\n}\n\n.roomBooked {\n  margin: 3px;\n}\n\n.top-half{\n  display: flex;\n  height: 60%;\n\n}\n\n.user-booking-area{\n  display: flex;\n  flex-direction: column;\n  width: 10%;\n}\n\n.user-info{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.my-bookings{\n  border: 2px solid orange;\n  height: 8%;\n}\n\n\n/* BOOKING AREA */\n\n.bottom-half{\n  align-items: center;\n  display: flex;\n  height: 40%;\n  justify-content: center;\n}\n\n.calendar{\n  color: #ffffff;\n  text-shadow: 1.5px 1.5px #191919;\n}\n\n.booking-area{\n  align-items: center;\n  background-color: #2D455D;\n  border-radius: 4px;\n  display: flex;\n  height: 60%;\n  justify-content: center;\n  opacity: 0.9;\n  width: 80%;\n}\n\n.book-for{\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-right: 5%;\n}\n\n/* ROOMS AVAILABLE PAGE */\n.rooms-available-page{\n  height: 100%;\n  margin: 0;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n\n.rooms-available-title{\n  align-items: center;\n  color: rgb(255,254,255);\n  display: flex;\n  height: 15%;\n  justify-content: center;\n  margin: 0;\n  text-align: center;\n  text-shadow: 1.5px 1.5px #191919;\n}\n\n.room-available-container{\n  background-color: rgb(170, 168, 168, 0.8);\n  border-top: 1px solid rgba(9, 29, 49, 0.5);\n}\n\n\n.roomBooked,\n.room-available{\n  align-items: center;\n  background-color: rgb(45,69,93, 0.9);\n  border: 1px solid rgb(45,69,93);\n  color: rgb(255,254,255);\n  display: flex;\n  height: 20%;\n  justify-content: center;\n  margin: 2.5em;\n}\n\n.room-available{\n  background-color: rgba(33, 52, 71, 0.9);\n}\n\n#type-selection{\n  margin: 1em;\n}\n\n.booking-title,\n.current-booking-title{\n  background-color: rgb(45,69,93, 0.5);\n  border-radius: 4px;\n  color: rgb(255,254,255);\n  text-shadow: 2px 1.5px #191919;\n  width: 8.5em;\n}\n\n.booking-title{\n  width: 9em;\n}\n\n.title{\n  text-shadow: 2px 2px #4a4848;\n}\n\n.customer-name,\n.customer-id,\n.money-spent{\n  align-items: center;\n  background: rgb(45,69,93, 0.9);\n  border-bottom: 1px solid grey;\n  color: rgb(255,254,255);\n  display: flex;\n  height: 4em;\n  justify-content: center;\n  margin: 0%;\n  text-shadow: 1px 1px #4a4848;\n  width: 100%;\n}\n\n.go-back{\n  height: 4em;\n  width: 8em;\n}\n\n.login-btn{\n  height: 3em;\n}\n\n.hidden {\n  display: none;\n}\n\n.confirm-message{\n  background:rgba(13, 69, 124, 0.5);\n  color: rgb(255,254,255);\n  text-align: center;\n  text-shadow: 1.5px 1.5px #302f2f;\n}\n\n.error-page{\n  background: white;\n  height: 100%;\n  margin: 0;\n  width: 100%;\n}\n\n.error-no-date-chosen{\n  color:rgb(235, 113, 113);\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  background-repeat: no-repeat;\n  background-size: cover;\n  font-family: 'Comic Sans MS';\n  height: 100vh;\n  margin: 0;\n  width: 100%;\n}\n\n/* LOGIN PAGE */\n\n.login-page{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  margin: 0;\n  width: 100%;\n}\n\n.greeting{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 40%;\n  justify-content: center;\n}\n\n.login{\n  text-shadow: 2px 2px #4a4848;\n}\n\n.login-title{\n  font-size: 100px;\n  size: 5em;\n  text-align: center;\n  text-shadow: 2px 2px #4a4848;\n}\n\n.slogan{\n  font-size: 30px;\n  margin: 0;\n  text-shadow: 2px 2px #000000;\n}\n\n.login-capsule{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-size: 25px;\n  height: 60%;\n  justify-content: center;\n}\n\n.login-area{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 2%;\n  height: 30%;\n  justify-content: center;\n  width: 80%;\n}\n\n.username,\n.password{\n  height: 3em;\n  width: 18em;\n}\n\n.login-btn{\n  height: 20%;\n  width: 15%;\n}\n\n.login-error{\n  color: rgb(78, 10, 10);\n  /* color: rgb(26, 7, 7); */\n  text-shadow: 1px 1px #000000;\n}\n\n\n/* MAIN DASHBOARD */\n\n.title-user-container{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 90%;\n}\n\n.title-container{\n  height: 100%;\n}\n\n.title-money-spent-container{\n  border: 2px solid red;\n}\n\n.login-title, \n.title{\n  color: rgb(255,254,255);\n  font-size: 5em;\n}\n\n.login,\n.slogan{\n  color: rgb(255,254,255); \n}\n\n.login-capsule{\n  background-color: rgb(170, 168, 168, 0.9);\n  border-radius: 50px;\n  height: 30%;\n  margin: 10%;\n  width: 40%;\n}\n\n.login{\n  margin: 5%;\n  outline-color: black;\n}\n\n.mini-title-capsule{\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n}\n\n.money-spent{\n  text-align: center;\n}\n\n.bookings{\n  display: flex;\n  justify-content: space-between;\n  max-height: 35%;\n  width: 100%;\n}\n\n.pastBooked,\n.currentBooking{\n  background-color: rgb(170, 168, 168, 0.8);\n  border: 1px solid grey;\n  margin: 0;\n  overflow-y: auto;\n  scrollbar-width: thin;\n  text-align: center;\n  width: 40%;\n}\n\n.no-bookings{\n  align-items: center;\n  color:rgb(160, 160, 160);\n  display: flex;\n  height: 95%;\n  justify-content: center;\n}\n\n.roomBooked {\n  margin: 3px;\n}\n\n.top-half{\n  display: flex;\n  height: 60%;\n\n}\n\n.user-booking-area{\n  display: flex;\n  flex-direction: column;\n  width: 10%;\n}\n\n.user-info{\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.my-bookings{\n  border: 2px solid orange;\n  height: 8%;\n}\n\n\n/* BOOKING AREA */\n\n.bottom-half{\n  align-items: center;\n  display: flex;\n  height: 40%;\n  justify-content: center;\n}\n\n.calendar{\n  color: #ffffff;\n  text-shadow: 1.5px 1.5px #191919;\n}\n\n.booking-area{\n  align-items: center;\n  background-color: #2D455D;\n  border-radius: 4px;\n  display: flex;\n  height: 60%;\n  justify-content: center;\n  opacity: 0.9;\n  width: 80%;\n}\n\n.book-for{\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  margin-right: 5%;\n}\n\n/* ROOMS AVAILABLE PAGE */\n.rooms-available-page{\n  height: 100%;\n  margin: 0;\n  overflow-y: auto;\n  scrollbar-width: thin;\n}\n\n.rooms-available-title{\n  align-items: center;\n  color: rgb(255,254,255);\n  display: flex;\n  height: 15%;\n  justify-content: center;\n  margin: 0;\n  text-align: center;\n  text-shadow: 1.5px 1.5px #191919;\n}\n\n.room-available-container{\n  background-color: rgb(170, 168, 168, 0.8);\n  border-top: 1px solid rgba(9, 29, 49, 0.5);\n}\n\n\n.roomBooked,\n.room-available{\n  align-items: center;\n  background-color: rgb(45,69,93, 0.9);\n  border: 1px solid rgb(45,69,93);\n  color: rgb(255,254,255);\n  display: flex;\n  height: 20%;\n  justify-content: center;\n  margin: 2.5em;\n}\n\n.room-available{\n  background-color: rgba(33, 52, 71, 0.9);\n}\n\n#type-selection{\n  margin: 1em;\n}\n\n.booking-title,\n.current-booking-title{\n  background-color: rgb(45,69,93, 0.5);\n  border-radius: 4px;\n  color: rgb(255,254,255);\n  text-shadow: 2px 1.5px #191919;\n  width: 8.5em;\n}\n\n.booking-title{\n  width: 9em;\n}\n\n.title{\n  text-shadow: 2px 2px #4a4848;\n}\n\n.customer-name,\n.customer-id,\n.money-spent{\n  align-items: center;\n  background: rgb(45,69,93, 0.9);\n  border-bottom: 1px solid grey;\n  color: rgb(255,254,255);\n  display: flex;\n  height: 4em;\n  justify-content: center;\n  margin: 0%;\n  text-shadow: 1px 1px #4a4848;\n  width: 100%;\n}\n\n.go-back{\n  height: 4em;\n  width: 8em;\n}\n\n.login-btn{\n  height: 3em;\n}\n\n.hidden {\n  display: none;\n}\n\n.confirm-message{\n  background:rgba(13, 69, 124, 0.5);\n  color: rgb(255,254,255);\n  text-align: center;\n  text-shadow: 1.5px 1.5px #302f2f;\n}\n\n.error-page{\n  background: white;\n  height: 100%;\n  margin: 0;\n  width: 100%;\n}\n\n.error-no-date-chosen{\n  color:rgb(235, 113, 113);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 7 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 8 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/turing-logo.png");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_Hotel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _classes_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _images_turing_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
// This is the JavaScript entry file - your code begins here




// ***** QUERY SELECTORS *****
const topHalf = document.querySelector('.top-half')
const bottomHalf = document.querySelector('.bottom-half')
const checkDateBtn = document.querySelector(".check-date-btn")
const roomsAvailableSection = document.querySelector('.room-available-container')
const roomsAvailablePage = document.querySelector('.rooms-available-page')
const userName = document.querySelector('.customer-name')
const customerId = document.querySelector('.customer-id')
const moneySpent = document.querySelector('.money-spent')
const pastBooked = document.querySelector('.pastBooked')
const currentBooking = document.querySelector('.currentBooking')
const noBookingParagraph = document.querySelector('.no-bookings')
const cal = document.querySelector('#calen')
const goHome = document.querySelector('.go-home')
const noDateErrorMessage = document.querySelector('.error-no-date-chosen')
const confirmMessage = document.querySelector('.confirm-message')
const loginBtn = document.querySelector('.login-btn')
const loginPage = document.querySelector('.login-page')
const username = document.querySelector('input[type="text"]')
const password = document.querySelector('.password')
const loginErrorMsg = document.querySelector('.login-error')
const selectRoomType = document.querySelector('#type-selection')
const date = document.querySelector('input[type="date"]')
const errorPage = document.querySelector('.error-page')
const roomAvailableTitle = document.querySelector('.rooms-available-title')

// ***** GLOBAL VARIABLES *****
let allData = []
let hotel;
let customer;
let bookingsData;
let roomsData;
let customers;


// ***** EVENT LISTENERS *****
window.addEventListener('load', () => {
  hideAll([topHalf, bottomHalf, roomsAvailablePage])
})

roomsAvailablePage.addEventListener('click', (event) => {
  confirmRoom(event)
})

checkDateBtn.addEventListener('click', (event) => {
  event.preventDefault()
  checkCalendarValue()
  noRoomsAvailable()
})

loginBtn.addEventListener('click', (event) => {
  event.preventDefault()
  checkLogin()
})

goHome.addEventListener('click', () => {
  showAll([topHalf, bottomHalf])
  hideAll([roomsAvailablePage])
  reDisplayRoomTitle()
})

// ***** FETCH DATA *****
const getData = (id) => {
  return Promise.all([
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.specificUserData)(id),
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.allCustomersData)(),
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.allRoomsData)(),
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.allBookingsData)()
  ])
  .then(data => {
    data.forEach((item) => {
      allData.push(item)
    })
  })
  .then(getData => {
    bookingsData = allData[3].bookings
    roomsData = allData[2].rooms
    customers = allData[1].customers
    hotel = new _classes_Hotel__WEBPACK_IMPORTED_MODULE_1__.default(roomsData, allData[1], bookingsData)
    customer = new _classes_Customer__WEBPACK_IMPORTED_MODULE_2__.default(allData[0], hotel)
    findUserLoginId(customers)
    populateBookingArea()
  })
  .catch(err => {
    hideAll([topHalf, bottomHalf, roomsAvailablePage, loginPage])
    showAll([errorPage])
  })
}


// ***** DASHBOARD *****
const populateBookingInformation = () => {
  customer.roomsBooked.forEach((roomBooked) => {
    pastBooked.innerHTML += `
    <section tabindex='0' class="roomBooked">
      date: ${roomBooked.date}
      <br>
      room Number: ${roomBooked.roomNumber}
    </section>`
  
    if(roomBooked.date >= setCurrentDay('/')) {
      currentBooking.innerHTML += `
        <section tabindex='0' class="roomBooked">
          date: ${roomBooked.date}
          <br>
          room Number: ${roomBooked.roomNumber}
        </section>`
    }
      if (bookingsData.length > 1008) {
        hideAll([noBookingParagraph])
      }
  })
}

const populateBookingArea = () => {
  customer.findRoomsBooked(bookingsData)
  customer.findMoneySpent(roomsData)
  userName.innerText = customer.name
  customerId.innerText = `id: ${customer.id}`
  moneySpent.innerText = `Total Spent: $${customer.totalSpent.toFixed(2)}`
  populateBookingInformation()
}

const populateAvailableOne = () => {
  hotel.filterRoomsByDate(date.value).forEach((room) => {
    roomsAvailableSection.innerHTML += `
    <section tabindex='0' class="room-available">
      <section class="room">
        Room Number: ${room.number}
        <br>
        Room Type: ${room.roomType}
        <br>
        Bed Size: ${room.bedSize}
        <br>
        Beds: ${room.numBeds}
        <br>
        Price Per Night: ${room.costPerNight}
      </section>
      <button class="button" id="${room.number}">Book Now</button>
    </section>
    `
  })
}

const populateAvailableTwo = () => {
  hotel.filterRoomsByBoth(date.value, selectRoomType.value).forEach((room) => {
    roomsAvailableSection.innerHTML += `
    <section tabindex='0' class="room-available">
      <section class="room">
        Room Number: ${room.number}
        <br>
        Room Type: ${room.roomType}
        <br>
        Bed Size: ${room.bedSize}
        <br>
        Beds: ${room.numBeds}
        <br>
        Price Per Night: ${room.costPerNight}
      </section>
      <button class="button" id="${room.number}">Book Now</button>
    </section>
    `
  })
}

const populateAvailablePage = () => {
  roomsAvailableSection.innerHTML = ''
  if (selectRoomType.value === 'All options') {
    populateAvailableOne()
  } else {
    populateAvailableTwo()
  }
  hideAll([topHalf, bottomHalf])
  showAll([roomsAvailablePage])
}

const checkCalendarValue = () => {
  if (cal.value === '') {
    showAll([noDateErrorMessage])
    setTimeout(() => {
      hideAll([noDateErrorMessage])
    }, 3000)
    return
  } else {
    populateAvailablePage()
  }
}


// ***** LOGIN PAGE *****
const checkLogin = () => {
  if (findUserLoginId() !== undefined) {
    hideAll([loginPage, loginErrorMsg])
    showAll([topHalf, bottomHalf])
    getData(parseInt(findUserLoginId()[0]))
    findUserLoginId()
  } else {
    showAll([loginErrorMsg])
  }
  cal.min = setCurrentDay('-')
}

const findUserLoginId = (customers) => {
  let userLogin = username.value
  let matchNum = userLogin.match(/\d+/)[0]
  let passwordLogin = password.value
 
  if (userLogin.includes('customer') && userLogin[8] !== '0' && matchNum && passwordLogin === 'overlook2021') {
    return matchNum
  }
}


// ***** CONFIRM ROOM MESSAGE *****
const confirmRoom = (event) => {
  if (event.target.className === 'button') {
    postRequest(event)
    showAll([confirmMessage])
    setTimeout(() => {
      hideAll([confirmMessage])
    }, 4000)
  }
}


// ***** POST REQUEST *****
const postRequest = (event) => {
  let postDate = date.value.split('-').join('/')

  fetch(`https://overlook-api-na.herokuapp.com/api/v1/bookings`, {
    method: 'POST',
    body: JSON.stringify(
      { "userID": parseInt(customerId.innerText.match(/\d+/)[0]), 
      "date": postDate, 
      "roomNumber": parseInt(event.target.id) }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(refetch  => {
    ;(0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.allBookingsData)()
    .then(data => {
      allData[3] = data
      bookingsData = allData[3].bookings
      customer.findRoomsBooked(bookingsData)
    })
  })
  .then(show => {
    repopulatePage()
  })
}

const repopulatePage = () => {
  getData(parseInt(customerId.innerText.match(/\d+/)[0]))
  showAll([topHalf, bottomHalf])
  hideAll([roomsAvailablePage, noBookingParagraph])
  currentBooking.innerHTML = ''
}


// ***** OTHER FUNCTIONS *****
const setCurrentDay = (sp) => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; 
  let yyyy = today.getFullYear();

  if(dd<10) dd='0'+dd;
  if(mm<10) mm='0'+mm;
  return (yyyy+sp+mm+sp+dd);
  };

  const hideAll = (array) => {
    array.forEach((element) => {
      element.classList.add("hidden")
    })
  }
  
  const showAll = (array) => {
    array.forEach((element) => {
      element.classList.remove("hidden")
    })
  }
  
  const reDisplayRoomTitle = () => {
    roomAvailableTitle.innerText = 'Rooms Available'
  }
  
  const noRoomsAvailable = () => {
    if (roomsAvailableSection.children.length === 0) {
      roomAvailableTitle.innerText = 'Sorry! No rooms are available for this date.'
    }
  }



// Do not delete or rename this file ********


// An example of how you tell webpack to use a CSS (SCSS) file
;


// An example of how you tell webpack to use an image (also need to link to it in the index.html)




})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map