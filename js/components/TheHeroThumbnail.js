export default {
  name: "TheHeroThumb",

  props: {
    hero: Object
  },

  template:
  `
  <li @click="loadLightboxData">
    <img :src='"images/" + hero.biopic' alt="hero image" width="150">
    <!--<div class="sprite"></div>-->
    <div class="red-bumper"></div>
    <h5>{{hero.name}}</h5>
  </li>
  `,

  methods: {
    loadLightboxData() {
      this.$emit('loadlb', this.hero);
    }
  }
}