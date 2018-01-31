System.register(["./app/app", "lodash"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var app_1, lodash_1;
    var GrafanaAdvanceHTMLCtrl;
    return {
        setters:[
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            app_1.loadPluginCss(app_1.config.list_of_stylesheets);
            GrafanaAdvanceHTMLCtrl = (function (_super) {
                __extends(GrafanaAdvanceHTMLCtrl, _super);
                function GrafanaAdvanceHTMLCtrl($scope, $injector, $sce) {
                    _super.call(this, $scope, $injector);
                    lodash_1.default.defaults(this.panel, app_1.config.panelDefaults);
                    this.$sce = $sce;
                    this.events.on("data-received", this.onDataReceived.bind(this));
                    this.events.on("init-edit-mode", this.onInitEditMode.bind(this));
                }
                GrafanaAdvanceHTMLCtrl.prototype.onInitEditMode = function () {
                    var _this = this;
                    lodash_1.default.each(app_1.config.editorTabs, function (editor) {
                        _this.addEditorTab(editor.name, "public/plugins/" + app_1.config.plugin_id + editor.template, editor.position);
                    });
                };
                GrafanaAdvanceHTMLCtrl.prototype.onDataReceived = function (data) {
                    this.dataReceived = data;
                    this.render();
                };
                GrafanaAdvanceHTMLCtrl.templateUrl = "partials/module.html";
                return GrafanaAdvanceHTMLCtrl;
            })(app_1.MetricsPanelCtrl);
            GrafanaAdvanceHTMLCtrl.prototype.render = function () {
                var _this = this;
                if (this.dataReceived) {
                    this.panel.output = this.dataReceived.map(function (d) {
                        if (d.type && d.type.toLowerCase() === "html") {
                            return {
                                data: d.data,
                                html: _this.$sce.trustAsHtml(d.html)
                            };
                        }
                        else
                            return {
                                data: d.data,
                                html: "-"
                            };
                    });
                    console.log("Received", this.dataReceived);
                    console.log("Output", this.panel.output);
                }
            };
            exports_1("PanelCtrl", GrafanaAdvanceHTMLCtrl);
        }
    }
});
//# sourceMappingURL=module.js.map