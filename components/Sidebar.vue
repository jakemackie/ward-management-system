<template>
  <div class="hidden md:block">
    <nav class="min-h-screen w-24 border-r lg:w-72">
      <ul class="flex flex-col justify-center space-y-2 py-10">
        <NuxtLink to="/">
          <SidebarItem :active="true">
            <SidebarButton>
              <Icon name="ph:house-fill" />
            </SidebarButton>
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>
        </NuxtLink>

        <NuxtLink to="/beds">
          <SidebarItem>
            <SidebarButton>
              <Icon name="ph:bed-fill" />
            </SidebarButton>
            <SidebarLabel>Beds</SidebarLabel>
          </SidebarItem>
        </NuxtLink>
      </ul>
    </nav>
  </div>
</template>
