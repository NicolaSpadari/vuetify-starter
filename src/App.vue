<template>
    <v-app>
        <v-main>
            <router-view v-slot="{ Component }">
                <Suspense>
                    <component :is="Component" />
                </Suspense>
            </router-view>
        </v-main>
    </v-app>
</template>

<style>
    html {
        -webkit-tap-highlight-color: transparent;
        scroll-behavior: smooth;
    }
    img {
        -webkit-user-drag: none;
    }
</style>
