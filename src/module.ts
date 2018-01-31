import {
    kbn,
    loadPluginCss,
    MetricsPanelCtrl,
    utils,
    config
} from "./app/app";
import _ from "lodash";
loadPluginCss(config.list_of_stylesheets);
class GrafanaAdvanceHTMLCtrl extends MetricsPanelCtrl {
    static templateUrl: string = "partials/module.html";
    dataReceived: any;
    $sce: any;
    constructor($scope, $injector, $sce) {
        super($scope, $injector);
        _.defaults(this.panel, config.panelDefaults);
        this.$sce = $sce;
        this.events.on("data-received", this.onDataReceived.bind(this));
        this.events.on("init-edit-mode", this.onInitEditMode.bind(this));
    }
    onInitEditMode() {
        _.each(config.editorTabs, editor => {
            this.addEditorTab(editor.name, "public/plugins/" + config.plugin_id + editor.template, editor.position);
        })
    }
    onDataReceived(data) {
        this.dataReceived = data;
        this.render();
    }
}
GrafanaAdvanceHTMLCtrl.prototype.render = function () {
    if (this.dataReceived) {
        this.panel.output = this.dataReceived.map(d => {
            if (d.type && d.type.toLowerCase() === "html") {
                return {
                    data: d.data,
                    html: d.html
                }
            }
            else return {
                data: d.data,
                html: "-"
            }
        });
        console.log("Received", this.dataReceived);
        console.log("Output", this.panel.output);
    }
}
export {
    GrafanaAdvanceHTMLCtrl as PanelCtrl
};