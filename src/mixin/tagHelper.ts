import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class TagHelper extends Vue {
  addTag(){
    this.$store.commit("createTag");
  }
}