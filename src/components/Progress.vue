<template>
<div id="progress-wrap">
  <div id="goal">{{ honeyReward }} {{ symbol }}</div>
  <div id="glass">
    <div id="progress" :style="{width: precent}">
    </div>
  </div>
  <!-- <div class="goal-stat">
    <span class="goal-number">$1,640</span>
    <span class="goal-label">Raised</span>
  </div>
  <div class="goal-stat">
    <span class="goal-number"><div id="countdown"></div></span>
    <span class="goal-label">Days to Go</span>
  </div>
  <div class="goal-stat">
    <span class="goal-number">38</span>
    <span class="goal-label">Sponsors</span>
  </div> -->
</div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    staked: {
      default: 0,
      type: Number
    },
    honeyReward: {
      default: 10000,
      type: Number
    },
    symbol: String
  },
  computed: {
    precent() {
      return (this.staked / this.honeyReward) * 100 + '%'
    }
  }
}
</script>


<style lang="less" scoped>
#progress-wrap {
  padding: 20px 0;
  box-sizing: border-box;
}

#goal {
  font-size: 12px;
  text-align: right;
  color: #001f3f;
  margin-bottom: 5px;
  // @media only screen and (max-width : 640px) {
  //   text-align: center;  
  // }
  
}

#glass {
  width: 100%;
  height: 20px;
  background: #a7cac5;
  border-radius: 10px;
  float: left;
  overflow: hidden;
}

#progress {
  float: left;
  width: 16%;
  height: 20px;
  background: #84B5AE;
  z-index: 333;
  //border-radius: 5px;
}

.goal-stat {
  width: 25%;
  //height: 30px;
  padding: 10px;
  float: left;
  margin: 0;
  color: #001f3f;
  
  // @media only screen and (max-width : 640px) {
  //   width: 50%;
  //   text-align: center;
  // }
}

.goal-number, .goal-label {
  display: block;
}

.goal-number {
  font-weight: bold;
}
.total-stake {
  color: #001f3f;
  padding: 0 10px;
  line-height: 20px;
  font-size: 12px;
  float: right;
}
</style>