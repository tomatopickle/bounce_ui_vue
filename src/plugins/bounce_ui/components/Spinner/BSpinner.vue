<template>
  <div class="spinner">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
    <div class="bar5"></div>
    <div class="bar6"></div>
    <div class="bar7"></div>
    <div class="bar8"></div>
    <div class="bar9"></div>
    <div class="bar10"></div>
    <div class="bar11"></div>
    <div class="bar12"></div>
  </div>
</template>
<style lang="stylus">
div.spinner {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 22px;
  min-height: 22px;
  display: inline-block;
  margin: auto;
  background: transparent;
  border-radius: 10px;
}

.btn.loading {
  color: transparent !important;
  pointer-events: none;
}

.btn.loading div.spinner {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  background-color: transparent;
}

div.spinner div {
  width: 2px;
  height: 6px;
  background: black;
  position: absolute;
  left: 49%;
  top: 43%;
  opacity: 0;
  -webkit-border-radius: 50px;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  -webkit-animation: spinnerFade 1s linear infinite;
}

.btn div.spinner div {
  background: black;
}

@keyframes spinnerFade {
  from {
    opacity: 1;
  }

  to {
    opacity: 0.25;
  }
}

.dark, .btn-primary, .btn-secondary, .btn-danger, .btn-success {
  div.spinner div {
    background: white;
  }
}

div.spinner div.bar1 {
  -webkit-transform: rotate(0deg) translate(0, -130%);
  -webkit-animation-delay: 0s;
}

div.spinner div.bar2 {
  -webkit-transform: rotate(30deg) translate(0, -130%);
  -webkit-animation-delay: -0.9167s;
}

div.spinner div.bar3 {
  -webkit-transform: rotate(60deg) translate(0, -130%);
  -webkit-animation-delay: -0.833s;
}

div.spinner div.bar4 {
  -webkit-transform: rotate(90deg) translate(0, -130%);
  -webkit-animation-delay: -0.7497s;
}

div.spinner div.bar5 {
  -webkit-transform: rotate(120deg) translate(0, -130%);
  -webkit-animation-delay: -0.667s;
}

div.spinner div.bar6 {
  -webkit-transform: rotate(150deg) translate(0, -130%);
  -webkit-animation-delay: -0.5837s;
}

div.spinner div.bar7 {
  -webkit-transform: rotate(180deg) translate(0, -130%);
  -webkit-animation-delay: -0.5s;
}

div.spinner div.bar8 {
  -webkit-transform: rotate(210deg) translate(0, -130%);
  -webkit-animation-delay: -0.4167s;
}

div.spinner div.bar9 {
  -webkit-transform: rotate(240deg) translate(0, -130%);
  -webkit-animation-delay: -0.333s;
}

div.spinner div.bar10 {
  -webkit-transform: rotate(270deg) translate(0, -130%);
  -webkit-animation-delay: -0.2497s;
}

div.spinner div.bar11 {
  -webkit-transform: rotate(300deg) translate(0, -130%);
  -webkit-animation-delay: -0.167s;
}

div.spinner div.bar12 {
  -webkit-transform: rotate(330deg) translate(0, -130%);
  -webkit-animation-delay: -0.0833s;
}
</style>