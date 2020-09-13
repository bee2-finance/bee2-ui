<template>
  <div class="countdown-container">
    <div class="countdown-inner" v-if="show">
      <h2>⏰ Pool Active Countdown</h2>
      <ul>
        <li><span id="days">{{ days }}</span>days</li>
        <li><span id="hours">{{ hours }}</span>Hours</li>
        <li><span id="minutes">{{ mins }}</span>Minutes</li>
        <li><span id="seconds">{{ secs }}</span>Seconds</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'countdown',
  props: {
    starttime: {
      default: 1600128000,
      type: Number
    }
  },
  data() {
    return {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
      x: null,
      show: true
    }
  },
  mounted() {
    this.count()
  },
  destroyed() {
    clearInterval(this.x)
  },
  methods: {
    count() {
      const second = 1000
      const minute = second * 60
      const hour = minute * 60
      const day = hour * 24
      let countDown = new Date(this.starttime * 1000).getTime()
      this.x = setInterval(() => {
        let now = new Date().getTime()
        if (countDown <= now) {
          this.show = false
          return
        }
        const distance = countDown - now
        this.days = Math.floor(distance / (day))
        this.hours = Math.floor((distance % (day)) / (hour))
        this.mins = Math.floor((distance % (hour)) / (minute))
        this.secs = Math.floor((distance % (minute)) / second)
      })
    }
  },
}
</script>
<style lang="less" scoped>
.countdown-container {
  display: flex;
  align-items: center;
  justify-content: center;
  .countdown-inner {
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.1);
  }
  h2 {
    font-weight: normal;
    padding: 0;
    margin: 0;
  }
  ul {
    text-align: center;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    font-size: 0.5em;
    list-style-type: none;
    padding: 1em;
    text-transform: uppercase;
    text-align: center;
  }

  li span {
    display: block;
    font-size: 2rem;
  }
}
</style>
