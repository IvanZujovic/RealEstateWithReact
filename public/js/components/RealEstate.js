webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.cities = _this.cities.bind(_this);
    _this.housetypes = _this.housetypes.bind(_this);
    _this.rooms = _this.rooms.bind(_this);

    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;

        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'housetypes',
    value: function housetypes() {
      if (this.props.globalState.populateFormsData.housetypes != undefined) {
        var housetypes = this.props.globalState.populateFormsData.housetypes;

        return housetypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'rooms',
    value: function rooms() {
      if (this.props.globalState.populateFormsData.rooms != undefined) {
        var rooms = this.props.globalState.populateFormsData.rooms;

        console.log(rooms);
        return rooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            ' + '
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'Omr\xE5de'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: ' filters neighbourhood', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'Alla'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'houseType' },
            'Boende'
          ),
          _react2.default.createElement(
            'select',
            { name: 'houseType', className: 'filters housetype', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'Alla objekt'
            ),
            this.housetypes()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'rooms' },
            'Antal RoK'
          ),
          _react2.default.createElement(
            'select',
            { name: 'rooms', className: 'filters rooms', onChange: this.props.change },
            this.rooms()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'minPrice', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'maxPrice', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floorspace' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Boende Area'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floorspace', className: 'minFloorspace', onChange: this.props.change, value: this.props.globalState.min_floorspace }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floorspace', className: 'maxFloorspace', onChange: this.props.change, value: this.props.globalState.max_floorspace })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extra filter'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras', className: 'bla' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'Hiss'
              ),
              _react2.default.createElement('input', { name: 'hiss', value: 'hiss', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras', className: 'bla' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'Pool'
              ),
              _react2.default.createElement('input', { name: 'pool', value: 'pool', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras', className: 'bla' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'F\xF6rr\xE5d'
              ),
              _react2.default.createElement('input', { name: 'f\xF6rr\xE5d', value: 'f\xF6rr\xE5d', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras', className: 'bla' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'K\xE4llare'
              ),
              _react2.default.createElement('input', { name: 'k\xE4llare', value: 'k\xE4llare', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras', className: 'bla' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras', className: 'bla' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'Sj\xF6tomt'
              ),
              _react2.default.createElement('input', { name: 'sj\xF6tomt', value: 'sj\xF6tomt', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras', className: 'bla' },
              ' ',
              _react2.default.createElement(
                'span',
                null,
                'Innerg\xE5rd'
              ),
              _react2.default.createElement('input', { name: 'innerg\xE5rd', value: 'innerg\xE5rd', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'Logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Skapa annons'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Om oss'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Logga in'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Skapa konto'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Vi har inget som matchar din filtrering.";
      }

      return listingsData.map(function (listing, index) {

        if (_this2.props.globalState.view == 'box') {

          // boxview
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '")\n           no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  ' ',
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("' + listing.userImg + '")\n               no-repeat center center ' } })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'username' },
                        listing.userName
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        listing.date
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-details' },
                        _react2.default.createElement(
                          'div',
                          { className: 'listbox' },
                          _react2.default.createElement(
                            'div',
                            { className: 'floor-space' },
                            _react2.default.createElement('i', { className: 'far fa-square' }),
                            _react2.default.createElement(
                              'span',
                              null,
                              listing.floorSpace,
                              ' kvm\xB2'
                            )
                          ),
                          _react2.default.createElement(
                            'div',
                            { className: 'bedrooms' },
                            _react2.default.createElement('i', { className: 'fas fa-door-open' }),
                            _react2.default.createElement(
                              'span',
                              null,
                              listing.rooms,
                              ' Rum '
                            )
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'Titta p\xE5 Boende'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  'Utropspris: ',
                  listing.price2,
                  '  M\xE5nadskostnad: ',
                  listing.rent
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  ' ',
                  _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                  listing.city
                )
              )
            )
          );
        } else
          //long view
          {

            return _react2.default.createElement(
              'div',
              { className: 'col-md-12 col-lg-6', key: index },
              _react2.default.createElement(
                'div',
                { className: 'listing ' },
                _react2.default.createElement(
                  'div',
                  { className: 'listing-img', style: { background: 'url("' + listing.image + '")\n           no-repeat center center' } },
                  _react2.default.createElement(
                    'span',
                    { className: 'address' },
                    ' ',
                    listing.address
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-3' },
                      _react2.default.createElement('div', { className: 'user-img', style: { background: 'url("' + listing.userImg + '")\n               no-repeat center center ' } })
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'col-md-9' },
                      _react2.default.createElement(
                        'div',
                        { className: 'user-details' },
                        _react2.default.createElement(
                          'span',
                          { className: 'username' },
                          listing.userName
                        ),
                        _react2.default.createElement(
                          'span',
                          { className: 'post-date' },
                          listing.date
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'listing-details' },
                          _react2.default.createElement(
                            'div',
                            { className: 'listbox' },
                            _react2.default.createElement(
                              'div',
                              { className: 'floor-space' },
                              _react2.default.createElement('i', { className: 'far fa-square' }),
                              _react2.default.createElement(
                                'span',
                                null,
                                listing.floorSpace,
                                ' kvm\xB2'
                              )
                            ),
                            _react2.default.createElement(
                              'div',
                              { className: 'bedrooms' },
                              _react2.default.createElement('i', { className: 'fas fa-door-open' }),
                              _react2.default.createElement(
                                'span',
                                null,
                                listing.rooms,
                                ' Rum '
                              )
                            )
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'view-btn2' },
                        'Titta p\xE5 Boende'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'bottom-info' },
                  _react2.default.createElement(
                    'span',
                    { className: 'price' },
                    'Utropspris: ',
                    listing.price2,
                    '  M\xE5nadskostnad: ',
                    listing.rent
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'location' },
                    ' ',
                    _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
                    listing.city
                  )
                )
              )
            );
          }
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            '  resultat hittade'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                ' L\xE4gsta pris  '
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'H\xF6gsta pris'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fas fa-th-list', onClick: this.props.changeView.bind(null, 'long') }),
              _react2.default.createElement('i', { className: 'fas fa-th', onClick: this.props.changeView.bind(null, 'box') })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-result' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pages' },
            _react2.default.createElement(
              'li',
              null,
              'F\xF6reg\xE5ende'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'N\xE4sta'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: 'Otto bondesväg 32',
    city: 'Åkersberga',
    rooms: 5,
    floorSpace: 431,
    price: 3200000,
    price2: '3 200 000 kr',
    rent: '11 000 kr',
    extras: ['Vindsförråd', 'Pool'],
    houseType: 'Radhus',
    image: 'https://bcdn.se/images/cache/14738511_1274x844.jpg',
    userName: "ivan doe",
    date: "11-06-19",
    userImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
}, {
    address: 'Bergavägen 11',
    city: 'Åkersberga',
    floorSpace: 140,
    rooms: 3,
    price: 1600000,
    price2: '1 600 000 kr',
    rent: '7 000 kr',
    extras: ['Förråd', 'Tvättstuga', 'Hiss'],
    houseType: 'Lägenhet',
    image: 'https://bilder.hemnet.se/images/itemgallery_L/6a/fa/6afa78056bc7e86f907a28f0006ff5e0.jpg',
    userName: " John doe",
    date: "31-07-19",
    userImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
}, {
    address: 'Storängs Vägen 27',
    city: 'Åkersberga',
    floorSpace: 111,
    rooms: 2,
    price: 1200000,
    price2: '1 200 000 kr',
    rent: '4 000 kr',
    extras: ['Förråd', 'Tvättstuga', 'Gym'],
    houseType: 'Lägenhet',
    image: 'https://www.lansfast.se/Content/bilder/objekt/CMBOLGH4SEAOATR732KPD8O/cbild4pfkr95uc02shnqo-865.jpg?width=700&height=375&mode=crop',
    userName: " Jane Doe",
    date: "23-08-19",
    userImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
}, {
    address: 'Österskärsvägen',
    city: 'Åkersberga',
    floorSpace: 512,
    rooms: 2,
    price: 7200000,
    price2: '7 200 000 kr',
    rent: '10 000 kr',
    extras: ['Källare', 'Båtplats', 'Sjötomt'],
    houseType: 'Hus',
    image: 'https://mspecs.imgix.net/8d09f790-5970-11e8-aa98-cf9fd8836aaf.jpg?fit=clip&h=1000&ixlib=php-2.3.0&w=1600&s=2164d42a37f31277ae3a49d5596ffffb',
    userName: "Daniel Doe",
    date: "11-06-19",
    userImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
}, {
    address: 'Åkerbyvägen',
    city: 'Täby',
    floorSpace: 100,
    rooms: 3,
    price: 4200000,
    price2: '4 200 000 kr',
    rent: '7 000 kr',
    extras: ['Källare', 'Tvättstuga', 'Gym'],
    houseType: 'Lägenhet',
    image: 'https://bostad.skanska.se/492f0a/siteassets/projekt/taby-park-taby/bilder/1140x500/std_ext_1_tabypark_stockholm_lagenhet_skanska.jpg?w=1140',
    userName: "Kristina Doe",
    date: "25-08-10",
    userImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
}, {
    address: 'Täby Boulveard',
    city: 'Täby',
    floorSpace: 120,
    rooms: 3,
    price: 2100000,
    price2: '2 100 000 kr',
    rent: '8 000 kr',
    extras: ['Källare', 'Innergård', 'Tvättstuga'],
    houseType: 'Lägenhet',
    image: 'http://www.titania.se/Global/Projektbilder/2017/T%C3%A4bypark/taby_exterior.jpg',
    userName: "Magnus Doe",
    date: "22-07-19",
    userImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
}, {
    address: 'Kerringevägen',
    city: 'Danderyd',
    floorSpace: 80,
    rooms: 2,
    price: 2200000,
    price2: '2 200 000 kr',
    rent: '4 000 kr',
    extras: ['Förråd', 'Tvättstuga'],
    houseType: 'Lägenhet',
    image: 'http://www.temabygg.se/wp-content/uploads/2017/09/zenergy-modular-arkitektur-1068x580.jpg',
    userName: "Nick Doe",
    date: "13-09-19",
    userImg: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png"
}];

exports.default = listingsData;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var userData = [{
  userName: "ivan doe",
  date: "11-06-19"
}, {
  userName: " John doe",
  date: "31-07-19"
}, {
  userName: " Jane Doe",
  date: "23-08-19"
}, {
  userName: "Daniel Doe",
  date: "11-06-19"
}, {
  userName: "Kristina Doe",
  date: "25-08-10"
}, {
  userName: "Magnus Doe",
  date: "22-07-19"
}, {
  userName: "Nick Doe",
  date: "13-09-19"
}];
exports.default = userData;

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(59);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(101);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(231);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(230);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(232);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(233);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _userData = __webpack_require__(234);

var _userData2 = _interopRequireDefault(_userData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      listingsData: _listingsData2.default,
      city: 'All',
      houseType: 'All',
      rooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floorspace: 0,
      max_floorspace: 1000,
      hiss: false,
      pool: false,
      förråd: false,
      källare: false,
      gym: false,
      sjötomt: false,
      innergård: false,
      filteredData: _listingsData2.default,
      populateFormsData: 'All',
      sortby: 'price-dsc',
      view: 'box',
      search: '',
      userData: _userData2.default
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData

      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData(value);
        return _this2.filteredData.value;
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floorspace && item.floorSpace <= _this3.state.max_floorspace && item.rooms >= _this3.state.rooms;
      });
      if (this.state.city != 'All') {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }
      if (this.state.houseType != 'All') {
        newData = newData.filter(function (item) {
          return item.houseType == _this3.state.houseType;
        });
      }
      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }
      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      // city
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      cities = cities.sort();

      //housetype
      var housetypes = this.state.listingsData.map(function (item) {
        return item.houseType;
      });

      housetypes = new Set(housetypes);
      housetypes = [].concat(_toConsumableArray(housetypes));
      housetypes = housetypes.sort();
      //rooms
      var rooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      rooms = new Set(rooms);
      rooms = [].concat(_toConsumableArray(rooms));
      rooms = rooms.sort();

      this.setState({
        populateFormsData: {
          cities: cities,
          housetypes: housetypes,
          rooms: rooms
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'parent' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { globalState: this.state, populateAction: this.populateForms, change: this.change }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ })

},[238]);