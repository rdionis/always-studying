const app = Vue.createApp({
  // this is the Options object
  data() {
    // this is the data option
    return {
      product: "Boots", // product is now a data item
    };
  },
});

// the double syntax {{}} aka mustache syntax allows us to use JavaScript Expressions in Vue, meaning it allows us to run valid JavaScript within our HMTL

//Vue is reactive --- underneath the hood, it has an entire Reactivity System that handles updating, so when a data value changes, anything relying on that data value is going to automatically update for us.
