<template>
  <nav class="w-full md:min-h-screen md:w-24 border-b md:border-r lg:w-72">
    <ul class="flex md:flex-col justify-center space-x-2 md:space-y-2 py-2 md:py-10">
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
