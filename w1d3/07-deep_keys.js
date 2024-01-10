const marianaTrench = {
  level1: {
    level2: {
      level3: {
        level4: {
          contents: "some crashed boat",
          dangerLevel: "high",
          citizens: "fishies",
        },
      },
    },
  },
};

// marianaTrench.level1.level2.level3.level4.contents;
// marianaTrench.level1.level2.level3.level4.dangerLevel;

// Bookmarks!

const mtLevel4 = marianaTrench.level1.level2.level3.level4;

marianaTrench.level1.level2.level3.level4.contents = "A BIG BOAT";
console.log(marianaTrench.level1.level2);

mtLevel4.contents = "A VERY BIG BOAT";
console.log(marianaTrench.level1.level2);
