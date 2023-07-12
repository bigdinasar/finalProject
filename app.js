Vue.createApp({
    data() {
        return {
            page: 1,
            crimes: []
        }
    },
    methods : {
        getCrimes: function() {
            //https://localhost:8080/expenses
            //https://crimes.codeschool.cloud/expenses
            fetch('https://localhost:8080/crimes')
            .then(response => response.json()).then((data) => {
                this.crimes = data;
            })
        },
        goToPage: function(page) {
            this.page = page
        }



    },
    created : function() {
        this.getCrimes()
    },
    computed: {
        balance() {
            if (this.search && this.filteredExpenses) {
                return this.filteredExpenses.reduce((total, expense) => total + expense.amount, 0);
            }
            else {
                return this.expenses.reduce((total, expense) => total + expense.amount, 0);
            }
        }
    }
}).mount("#app");