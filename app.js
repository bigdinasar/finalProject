Vue.createApp({
  data() {
    return {
      page: 1,
      crimes: [],
      cart: {
        theft: [{crime_name: 'Throwing stones from a car',
        category: 'clearance',
        max_penalty: 50,
        jail_time: 0,
        image: "334366.png"},
        {crime_name: 'Throwing snowballs',
        category: 'clearance',
        max_penalty: 50,
        jail_time: 0,
        image: "334366.png"},
        {crime_name: 'throwing bricks onto the road',
        category: 'clearance',
        max_penalty: 850,
        jail_time: 0.08,
        image: "334366.png"}],
        assault: [],
        traffic: [],
        drugs: [],
        clearance: [],
      },
      theft: [{crime_name: 'Throwing stones from a car',
      category: 'clearance',
      max_penalty: 50,
      jail_time: 0,
      image: "334366.png"},
      {crime_name: 'Throwing snowballs',
      category: 'clearance',
      max_penalty: 50,
      jail_time: 0,
      image: "446-4467954_cute-rock-clipart-png-download-cute-rock-clipart-png-download.png"},
      {crime_name: 'throwing bricks onto the road',
      category: 'clearance',
      max_penalty: 850,
      jail_time: 0.08,
      image: "GAWS_WinterAppeal23-CTA-dog.png"},
      {crime_name: 'Throwing stones from a car',
      category: 'clearance',
      max_penalty: 50,
      jail_time: 0,
      image: "334366.png"},
      {crime_name: 'Throwing snowballs',
      category: 'clearance',
      max_penalty: 50,
      jail_time: 0,
      image: "446-4467954_cute-rock-clipart-png-download-cute-rock-clipart-png-download.png"},
      {crime_name: 'throwing bricks onto the road',
      category: 'clearance',
      max_penalty: 850,
      jail_time: 0.08,
      image: "GAWS_WinterAppeal23-CTA-dog.png"},
      {crime_name: 'throwing bricks onto the road',
      category: 'clearance',
      max_penalty: 850,
      jail_time: 0.08,
      image: "GAWS_WinterAppeal23-CTA-dog.png"}],
      assault: [      {crime_name: 'throwing bricks onto the road',
      category: 'clearance',
      max_penalty: 850,
      jail_time: 0.08,
      image: "GAWS_WinterAppeal23-CTA-dog.png"}],
      traffic: [      {crime_name: 'throwing bricks onto the road',
      category: 'clearance',
      max_penalty: 850,
      jail_time: 0.08,
      image: "446-4467954_cute-rock-clipart-png-download-cute-rock-clipart-png-download.png"}],
      drugs: [      {crime_name: 'throwing bricks onto the road',
      category: 'clearance',
      max_penalty: 850,
      jail_time: 0.08,
      image: "48-481976_purple-cat-clipart.png"}],
      clearance: [      {crime_name: 'throwing bricks onto the road',
      category: 'clearance',
      max_penalty: 850,
      jail_time: 0.08,
      image: "48-481976_purple-cat-clipart.png"}],
      shelf: []
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
      this.shelf = shelves;
      console.log("shelf: ", this.shelf)
    },
  },
  created: function () {
    // this.getCrimes()
    console.log(this.buildShelf(this.cart.theft));
  },
  computed: {
    balance() {},
  },
}).mount("#app");

imageMapResize();
