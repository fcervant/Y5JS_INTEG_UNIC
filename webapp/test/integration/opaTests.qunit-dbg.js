/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"votorantim/Y5JS_INTEGRACAO_UNICO/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
