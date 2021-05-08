<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <ServerSidePagination/>
    </q-page-container>
  </q-layout>
</template>

<script>
import ServerSidePagination from "./components/ServerSidePagination";

export default {
  components: {
    ServerSidePagination,
  },
  setup() {
  }
}
</script>
