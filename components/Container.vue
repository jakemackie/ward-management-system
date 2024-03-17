<template>
    <div class="flex flex-col md:flex-row">
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="navbar">
            <Navbar />
        </div>

        <div class="content">
            <NuxtPage />
        </div>
    </div>
</template>

<style>
.sidebar {
    min-height: 100vh;
    min-width: 250px;
}
.navbar {
    min-width: 100vw;
}
.sidebar, .navbar {
    display: none;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: auto;
    padding: 1rem;
}

@media screen and (max-width: 768px) {
    .sidebar {
        display: none;
    }
    .navbar {
        display: block;
    }
}

@media screen and (min-width: 769px) {
    .navbar {
        display: none;
    }
    .sidebar {
        display: flex;
    }
}

</style>