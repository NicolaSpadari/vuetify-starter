<template>
    <v-app-bar color="primary">
        <template #prepend>
            <v-app-bar-nav-icon @click="toggleSidebar()" />
        </template>

        <v-app-bar-title>
            Vuetify 3
        </v-app-bar-title>

        <template #append>
            <v-btn icon="mdi-theme-light-dark" @click="toggleTheme()" />
        </template>
    </v-app-bar>
</template>

<script lang="ts" setup>
    const theme = useTheme();
    const { toggleSidebar } = useSidebar();

    const toggleTheme = () => {
        theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
    };
</script>
