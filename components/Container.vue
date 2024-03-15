<template>
    <div class="container">
        <div class="navbar">
            <Navbar />
        </div>
        <div class="sidebar">
            <Sidebar />
        </div>
        <div class="main-content">
            <NuxtPage />
        </div>
    </div>
</template>

<style>
    * {
        margin: 0;
        padding: 0;
    }

    .container {
        display: grid;
        grid-template-columns: auto 1fr;
        height: 100vh;
        overflow: hidden;
    }

    .navbar {
        display: none;
    }

    .sidebar {
        width: 100%;
        height: 100%;
    }

    .main-content {
        width: 100%;
        height: 100%;
    }

    @media (min-width: 769px) {
        .container {
        grid-template-columns: 250px 1fr; 
        }
    
        .navbar {
        display: none;
        }
    }  

    @media (max-width: 768px) {
        .container {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr;
        }

        .navbar {
            display: block;
        }

        .sidebar {
            display: none;
        }
    }
</style>
