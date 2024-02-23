const Amar = {
  name: "Amar",
  profession: "singer",
  location: "Goa",
  talent: "Country music",
  additions: "plays guitar",
  knowledge() {
    var a =
      "strong songwriting and accurate composition is the base for good music";
    return a;
  },
};

const Akbar = {
  name: "Akbar",
  profession: "chef",
  location: "Mumbai",
  talent: "deserts",
  knowledge() {
    var b = "adding the right ingredients will give a delicious food!!";
    return b;
  },
};

const Anthony = {
  name: "Anthony",
  profession: "magician",
  location: "Kashmir",
  talent: "Tricks",
  knowledge() {
    var c =
      "impressing the audience with great showmanship and good multitasking is the success key to magic shows";
    return c;
  },
};

// or create one general function (constructors) and create new object with constructor's properties for
//amar,akbar and anthony

function exchanging(friend) {
  console.log(
    `${this.name} is a successful ${friend.profession} and is now an expert in ${friend.talent}`
  );
  console.log("He knows that " + friend.knowledge());
}

exchanging.call(Amar, Akbar);
exchanging.call(Amar, Anthony);
exchanging.call(Akbar, Amar);
exchanging.call(Akbar, Anthony);
exchanging.call(Anthony, Amar);
exchanging.call(Anthony, Akbar);
