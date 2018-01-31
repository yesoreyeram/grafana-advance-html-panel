///<reference path="../../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import kbn from 'app/core/utils/kbn';
import {
    loadPluginCss,
    MetricsPanelCtrl
} from "app/plugins/sdk";
import * as utils from "./utils";

const plugin_id = "grafana-advance-html-panel";
const config: any = {
    plugin_id: plugin_id,
    panelDefaults: {
    },
    list_of_stylesheets: {
        dark: "plugins/" + plugin_id + "/css/default.dark.css",
        light: "plugins/" + plugin_id + "/css/default.light.css"
    },
    editorTabs: [{
        name: "Options",
        template: "/partials/options.html",
        position: 2
    }],
}
export {
    kbn,
    loadPluginCss,
    MetricsPanelCtrl,
    utils,
    config
}