sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    function(BaseController,Filter,FilterOperator) {
      "use strict";
  
      return BaseController.extend("namespace1.projectprodapp.controller.List", {
        onInit: function() {
        },       

        onHighlightToggle: function(oEvent) {
          var oTable = this.byId("table");              
            oTable.setRowSettingsTemplate(new RowSettings({
              highlight: "{Discontinued}"
            }));
          
        },
        
        ohandle_press: function(oEvent){
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          var selectedItemProductId = oEvent.getSource().getBindingContext().getProperty("ProductID")
          oRouter.navTo("detail",{productID:selectedItemProductId})
        },
            

      });
    }
  );
  