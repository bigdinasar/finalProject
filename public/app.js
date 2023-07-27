Vue.createApp({
  data() {
    return {
      rating: "",
      ratings: [
        "I've seen better",
        "not bad",
        "Wow! So good",
        "Wow, unmatched",
      ],
      page: 1,
      shelf: [],
      cart: [],
      receipt: {
        theft: [],
        assault: [],
        traffic: [],
        drugs: [],
        clearance: [],
      },
      theftShelf: [],
      assaultShelf: [],
      trafficShelf: [],
      drugsShelf: [],
      clearanceShelf: [],

      theft: [],
      assault: [],
      traffic: [],
      drugs: [],
      clearance: [],

      stimp: [{}, {}, {}, {}],

      totalTime: 0,
      totalFine: 0,
      crimes: [],
    };
  },
  methods: {
    goToPage: function (page) {
      this.page = page;
    },
    addCrime: function (crime) {
      //add crime to cart (in specific category)

      this.cart.push(crime);

      //console.log("cart crime name: ", crime.crime_name);

      if (this.cart.length == 10) {
        this.page = 8;
      }
    },
    buildShelf: function (crimes) {
      // consumes a list of crimes and returns a list of 4 lists that evenly divides out the crimes

      let crimeList = crimes;

      var total = crimeList.length;
      let perRow = Math.ceil(crimeList.length / 4);

      var rows = [perRow, perRow, perRow, total - perRow * 3];
      var shelves = [];

      for (let row of rows) {
        var rowList = [];
        for (let i = 0; i < row; i++) {
          rowList.push(crimeList[crimeList.length - 1]);
          crimeList.pop();
        }
        shelves.push(rowList);
        rowList = [];
      }
      this.shelf = shelves;
      return shelves;
    },

    clearCart: function () {
      // this.cart = [];
      // console.log("clear cart happened");

      window.location.reload();
    },

    testingForLoops: function () {
      console.log("testingForLoops happened");
      console.log("stimp length: ", this.stimp.length);
      console.log("theft length: ", this.theft.length);
      console.log("drugs: ", this.drugs);
      for (var i = 0; i < this.theft.length; i++) {
        console.log("testingForLoops: ", this.theft[i].crime_name);
      }
    },

    payItem: function (crime) {
      if (this.cart.length != 0) {
        this.totalTime += parseInt(crime.jail_time);
        this.totalFine += crime.max_penalty;

        if (this.totalFine >= 10000) {
          this.rating = this.ratings[3];
        } else {
          this.rating = this.ratings[0];
        }

        this.receipt[String(crime.category)].push(crime);
        //console.log("before cart length: ", this.cart.length);
        this.cart.pop();
        //console.log("after cart length: ", this.cart.length);
      }
    },
    filterCrimes: function () {
      for (crime of this.crimes) {
        if (crime.category == "theft") {
          this.theft.push(crime);
        } else if (crime.category == "assault") {
          this.assault.push(crime);
        } else if (crime.category == "traffic") {
          this.traffic.push(crime);
        } else if (crime.category == "drugs") {
          this.drugs.push(crime);
        } else if (crime.category == "clearance") {
          this.clearance.push(crime);
        }
      }
    },
    getCrimes: function () {
      fetch("http://localhost:8080/crimes")
        .then((response) => response.json())
        .then((data) => {
          this.crimes = data;
          // console.log(this.crimes);
          this.filterCrimes();
          this.theftShelf = this.buildShelf(this.theft);
          this.assaultShelf = this.buildShelf(this.assault);
          this.trafficShelf = this.buildShelf(this.traffic);
          this.drugsShelf = this.buildShelf(this.drugs);
          this.clearanceShelf = this.buildShelf(this.clearance);
        });
      // console.log("these are theft crimes");
    },
  },
  created: function () {
    // this.getCrimes()

    this.getCrimes();
  },
  watch: {
    squimp() {
      if (this.page == 1) {
        this.cart = [];
        //console.log("squimp happened");
      }
    },
  },
  computed: {
    // balance() {
    //   return this.receipt.theft.reduce((total, crime) => total + crime.jail_time, 0);
    // },
    // bilince() {
    //   return this.receipt.theft.reduce((tatal, crime) => tatal + crime.jail_time, 0);
    // }
  },
}).mount("#app");

imageMapResize();
