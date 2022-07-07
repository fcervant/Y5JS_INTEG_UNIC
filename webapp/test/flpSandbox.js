sap.ui.define(["sap/base/util/ObjectPath", "sap/ushell/services/Container"], function(e) {
    "use strict";
    e.set(["sap-ushell-config"], {
        defaultRenderer: "fiori2",
        bootstrapPlugins: {
            RuntimeAuthoringPlugin: {
                component: "sap.ushell.plugins.rta",
                config: {
                    validateAppVersion: false
                }
            },
            PersonalizePlugin: {
                component: "sap.ushell.plugins.rta-personalize",
                config: {
                    validateAppVersion: false
                }
            }
        },
        renderers: {
            fiori2: {
                componentData: {
                    config: {
                        enableSearch: false,
                        rootIntent: "Shell-home"
                    }
                }
            }
        },
        services: {
            LaunchPage: {
                adapter: {
                    config: {
                        groups: [{
                            tiles: [{
                                tileType: "sap.ushell.ui.tile.StaticTile",
                                properties: {
                                    title: "integracaoUnico",
                                    targetURL: "#integracaoUnico-display"
                                }
                            }]
                        }]
                    }
                }
            },
            ClientSideTargetResolution: {
                adapter: {
                    config: {
                        inbounds: {
                            "integracaoUnico-display": {
                                semanticObject: "integracaoUnico",
                                action: "display",
                                description: "Integra��o Unico",
                                title: "integracaoUnico",
                                signature: {
                                    parameters: {}
                                },
                                resolutionResult: {
                                    applicationType: "SAPUI5",
                                    additionalInformation: "SAPUI5.Component=votorantim.Y5JS_INTEGRACAO_UNICO",
                                    url: sap.ui.require.toUrl("votorantim/Y5JS_INTEGRACAO_UNICO")
                                }
                            }
                        }
                    }
                }
            },
            NavTargetResolution: {
                config: {
                    enableClientSideTargetResolution: true
                }
            }
        }
    });
    var i = {
        init: function() {
            if (!this._oBootstrapFinished) {
                this._oBootstrapFinished = sap.ushell.bootstrap("local");
                this._oBootstrapFinished.then(function() {
                    sap.ushell.Container.createRenderer().placeAt("content")
                })
            }
            return this._oBootstrapFinished
        }
    };
    return i
});