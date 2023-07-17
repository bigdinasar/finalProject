const mongoose = require("mongoose");
const { Schema } = mongoose;
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_LINK);

const clearanceList = [
  "Throwing stones from a car",
  "Throwing snowballs",
  "Throwing bricks onto the road",
  "Driving blindfolded",
  "Arson damages exceeding $5000",
  "Arson damages ranging from $500 to $1500",
  "Arson damages ranging from $1500 to $5000",
  "Arson damages under $500",
  "Driving a car with tinted windows",
  "Driving a car without tail lights",
  "Driving an unsafe vehicle",
  "Forging a prescription",
];

const theftList = [
  "Burglarizing a commercial location",
  "Burglarizing a dwelling",
  "Stealing an organ",
  "Stealing jewelry (under $500)",
  "Stealing a television (under $500)",
  "Stealing a bicycle ($1500-$5000)",
  "Stealing a couch ($1500-$5000)",
  "Stealing a generator",
  "Stealing a bed",
  "Stealing a car (exceeding $5000)",
  "Stealing a train (exceeding $5000)",
  ,
];

const assaultList = [
  "Committing murder",
  "Causing bodily injury to an innocent bystander",
  "Causing serious bodily injury to an innocent bystander",
  "Causing an innocent bystander to lose consciousness",
  "Causing bodily injury to law enforcement",
  "Causing serious bodily injury to a bystander through arson",
  "Causing substantial bodily injury to a bystander through arson",
  "Committing arson in a way that endangers human life",
  "Stalking",
];

const trafficList = [
  "Driving without a seatbelt",
  "Driving with an expired drivers license",
  "Driving with no drivers license",
  "Avoiding getting pulled over by an officer",
  "Leaving the scene of an accident",
  "DUI",
  "Reckless driving",
  "Unsafe lane travel",
  "Not having two working headlights",
  "DUI refusal",
  "Driving with expired registration",
  "Going 0-10 MPH over the speed limit in a school zone",
  "Going 11-19 MPH over the speed limit in a school zone",
  "Going 20+ MPH over the speed limit in a school zone",
  "Going 1-10 MPH over the speed limit in a construction zone",
  "Going 11-15 MPH over the speed limit in a construction zone",
  "Going 16-20 MPH over the speed limit in a construction zone",
  "Going 21-25 MPH over the speed limit in a construction zone",
  "Going 26-30 MPH over the speed limit in a construction zone",
  "Going 30+ MPH over the speed limit in a construction zone",
];

const drugsList = [
  "Possession of drug paraphernalia",
  "Sale of drug paraphernalia",
  "Sale of drug paraphernalia to a minor",
  "Selling marijuana",
  "Possession of marijuana",
  "Cultivating marijuana",
  "Possession of cocaine",
  "Selling cocaine",
  "Possession of heroin",
  "Selling heroin",
  "Possession of meth",
  "Selling meth",
  "Possesion of MDMA",
  "Selling MDMA",
];

const CrimeSchema = Schema({
  crime_name: {
    type: String,
    required: [true, "Crime must have a name."],
  },
  category: {
    type: String,
    required: [true, "Crime must have a category."],
  },
  max_penalty: {
    type: Number,
    required: [true, "Crime must have a max penalty."],
  },
  jail_time: {
    type: String,
    required: [true, "Crime must have a jail time."],
  },
});

const Crime = mongoose.model("Crime", CrimeSchema);

module.exports = {
  Crime: Crime,
};
