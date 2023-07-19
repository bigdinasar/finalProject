Vue.createApp({
  data() {
    return {
      page: 1,
      // crimes: [],
      shelf: [],
      cart: {
        theft: [],
        assault: [],
        traffic: [],
        drugs: [],
        clearance: [],
      },
      theft: [
        {
          crime_name: "Burglarizing a commercial location",
          category: "theft",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/angry-rock.png",
        },
        {
          crime_name: "Burglarizing a dwelling",
          category: "theft",
          max_penalty: 15000,
          jail_time: 15,
          image: "fpImages/banana.jpg",
        },
        {
          crime_name: "Stealing an organ",
          category: "theft",
          max_penalty: 50000,
          jail_time: 5,
          image: "fpImages/bear.png",
        },
        {
          crime_name: "Stealing jewelry",
          category: "theft",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/bigBird.png",
        },
        {
          crime_name: "Stealing a television",
          category: "theft",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/black-dog.png",
        },
        {
          crime_name: "Stealing a bicycle",
          category: "theft",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/bottle.png",
        },
        {
          crime_name: "Stealing a couch",
          category: "theft",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/buddy-dogs.png",
        },
        {
          crime_name: "Stealing a generator",
          category: "theft",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/coke.png",
        },
        {
          crime_name: "Stealing a bed",
          category: "theft",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/color-tab.png",
        },
        {
          crime_name: "Stealing a car",
          category: "theft",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/confused-dog.png",
        },
        {
          crime_name: "Stealing a train",
          category: "theft",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/cool-rock.webp",
        },
      ],
      assault: [
        {
          crime_name: "Committing murder",
          category: "assault",
          max_penalty: 10000,
          jail_time: 25,
          image: "fpImages/crystal.png",
        },
        {
          crime_name: "Causing bodily injury to an innocent bystander",
          category: "assault",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/floppy.webp",
        },
        {
          crime_name: "Causing serious bodily injury to an innocent bystander",
          category: "assault",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/flowers.png",
        },
        {
          crime_name: "Causing an innocent bystander to lose consciousness",
          category: "assault",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/fluffy-dog.png",
        },
        {
          crime_name: "Causing bodily injury to law enforcement",
          category: "assault",
          max_penalty: 10000,
          jail_time: 25,
          image: "fpImages/full-trash.jpg",
        },
        {
          crime_name:
            "Causing serious bodily injury ot a bystander through arson",
          category: "assault",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/trask-can.jpg",
        },
        {
          crime_name:
            "Causing substantial bodily injury to a bystander through arson",
          category: "assault",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/turtle-holding-pencil.png",
        },
        {
          crime_name: "Committing arson in a way that endangers human life",
          category: "assault",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/ghost.png",
        },
        {
          crime_name: "Stalking",
          category: "clearance",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/girl-pencil.png",
        },
      ],
      traffic: [
        {
          crime_name: "Driving without a seatbelt",
          category: "traffic",
          max_penalty: 45,
          jail_time: 0,
          image: "fpImages/glasses-rock.png",
        },
        {
          crime_name: "Driving with an expired drivers license",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/viscious.jpg",
        },
        {
          crime_name: "Driving with no drivers license",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/green-eye-cat.png",
        },
        {
          crime_name: "Avoiding getting pulled over by an officer",
          category: "traffic",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/grey-cat.png",
        },
        {
          crime_name: "Leaving the scene of an accident",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/grouchy-cat.png",
        },
        {
          crime_name: "DUI",
          category: "traffic",
          max_penalty: 1310,
          jail_time: 0.5,
          image: "fpImages/grumpy-rock.png",
        },
        {
          crime_name: "Reckless driving",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/weed-png",
        },
        {
          crime_name: "Unsafe lane travel",
          category: "traffic",
          max_penalty: 200,
          jail_time: 0,
          image: "fpImages/heart-dog.png",
        },
        {
          crime_name: "Not having two working headlights",
          category: "traffic",
          max_penalty: 1000,
          jail_time: 0,
          image: "fpImages/jewels.png",
        },
        {
          crime_name: "DUI refusal",
          category: "traffic",
          max_penalty: 500,
          jail_time: 1,
          image: "fpImages/jumpt-pencil.png",
        },
        {
          crime_name: "Driving with expired registration",
          category: "traffic",
          max_penalty: 750,
          jail_time: 0,
          image: "fpImages/kid-marker.png",
        },
        {
          crime_name: "Going 0-10 MPH over the speed limit in a school zone",
          category: "traffic",
          max_penalty: 140,
          jail_time: 0,
          image: "fpImages/white-dog.png",
        },
        {
          crime_name: "Going 11-19 MPH over the speed limit in a school zone",
          category: "traffic",
          max_penalty: 240,
          jail_time: 0,
          image: "fpImages/winky-dog.webp",
        },
        {
          crime_name: "Going 20+ MPH over the speed limit in a school zone",
          category: "traffic",
          max_penalty: 440,
          jail_time: 0,
          image: "fpImages/marshmallow.png",
        },
        {
          crime_name:
            "Going 1-10 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 170,
          jail_time: 0,
          image: "fpImages/max.png",
        },
        {
          crime_name:
            "Going 11-15 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 220,
          jail_time: 0,
          image: "fpImages/menacing-rock.png",
        },
        {
          crime_name:
            "Going 16-20 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 320,
          jail_time: 0,
          image: "fpImages/milk.png",
        },
        {
          crime_name:
            "Going 21-25 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 470,
          jail_time: 0,
          image: "fpImages/notebook.png",
        },
        {
          crime_name:
            "Going 26-30 MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 670,
          jail_time: 0,
          image: "fpImages/orange-cat.png",
        },
        {
          crime_name:
            "Going 31+ MPH over the speed limit in a construction zone",
          category: "traffic",
          max_penalty: 870,
          jail_time: 0,
          image: "fpImages/orange-stripe-cat.png",
        },
      ],
      drugs: [
        {
          crime_name: "Possession of drug paraphernalia",
          category: "drugs",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/peeping-dog.png",
        },
        {
          crime_name: "Sale of drug paraphernalia",
          category: "drugs",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/pencil-2.png",
        },
        {
          crime_name: "Sale of drug paraphernalia to a minor",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/pot.png",
        },
        {
          crime_name: "Selling marijuana",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/pencil.png",
        },
        {
          crime_name: "Possession of marijuana",
          category: "drugs",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/present-cat.png",
        },
        {
          crime_name: "Cultivating marijuana",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/purple-cat-2.png",
        },
        {
          crime_name: "Possession of cocaine",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/raymond.png",
        },
        {
          crime_name: "Selling cocaine",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/purple-cat.png",
        },
        {
          crime_name: "Possession of heroin",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/red-cheek-child.png",
        },
        {
          crime_name: "Selling heroin",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/red-pencil.webp",
        },
        {
          crime_name: "Possession of meth",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/reflection-dog.webp",
        },
        {
          crime_name: "Selling meth",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/rico.png",
        },
        {
          crime_name: "Possession of MDMA",
          category: "drugs",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/rock.png",
        },
        {
          crime_name: "Selling MDMA",
          category: "drugs",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/rocky-rock.png",
        },
      ],
      clearance: [
        {
          crime_name: "Throwing stones from a car",
          category: "clearance",
          max_penalty: 50,
          jail_time: 0,
          image: "fpImages/rottweiler.png",
        },
        {
          crime_name: "Throwing snowballs",
          category: "clearance",
          max_penalty: 50,
          jail_time: 0,
          image: "fpImages/salt.png",
        },
        {
          crime_name: "throwing bricks onto the road",
          category: "clearance",
          max_penalty: 850,
          jail_time: 0.08,
          image: "fpImages/samone.png",
        },
        {
          crime_name: "Driving blindfolded",
          category: "clearance",
          max_penalty: 3000,
          jail_time: 1,
          image: "fpImages/scary-pencil.png",
        },
        {
          crime_name: "Arson damages exceeding $5000",
          category: "clearance",
          max_penalty: 10000,
          jail_time: 15,
          image: "fpImages/scary-rock.png",
        },
        {
          crime_name: "Arson damages ranging from  $500 to $1500",
          category: "clearance",
          max_penalty: 2500,
          jail_time: 1,
          image: "fpImages/scissors-pencil.png",
        },
        {
          crime_name: "Arson damages ranging from $1500 to $5000",
          category: "clearance",
          max_penalty: 5000,
          jail_time: 5,
          image: "fpImages/shiny-dogs.png",
        },
        {
          crime_name: "Arson damages under $500",
          category: "clearance",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/skull.png",
        },
        {
          crime_name: "Driving a car with tinted windows",
          category: "traffic",
          max_penalty: 50,
          jail_time: 0,
          image: "fpImages/squall.png",
        },
        {
          crime_name: "Driving a car without tail lights",
          category: "traffic",
          max_penalty: 40,
          jail_time: 0,
          image: "fpImages/staring-rock.png",
        },
        {
          crime_name: "Driving an unsafe vehicle",
          category: "traffic",
          max_penalty: 240,
          jail_time: 0,
          image: "fpImages/stool-dog.png",
        },
        {
          crime_name: "Forging a prescription",
          category: "clearance",
          max_penalty: 1000,
          jail_time: 0.5,
          image: "fpImages/tab.png",
        },
      ],
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
      console.log("shelf: ", this.shelf);
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
