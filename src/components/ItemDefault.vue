<template>
<div>

    <sidebar-item :link="{
                          name: item.name,
                          path: item.path,
                          icon: item.icon,
                         }">
                         <div slot="item"></div>
    </sidebar-item>
</div>
</template>

<script>
import ItemGroupDefault from './ItemGroupDefault.vue';
export default {
  components: { ItemGroupDefault },
    name: "base-item-default",
    props: {
        item: {
            type: Object,
            default: [],
        }
    }
};
</script>
