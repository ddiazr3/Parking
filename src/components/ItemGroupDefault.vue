<template>
<div>

    <sidebar-item :menu="true" :link="{
      name: items.name,
      icon: items.icon
    }">
        <div v-for="item in items.children" :key="item.id">

           <template v-if="!item.children">
            <sidebar-item :link="{
                            name: item.name,
                            path: item.path,
                            icon: item.icon,
                          }">
            </sidebar-item>
           </template>
        </div>
    </sidebar-item>
</div>
</template>

<script>
import ItemDefault from './ItemDefault.vue';
export default {
    components: {
        ItemDefault
    },
    name: "base-item-group-default",
    props: {
        items: {
            type: Object,
            default: [],
        }
    },
};
</script>
