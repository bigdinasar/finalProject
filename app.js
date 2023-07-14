Vue.createApp({
    data() {
        return {
            page: 1,
            crimes: [{crime_name:"killin", category:"assualt", max_penalty: 1, jail_time:"1 year"}],
            cart: [{crime_name:"killin", category:"assualt", max_penalty: 1, jail_time:"1 year"}],
            crime: {
                crime_name: "",
                category: "",
                max_penalty: 0,
                jail_time: ""
            },
            thefts: [],
            assaults: [],
            trafficViolations: [],
            drugViolations: [],
            clearances: []
        }
    },
    methods : {
        // getCrimes: function() {
        //     //https://localhost:8080/expenses
        //     //https://crimes.codeschool.cloud/expenses
        //     fetch('https://localhost:8080/crimes')
        //     .then(response => response.json()).then((data) => {
        //         this.crimes = data;
        //     })
        // },
        goToPage: function(page) {
            this.page = page
        },
        addCrime: function(crime) {
            //add crime to cart
            this.cart.append(crime);
            
            //add crime to respective list for receipt (if category is empty, it will not show on receipt)
            if (crime.category == "theft") {
                this.thefts.append(crime)
            };
            if (crime.category == "assault") {
                this.assaults.append(crime)
            };
            if (crime.category == "traffic") {
                this.trafficViolations.append(crime)
            };
            if (crime.category == "drugs") {
                this.drugViolations.append(crime)
            };
            if (crime.category == "clearance") {
                this.clearances.append(crime)
            }
        },
        deleteCrime: function(index) {
            this.cart.splice(index,1);
        }



    },
    created : function() {
        // this.getCrimes()
    },
    computed: {
        balance() {
                return this.cart.reduce((total, crime) => total + crime.max_penalty, 0);
        }
    }
}).mount("#app");

imageMapResize();