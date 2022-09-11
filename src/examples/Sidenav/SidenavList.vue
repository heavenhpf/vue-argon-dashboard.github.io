<template>
  <div
    class="collapse navbar-collapse w-auto h-auto h-100"
    id="sidenav-collapse-main"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-item
          url="/tables"
          :class="getRoute() === 'tables' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الجداول' : 'Tables (Get API)'"
        >
          <template v-slot:icon>
            <i
              class="ni ni-bullet-list-67 mb-0 text-info text-sm opacity-10"
            ></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/post"
          :class="getRoute() === 'post' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الفواتیر' : 'Post API'"
        >
          <template v-slot:icon>
            <i class="fa fa-plus-square-o mb-2 text-primary text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/put"
          :class="getRoute() === 'put' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الفواتیر' : 'Put API'"
        >
          <template v-slot:icon>
            <i class="fa fa-eject text-success mb-2 text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
      <li class="nav-item">
        <sidenav-item
          url="/del"
          :class="getRoute() === 'del' ? 'active' : ''"
          :navText="this.$store.state.isRTL ? 'الفواتیر' : 'Delete API'"
        >
          <template v-slot:icon>
            <i class="fa fa-ban text-warning mb-2 text-sm opacity-10"></i>
          </template>
        </sidenav-item>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  props: {
    cardBg: String
  },
  data() {
    return {
      title: "Argon Dashboard 2",
      controls: "dashboardsExamples",
      isActive: "active"
    };
  },
  components: {
    SidenavItem,
    SidenavCard
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  }
};
</script>
