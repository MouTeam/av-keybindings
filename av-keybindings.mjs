import {registerSettings} from "./module/settings.mjs";

Hooks.on("init", function () {
    registerSettings();
});
