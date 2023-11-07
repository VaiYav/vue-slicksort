<template>
  <div class="root">
<!--    <GroupExample />-->
      <div style="width: 100%">
          <SlickList v-model:list="items" class="list" >
              <SlickItem
                    style="width: 100%"
                    v-for="(item, index) in items"
                    :key="item.id"
                    :index="index"
                    :item="item"
                    class="item"
              >
                  <div style="background: red; width: 100%; height: 30px">
                      {{item.value}} {{item.id}} {{index}}
                  </div>
              </SlickItem>
          </SlickList>
      </div>
  </div>
</template>

<script>
import { range, random } from './util';

import SortableItem from './components/SortableItem.vue';
import SortableList from './components/SortableList.vue';
import InnerList from './components/InnerList.vue';
import GroupExample from './components/GroupExample.vue';
import {SlickList} from '../src/components/SlickList';
import {SlickItem} from '../src/components/SlickItem';
import {HandleDirective} from '../src/HandleDirective';

let id = 100;

export default {
  name: 'Example',
  components: {
      SlickItem,
      SlickList,
    SortableItem,
    SortableList,
    InnerList,
    GroupExample,
  },
    directives: [HandleDirective],
  data() {
    return {
      items: range(100).map((value) => {
        return {
          value: 'Item ' + (value + 1),
          height: random(49, 120),
          id: id++,
        };
      }),
      lists: range(3).map((val) => {
        return {
          id: id++,
          name: 'List ' + (val + 1),
          items: range(3).map((value) => {
            return {
              value: 'Item ' + (value + 1),
              id: id++,
            };
          }),
        };
      }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
