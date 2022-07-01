<template>
  <div>
    <b-pagination first-number last-number :per-page="perPage" :size="size" :value="value" @change="(val) => $emit('change', val)" :align="align" :total-rows="total">
      <template v-slot:prev-text>
        <a class="page-link" aria-label="Previous">
          <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
        </a>
      </template>
      <template v-slot:next-text>
        <a class="page-link" aria-label="Next">
          <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
        </a>
      </template>
    </b-pagination>
  </div>
</template>
<script>
export default {
  name: "base-pagination",
  props: {
    pageCount: {
      type: Number,
      default: 0,
      description:
        "Recuento de páginas de paginación. Esto debe especificarse en combinación con perPage"
    },
    perPage: {
      type: Number,
      default: 10,
      description:
        "Paginación por página. Debe especificarse con total o pageCount"
    },
    total: {
      type: Number,
      default: 0,
      description:
        "Se puede especificar en lugar de pageCount. El recuento de páginas en este caso será total/por página"
    },
    value: {
      type: Number,
      default: 1,
      description: "Pagination value"
    },
    size: {
      type: String,
      default: "",
      description: "Pagination size"
    },
    align: {
      type: String,
      default: "",
      description: "Pagination alignment (e.g center|start|end)"
    }
  },
};
</script>
