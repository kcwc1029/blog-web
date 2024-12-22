<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Vue App</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/dashboardview">dashboardview</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/teampage">teampage</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/userpage">userpage</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
    margin-bottom: 20px;
}
a.hover,
a.active,
a.router-link-activate {
    color: rgb(248, 233, 123);
    border-color: coral;
    background-color: lightpink;
}
</style>
