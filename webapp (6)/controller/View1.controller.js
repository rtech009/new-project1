sap.ui.define([
 "sap/ui/core/mvc/Controller",
 'sap/m/MessageBox',
 'sap/ui/model/Sorter',
 'sap/ui/model/Filter',
 "sap/ui/model/FilterOperator",
 
		'sap/ui/core/Fragment',

], function (Controller , MessageBox , Sorter , Filter , Fragment  , FilterOperator) {
 "use strict";

 return Controller.extend("employeelr.controller.View1", {
  //onInit: function () {

    
        
     //  },
      onSearch: function(oEvent){
           var aFilter = [], sQuery = oEvent.getParameter("query"),
           oTable = this.getView().byId("Table1"),
           oBinding = oTable.getBinding("items");

           if(sQuery) {
                      aFilter.push(new sap.ui.model.Filter("FirstName", sap.ui.model.FilterOperator.Contains, sQuery));
           }    
           oBinding.filter(aFilter);
         },

  	handleLinkPress: function () {
			sap.m.MessageBox.alert("emp id selected");
        },
        handleSortButtonPressed: function() {

              this._Dialog = sap.ui.xmlfragment("employeelr.fragments.SortDialog",
                                this);
                                this.getView().addDependent(this._Dialog);
                this._Dialog.open();
    

        },
        handleFilterButtonPressed: function() {
                     this._Dialog1 = sap.ui.xmlfragment("employeelr.fragments.FilterDialog",
                                this);
                this._Dialog1.open();
        },        	
			
	handleSortDialogConfirm: function (oEvent) {
			var oTable = this.byId("Table1"),
				mParams = oEvent.getParameters(),
				oBinding = oTable.getBinding("items"),
				sPath,
				bDescending,
				aSorters = [];

            sPath = mParams.sortItem.getKey();
           
			bDescending = mParams.sortDescending;
			aSorters.push(new Sorter(sPath, bDescending));

			// apply the selected sort and group settings
			oBinding.sort(aSorters);
        },
        onSelectChange: function(){
            
  }
            
         	
		
        	
		

		
		
		
		



        

  /*
  onClick: function (oEvent) {
   var b = this.getView().byId("Table1").getModel();
   var a = oEvent.getSource().getBindingContext();
   var c = b.getProperty(a + "/FirstName");
   var d = b.getProperty(a + "/Country");
   sap.m.MessageToast.show("Hello" + " " + c + " " + "Your current office location is" + " " + d);
  }*/
 });
});