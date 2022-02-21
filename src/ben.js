class Ben {
  static punchL(me) {
    console.log("q");
    me.classList.remove("me");

    setTimeout(() => {
      me.classList.add("me2");
    }, 50);
    me.classList.remove("me2");
    me.classList.remove("me3");
    me.classList.add("me");
  }

  static punchR(me) {
    console.log("e");
    me.classList.remove("me");

    setTimeout(() => {
      me.classList.add("me3");
    }, 50);
    me.classList.remove("me2");
    me.classList.remove("me3");
    me.classList.add("me");
  }

  static walkForward(position, me) {
    // console.log("rigth");
    position += 10;
    me.style = `
   left:${position}px`;
    return position;
  }

  static walkBack(position, me) {
    position -= 10;
    me.style = `
      left:${position}px`;
    return position;
  }
}

module.exports = Ben;
