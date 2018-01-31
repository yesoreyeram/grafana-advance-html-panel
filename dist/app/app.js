///<reference path="../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(['app/core/utils/kbn', "app/plugins/sdk", "./utils"], function(exports_1) {
    var kbn_1, sdk_1, utils;
    var plugin_id, config;
    return {
        setters:[
            function (kbn_1_1) {
                kbn_1 = kbn_1_1;
            },
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (utils_1) {
                utils = utils_1;
            }],
        execute: function() {
            plugin_id = "grafana-advance-html-panel";
            config = {
                plugin_id: plugin_id,
                panelDefaults: {},
                list_of_stylesheets: {
                    dark: "plugins/" + plugin_id + "/css/default.dark.css",
                    light: "plugins/" + plugin_id + "/css/default.light.css"
                },
                editorTabs: [{
                        name: "Options",
                        template: "/partials/options.html",
                        position: 2
                    }],
            };
            exports_1("kbn", kbn_1.default);
            exports_1("loadPluginCss", sdk_1.loadPluginCss);
            exports_1("MetricsPanelCtrl", sdk_1.MetricsPanelCtrl);
            exports_1("utils", utils);
            exports_1("config", config);
        }
    }
});
//# sourceMappingURL=app.js.map