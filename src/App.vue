<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <div class="me" id="me" ref="myme"></div>
  <div class="info">
    For playing:
    <br />
    1) Click the Start button.
    <br />
    2) Left punch : Q <br />3) Rigth punch :E <br />
    4) For walk standard game keys
  </div>
  <button @keydown="keybordcatcher($event)" class="btn">start</button>
  <div class="kumtorbası" ref="torba"></div>
  <div class="beko"></div>
  <div class="bam" ref="bambam"><img src="./assets/bam33.png" /></div>
  <div class="textt"><h1>Just desktop</h1></div>
</template>

<script>
import Music from "./assets/wtihoutmecut.mp3";

import Ben from "./ben.js";
export default {
  name: "App",

  data() {
    return { play: false };
  },

  methods: {
    keybordcatcher(e) {
      let me = this.$refs.myme;
      let mybam = this.$refs.bambam;
      let torba = this.$refs.torba.getBoundingClientRect().left;
      let position = this.$refs.myme.getBoundingClientRect().left;
      console.log(torba + " " + this.position);

      // console.log(this.position);

      if (this.play == false) {
        this.play = true;
        const audio = new Audio(Music);
        audio.play();
      }

      if (e.keyCode == "39") {
        // console.log(39);
        this.position = Ben.walkForward(position, me);
      }

      if (e.keyCode == "37") {
        console.log(37);
        this.position = Ben.walkBack(position, me);
      }

      if (e.keyCode == "81") {
        // console.log(81);
        Ben.punchL(me);
      }

      if (e.keyCode == "69") {
        // console.log(69);
        Ben.punchR(me);
      }
      if (position + 200 > torba && position + 200 < torba + 100) {
        // console.log("his");
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
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.info {
  top: 10%;
  left: 13%;
  position: absolute;
  color: white;
}
.textt {
  opacity: 0;
}
body {
  background-image: url(./assets/ring3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.btn {
  z-index: 1;
}
.me {
  background-size: contain;
  position: absolute;
  width: 22%;
  height: 50%;

  left: 32%;
  top: 30%;
  background-image: url(./assets/RESV1.png);
  background-repeat: no-repeat;
}
.me2 {
  position: absolute;
  background-size: contain;

  width: 22%;
  height: 50%;
  left: 32%;
  top: 30%;
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
  background-size: contain;

  width: 22%;
  height: 50%;
  left: 32%;
  top: 30%;
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

.kumtorbası {
  background-image: url(./assets/kumtorbası.png);
  background-size: contain;

  position: absolute;
  z-index: -1;
  width: 20%;
  height: 60%;
  top: 13%;
  left: 60%;
  background-repeat: no-repeat;
}
.beko {
  background-image: url(./assets/bekotra.png);
  background-size: contain;

  z-index: -1;
  position: absolute;
  width: 13%;
  height: 20%;
  background-repeat: no-repeat;
  top: 40%;
  left: 65%;
}
.bam {
  position: absolute;

  opacity: 0;
  top: 40%;
  left: 65%;
}

@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .me {
    top: 40%;
  }
  .me2 {
    top: 40%;
  }
  .me3 {
    top: 40%;
  }
  .btn {
    z-index: 1;
  }
  .bam {
    top: 40%;
  }
}

@media only screen and (max-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
  .me {
    opacity: 0;
  }
  .me2 {
    opacity: 0;
  }
  .me3 {
    opacity: 0;
  }
  .bam {
    opacity: 0;
  }
  .kumtorbası {
    opacity: 0;
  }
  .textt {
    opacity: 1;
  }
  .beko {
    opacity: 0;
  }
  .btn {
    z-index: 1;
  }
}
</style>
