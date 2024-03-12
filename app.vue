<template>
  <AppContainer>
    <Sidebar>
      <SidebarItem :active="true">
        <SidebarButton>
          <Icon name="ph:house-fill" />
        </SidebarButton>
        <SidebarLabel>Dashboard</SidebarLabel>
      </SidebarItem>

      <SidebarItem>
        <SidebarButton>
          <Icon name="ph:bed-fill" />
        </SidebarButton>
        <SidebarLabel>Manage Beds</SidebarLabel>
      </SidebarItem>
    </Sidebar>
    <ContentContainer>
      <NuxtPage />
    </ContentContainer>
  </AppContainer>
</template>
