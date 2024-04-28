let colorList = {
  colors: [
    {
      color: "black",
      category: "hue",
      type: "primary",
      code: {
        rgba: [255, 255, 255, 1],
        hex: "#000",
      },
    },
    {
      color: "white",
      category: "value",
      code: {
        rgba: [0, 0, 0, 1],
        hex: "#FFF",
      },
    },
    {
      color: "red",
      category: "hue",
      type: "primary",
      code: {
        rgba: [255, 0, 0, 1],
        hex: "#FF0",
      },
    },
    {
      color: "blue",
      category: "hue",
      type: "primary",
      code: {
        rgba: [0, 0, 255, 1],
        hex: "#00F",
      },
    },
    {
      color: "yellow",
      category: "hue",
      type: "primary",
      code: {
        rgba: [255, 255, 0, 1],
        hex: "#FF0",
      },
    },
    {
      color: "green",
      category: "hue",
      type: "secondary",
      code: {
        rgba: [0, 255, 0, 1],
        hex: "#0F0",
      },
    },
  ],
};

console.log(colorList.colors[0].color);
console.log(colorList.colors[1].category);
console.log(colorList.colors[4].code.hex);
//what is the hex value of color white?
console.log(colorList.colors[1].code.hex);
