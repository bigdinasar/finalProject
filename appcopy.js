Vue.createApp({
  data() {
    return {
      page: 1,
      crimes: [],
      cart: {
        theft: [1, 2, 3, 4, 5],
        assault: [],
        traffic: [],
        drugs: [],
        clearance: [],
      },
      theft: [],
      assault: [],
      traffic: [],
      drugs: [],
      clearance: [],
    };
  },
  methods: {
    // getCrimes: function () {
    //   fetch("http://localhost:8080/crimes").then((data) => {
    //     this.crimes.append(data.json);

    //     for (crime of crimes) {
    //       this.crime[category].append(crime);
    //     }
    //   });
    // },
    goToPage: function (page) {
      this.page = page;
    },
    addCrime: function (crime) {
      //add crime to cart (in specific category)

      this.cart[String(crime.category)].push(crime);
    },
    buildShelf: function (crimes) {
      // consumes a list of crimes and returns a list of 3 lists that evenly divides out the crimes
      const crimeList = crimes;
      var total = crimeList.length;
      let perRow = Math.ceil(crimeList.length / 3);
      var rows = [perRow, perRow, total - perRow * 2];
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
      return shelves;
    },
  },
  created: function () {
    // this.getCrimes()
    // console.log(this.buildShelf(this.cart.theft));
  },
  computed: {
    balance() {},
  },
}).mount("#app");

imageMapResize();
