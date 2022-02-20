<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="powt"></div>
  <div class="me" id="me" ref="myme"></div>
  <button @keydown="keybordcatcher($event)" clas="btn">start</button>
  <div class="kumtorbası"></div>
  <div class="beko"></div>
  <div class="bam" ref="bambam"><img src="./assets/bam33.png" /></div>
</template>

<script>
import Music from "./assets/wtihoutmecut.mp3";
export default {
  name: "App",

  data() {
    return { position: 600, play: false };
  },

  methods: {
    keybordcatcher(e) {
      let me = this.$refs.myme;
      let mybam = this.$refs.bambam;
      console.log(this.position);

      if (this.play == false) {
        this.play = true;
        const audio = new Audio(Music);
        audio.play();
      }

      if (e.keyCode == "39") {
        console.log(39);
        this.position = Ben.walkForward(this.position, me);
      }

      if (e.keyCode == "37") {
        console.log(37);
        this.position = Ben.walkBack(this.position, me);
      }

      if (e.keyCode == "81") {
        console.log(81);
        Ben.punchL(me);
      }

      if (e.keyCode == "69") {
        console.log(69);
        Ben.punchR(me);
      }
      if (this.position == 900) {
        console.log("his");
        setTimeout(() => {
          mybam.style = `opacity:1;`;
        }, 150);

        setTimeout(() => {
          mybam.style = `opacity:0;`;
        }, 2500);
      }
    },
  },
};

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
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-image: url(./assets/ring3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.me {
  object-fit: cover;
  position: absolute;
  width: 500px;
  height: 700px;

  left: 600px;
  top: 300px;
  background-image: url(./assets/RESV1.png);
  background-repeat: no-repeat;
}
.me2 {
  position: absolute;
  width: 500px;
  height: 600px;

  left: 600px;
  animation-name: leftpunch;
  animation-duration: 200ms;
  background-repeat: no-repeat;
}
@keyframes leftpunch {
  /* 0% {
          background-image: url(./gourd.png);
        } */
  100% {
    background-image: url(./assets/RESV2.png);
  }
}

.me3 {
  position: absolute;
  width: 500px;
  height: 600px;

  left: 600px;
  animation-name: rightpunch;
  animation-duration: 200ms;
  background-repeat: no-repeat;
}
@keyframes rightpunch {
  0% {
  }
  100% {
    background-image: url(./assets/RES3.png);
  }
}
#powt {
  font-size: 200px;
  position: absolute;
  left: 50%;
}

.kumtorbası {
  background-image: url(./assets/kumtorbası.png);
  position: absolute;
  z-index: -1;
  width: 300px;
  height: 550px;
  top: 100px;
  left: 1200px;
  background-repeat: no-repeat;
}
.beko {
  background-image: url(./assets/bekotra.png);

  z-index: -1;
  position: absolute;
  width: 250px;
  height: 550px;
  background-repeat: no-repeat;
  top: 320px;
  left: 1270px;
}
.bam {
  position: absolute;
  opacity: 0;
  top: 420px;
  left: 1250px;
}
</style>
