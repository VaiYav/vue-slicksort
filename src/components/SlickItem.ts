import { h, defineComponent } from 'vue';
import { ElementMixin } from '../ElementMixin';

export const SlickItem = defineComponent({
  name: 'SlickItem',
  mixins: [ElementMixin],
  props: {
    item:{
      type: Object,
      default: () => ({}),
    },
    keyUid: {
      type: String,
      default: 'id',
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
  render() {
    return h(this.tag, {
      'uid': this.item[this.keyUid],
    }, this.$slots.default?.());
  },
});
