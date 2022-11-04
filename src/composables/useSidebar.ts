const show = ref(false);

const useSidebar = () => {
    const toggleSidebar = () => {
        show.value = !show.value;
    };

    return {
        show,
        toggleSidebar
    };
};

export { useSidebar };
export default useSidebar;
