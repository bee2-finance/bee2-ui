<template>
<div>
  <div id="bee">
    <div class="leg" id="right"></div>
    <div id="body">
      <div id="face"></div>
    </div>
    <div class="leg" id="left"></div>
  </div>
    <!-- <h1>Happy Valentine's<br><span>Bee Mine</span></h1> -->
</div>
</template>
<style scoped>
h1, h2 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  position: absolute;
  width: 100%;
  z-index: 10;
}

h1 {
  font-size: 18px;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.5);
  top: 16%;
}
@keyframes body-bounce {
  from {
    top: 0.2142857143rem;
  }
  to {
    top: 0.3rem;
  }
}
@keyframes top-bend {
  from {
    transform: rotate(0deg);
    top: 0.2rem;
  }
  to {
    transform: rotate(20deg);
    top: 0.3rem;
  }
}
@keyframes bottom-bend {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-20deg);
  }
}
html, body {
  background-color: skyblue;
  height: 100%;
  width: 100%;
  margin: 0;
}

#bee-container {
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  position: absolute;
}

#bee {
  position: relative;
}
#bee #body {
  height: 3rem;
  width: 5.4rem;
  background-color: gold;
  background-image: linear-gradient(to right, transparent 34%, black 34%, black 49%, transparent 49%, transparent 61%, black 61%, black 76%, transparent 76%);
  border-radius: 4.5rem;
  position: relative;
  animation: body-bounce 0.33s 0s alternate infinite;
}
#bee #body:before, #bee #body:after {
  content: '';
  display: block;
  position: absolute;
  top: -1.7647058824rem;
  width: 2.7272727273rem;
  height: 2.7272727273rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-top-left-radius: 3rem;
  border-top-right-radius: 3rem;
  border-bottom-right-radius: 3rem;
  border: 2px solid rgba(0, 0, 0, 0.5);
}
#bee #body:before {
  left: 40%;
  transform: rotate(-15deg);
}
#bee #body:after {
  border-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
  left: 20%;
}
#bee #body #face:before, #bee #body #face:after {
  content: '';
  display: block;
  position: absolute;
  height: 0.6rem;
  width: 0.375rem;
  background-color: black;
  border-radius: 50%;
  top: 1rem;
}
#bee #body #face:before {
  left: 6%;
}
#bee #body #face:after {
  left: 20%;
}

.leg {
  position: absolute;
  top: 100%;
}
.leg:before, .leg:after {
  content: '';
  display: block;
  position: absolute;
  width: 0.3rem;
  height: 1.2rem;
  background-color: black;
  border-radius: 3rem;
}
.leg:before {
  top: 0;
  transform-origin: top;
  animation: top-bend 0.33s 0s alternate infinite;
}
.leg:after {
  top: 1.2rem;
  transform-origin: bottom;
  animation: bottom-bend 0.33s 0s alternate infinite;
}
.leg#left {
  left: 52%;
}
.leg#right {
  left: 66%;
}

</style>