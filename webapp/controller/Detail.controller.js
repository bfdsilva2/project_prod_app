sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageBox"
    ],
    
    function(BaseController, MessageBox) {
      "use strict";
  
      return BaseController.extend("namespace1.projectprodapp.controller.Detail", {
        onInit: function() {          

          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.getRoute("detail").attachMatched(this._onload,this);
        },
        _onload:function(oEvent){
          var oArgs, oView;          
          oArgs = oEvent.getParameter("arguments");
          oView = this.getView();
          oView.bindElement({
            path:"/Products("+ oArgs.productID +")",
            event:{
              dataRequester:function(){oView.setBusy(true)},
              dataReceived:function(){oView.setBusy(false)},
            }
          });        

        },
        oNavButton_press:function(oEvent){
          var oRouter=sap.ui.core.UIComponent.GetRouterFor(this);
          oRouter.navTo("home");
        },

        onShowMarkAsDescontinued:function ( ) {
          MessageBox.show(
            "Tem certeza que deseja marcar o produto como descontinuado?", {
              icon: MessageBox.Icon.INFORMATION,
              title: "Confirmação",
              actions: [MessageBox.Action.YES, MessageBox.Action.NO],
              emphasizedAction: MessageBox.Action.YES,
              contentWidth: "100px",
              onClose: function (oAction) { / * do something * / }          
            },
          );
        }
      });
    }
  );
  