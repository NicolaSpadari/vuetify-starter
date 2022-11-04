import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default createVuetify({
    theme: {
        themes: {
            light: {
                colors: {
                    primary: "#2196F3",
                    secondary: "#009688"
                }
            },
            dark: {
                colors: {
                    primary: "#0D47A1",
                    secondary: "#004D40"
                }
            }
        }
    }
});
