/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"namespace1/project_prod_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
