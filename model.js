const mongoose = require("mongoose");
const { Schema } = mongoose;
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_LINK);

const CrimeSchema = Schema({
  crime_name: {
    type: String,
    required: [true, "Crime must have a name."],
  },
  category: {
    type: String,
    required: [true, "Crime must have a category."],
    // ["theft", "assault", "traffic", "drugs", "clearance"]
  },
  max_penalty: {
    type: Number,
    required: [true, "Crime must have a max penalty."],
  },
  jail_time: {
    type: String,
    required: [true, "Crime must have a jail time."],
  },
  image: {
    type: String,
    required: [true, "Crime must have a image"],
  },
  clearance_rate: {
    type: Number,
    required: [true, "Crime must have a clearance rate"],
  },
});

const Crime = mongoose.model("Crime", CrimeSchema);

module.exports = {
  Crime: Crime,
};
