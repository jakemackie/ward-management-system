<template>
  <nav class="min-h-screen w-24 border-r lg:w-72">
    <ul class="flex flex-col justify-center space-y-2 py-10">
      <NuxtLink to="/">
        <SidebarItem :active="isActive('/')">
          <SidebarButton>
            <Icon name="ph:house-fill" />
          </SidebarButton>
          <SidebarLabel>Dashboard</SidebarLabel>
        </SidebarItem>
      </NuxtLink>

      <NuxtLink to="/beds">
        <SidebarItem :active="isActive('/beds')">
          <SidebarButton>
            <Icon name="ph:bed-fill" />
          </SidebarButton>
          <SidebarLabel>Beds</SidebarLabel>
        </SidebarItem>
      </NuxtLink>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path === path;
    },
  },
};
</script>
