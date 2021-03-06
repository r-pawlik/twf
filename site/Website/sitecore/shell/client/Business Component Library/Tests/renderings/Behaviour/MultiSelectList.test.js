﻿/// <reference path="../../vendors/jasmine-standalone-1.0.0/jasmine.js" />
/// <reference path="../../jasmine.ui.runner.test.js" />

require(["jasmineEnv", "sitecore", "/-/speak/v1/business/listcontrol.js", "/sitecore/shell/client/Speak/Assets/lib/ui/behaviors/MultiSelectList.js"], function (jasmineEnv, sc) {
  var setupTests = function (testAreaEl) {
    "use strict";

    describe("Given a ListControl model", function () {
      var listControlModel = new sc.Definitions.Models.ListControl();

      describe("Given a List Control", function () {
        var model, $element, testAreaApp, appNumber = 0, nodeApp, items;

        beforeEach(function () {
          nodeApp = testAreaEl.clone(true);
          nodeApp.attr("id", testAreaEl.attr("id") + appNumber);

          nodeApp.appendTo($("body"));
          testAreaApp = _sc.Factories.createApp(testAreaEl.attr("id") + appNumber);
          appNumber++;
          model = testAreaApp.TestMultiSelectListControl;
          $element = nodeApp.find(".sc-listcontrol");

          items = JSON.parse('[{"__Created":"Thursday, July 21, 2011 2:46 PM","Dimensions":"388 x 733","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{C19E9164-FF99-4A05-B8C0-E9C931DA111F}"},"itemId":"{C19E9164-FF99-4A05-B8C0-E9C931DA111F}","itemName":"iPhone","$displayName":"iPhone","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/iPhone","$url":"~/link.aspx?_id=C19E9164FF994A05B8C0E9C931DA111F&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/iPhone.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/C19E9164FF994A05B8C0E9C931DA111F.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Wednesday, September 07, 2011 9:52 AM","Dimensions":"732 x 388","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{5217AD9F-7E79-44CA-8FD1-6B7389C48125}"},"itemId":"{5217AD9F-7E79-44CA-8FD1-6B7389C48125}","itemName":"iPhone_landscape","$displayName":"iPhone_landscape","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/iPhone_landscape","$url":"~/link.aspx?_id=5217AD9F7E7944CA8FD16B7389C48125&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/iPhone_landscape.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/5217AD9F7E7944CA8FD16B7389C48125.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, September 02, 2011 2:43 PM","Dimensions":"958 x 1206","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{B84465A0-DF87-45E7-80B4-7013583089BA}"},"itemId":"{B84465A0-DF87-45E7-80B4-7013583089BA}","itemName":"iPad","$displayName":"iPad","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/iPad","$url":"~/link.aspx?_id=B84465A0DF8745E780B47013583089BA&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/iPad.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/B84465A0DF8745E780B47013583089BA.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Thursday, September 08, 2011 11:11 AM","Dimensions":"1206 x 958","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{F6413B6C-F251-46A8-83CA-DACA184B3893}"},"itemId":"{F6413B6C-F251-46A8-83CA-DACA184B3893}","itemName":"iPad_landscape","$displayName":"iPad_landscape","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/iPad_landscape","$url":"~/link.aspx?_id=F6413B6CF25146A883CADACA184B3893&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/iPad_landscape.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/F6413B6CF25146A883CADACA184B3893.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, September 02, 2011 5:00 PM","Dimensions":"2276 x 1556","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{DE305E7D-D74B-4ABB-BEA0-4A3A9D0137EF}"},"itemId":"{DE305E7D-D74B-4ABB-BEA0-4A3A9D0137EF}","itemName":"HD TV","$displayName":"HD TV","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/HD TV","$url":"~/link.aspx?_id=DE305E7DD74B4ABBBEA04A3A9D0137EF&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/HD TV.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/DE305E7DD74B4ABBBEA04A3A9D0137EF.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, April 06, 2012 11:59 AM","Dimensions":"1154 x 606","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{9C92CD3B-FE25-46F6-8F78-B0D7BFEBCFBC}"},"itemId":"{9C92CD3B-FE25-46F6-8F78-B0D7BFEBCFBC}","itemName":"Windows Phone_ landscape","$displayName":"Windows Phone_ landscape","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Windows Phone_ landscape","$url":"~/link.aspx?_id=9C92CD3BFE2546F68F78B0D7BFEBCFBC&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Windows Phone_ landscape.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/9C92CD3BFE2546F68F78B0D7BFEBCFBC.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, April 06, 2012 11:59 AM","Dimensions":"606 x 1154","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{63EA428F-83C3-4F95-BED5-87FC267652B4}"},"itemId":"{63EA428F-83C3-4F95-BED5-87FC267652B4}","itemName":"Windows Phone","$displayName":"Windows Phone","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Windows Phone","$url":"~/link.aspx?_id=63EA428F83C34F95BED587FC267652B4&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Windows Phone.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/63EA428F83C34F95BED587FC267652B4.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, April 06, 2012 11:58 AM","Dimensions":"1688 x 912","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{DF1D83F8-D813-4445-A94F-1DB2067DAF2A}"},"itemId":"{DF1D83F8-D813-4445-A94F-1DB2067DAF2A}","itemName":"Large Android phone_landscape","$displayName":"Large Android phone_landscape","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Large Android phone_landscape","$url":"~/link.aspx?_id=DF1D83F8D8134445A94F1DB2067DAF2A&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Large Android phone_landscape.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/DF1D83F8D8134445A94F1DB2067DAF2A.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, April 06, 2012 11:58 AM","Dimensions":"912 x 1688","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{6C9ADE96-3328-411A-A614-EB95E6DA320E}"},"itemId":"{6C9ADE96-3328-411A-A614-EB95E6DA320E}","itemName":"Large Android phone","$displayName":"Large Android phone","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Large Android phone","$url":"~/link.aspx?_id=6C9ADE963328411AA614EB95E6DA320E&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Large Android phone.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/6C9ADE963328411AA614EB95E6DA320E.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, April 06, 2012 11:59 AM","Dimensions":"351 x 833","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{E6BA438D-B112-4BEF-AE3C-4F0C046868D6}"},"itemId":"{E6BA438D-B112-4BEF-AE3C-4F0C046868D6}","itemName":"Feature Phone","$displayName":"Feature Phone","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Feature Phone","$url":"~/link.aspx?_id=E6BA438DB1124BEFAE3C4F0C046868D6&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Feature Phone.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/E6BA438DB1124BEFAE3C4F0C046868D6.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, April 06, 2012 11:58 AM","Dimensions":"558 x 952","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{65AE88A6-BE9B-4022-9BFF-49E66E3DC6D3}"},"itemId":"{65AE88A6-BE9B-4022-9BFF-49E66E3DC6D3}","itemName":"Blackberry","$displayName":"Blackberry","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Blackberry","$url":"~/link.aspx?_id=65AE88A6BE9B40229BFF49E66E3DC6D3&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Blackberry.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/65AE88A6BE9B40229BFF49E66E3DC6D3.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, April 06, 2012 11:58 AM","Dimensions":"1441 x 970","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{A0C1DCFD-3D90-478F-864F-D448D9467ABB}"},"itemId":"{A0C1DCFD-3D90-478F-864F-D448D9467ABB}","itemName":"Android Tablet_landscape","$displayName":"Android Tablet_landscape","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Android Tablet_landscape","$url":"~/link.aspx?_id=A0C1DCFD3D90478F864FD448D9467ABB&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Android Tablet_landscape.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/A0C1DCFD3D90478F864FD448D9467ABB.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, April 06, 2012 11:58 AM","Dimensions":"970 x 1441","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{B8415FE4-1F43-488E-8EA9-AEF1337EF914}"},"itemId":"{B8415FE4-1F43-488E-8EA9-AEF1337EF914}","itemName":"Android Tablet","$displayName":"Android Tablet","$database":"master","$language":"","$version":0,"$templateName":"Jpeg","$templateId":"{DAF085E8-602E-43A6-8299-038FF171349F}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Android Tablet","$url":"~/link.aspx?_id=B8415FE41F43488E8EA9AEF1337EF914&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Android Tablet.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/B8415FE41F43488E8EA9AEF1337EF914.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Wednesday, April 04, 2012 12:10 PM","Dimensions":"1178 x 602","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{E5391198-5B0F-4048-BECC-1856480D9384}"},"itemId":"{E5391198-5B0F-4048-BECC-1856480D9384}","itemName":"Android Phone_landscape","$displayName":"Android Phone_landscape","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Android Phone_landscape","$url":"~/link.aspx?_id=E53911985B0F4048BECC1856480D9384&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Android Phone_landscape.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/E53911985B0F4048BECC1856480D9384.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Wednesday, April 04, 2012 12:10 PM","Dimensions":"602 x 1178","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{98EF24BE-026F-40CE-BE27-933AD4A05BF6}"},"itemId":"{98EF24BE-026F-40CE-BE27-933AD4A05BF6}","itemName":"Android Phone","$displayName":"Android Phone","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Simulator Backgrounds/Android Phone","$url":"~/link.aspx?_id=98EF24BE026F40CEBE27933AD4A05BF6&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Simulator Backgrounds/Android Phone.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/98EF24BE026F40CEBE27933AD4A05BF6.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Monday, October 01, 2012 5:58 PM","Dimensions":"256 x 256","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{59070C8E-4734-4A35-B309-F40B7203599A}"},"itemId":"{59070C8E-4734-4A35-B309-F40B7203599A}","itemName":"video","$displayName":"video","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Template Thumbnails/video","$url":"~/link.aspx?_id=59070C8E47344A35B309F40B7203599A&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Template Thumbnails/video.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/59070C8E47344A35B309F40B7203599A.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Friday, October 05, 2012 9:52 AM","Dimensions":"256 x 256","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{7992E405-A9BA-49E0-8C87-C88060756731}"},"itemId":"{7992E405-A9BA-49E0-8C87-C88060756731}","itemName":"leopard-folder-big","$displayName":"leopard-folder-big","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Template Thumbnails/leopard-folder-big","$url":"~/link.aspx?_id=7992E405A9BA49E08C87C88060756731&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Template Thumbnails/leopard-folder-big.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/7992E405A9BA49E08C87C88060756731.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Monday, October 01, 2012 6:00 PM","Dimensions":"256 x 256","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{3463CD0F-C755-4F99-9377-5BA5BCAF9FEF}"},"itemId":"{3463CD0F-C755-4F99-9377-5BA5BCAF9FEF}","itemName":"file","$displayName":"file","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Template Thumbnails/file","$url":"~/link.aspx?_id=3463CD0FC7554F9993775BA5BCAF9FEF&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Template Thumbnails/file.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/3463CD0FC7554F9993775BA5BCAF9FEF.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Monday, October 01, 2012 5:58 PM","Dimensions":"256 x 256","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{710D2188-92FC-4AA4-9486-DBBD106ACE4D}"},"itemId":"{710D2188-92FC-4AA4-9486-DBBD106ACE4D}","itemName":"document","$displayName":"document","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Template Thumbnails/document","$url":"~/link.aspx?_id=710D218892FC4AA49486DBBD106ACE4D&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Template Thumbnails/document.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/710D218892FC4AA49486DBBD106ACE4D.ashx?h=16&thn=1&w=16&db=master"},{"__Created":"Monday, October 01, 2012 5:58 PM","Dimensions":"256 x 256","itemUri":{"databaseUri":{"databaseName":"master","webApi":"","virtualFolder":"/sitecore/shell"},"itemId":"{8EA15044-EE2C-41DB-81D6-0A9C42062814}"},"itemId":"{8EA15044-EE2C-41DB-81D6-0A9C42062814}","itemName":"audio","$displayName":"audio","$database":"master","$language":"","$version":0,"$templateName":"Image","$templateId":"{F1828A2C-7E5D-4BBD-98CA-320474871548}","$hasChildren":false,"$path":"/sitecore/media library/System/Template Thumbnails/audio","$url":"~/link.aspx?_id=8EA15044EE2C41DB81D60A9C42062814&amp;_z=z","$mediaurl":"/sitecore/shell/~/media/System/Template Thumbnails/audio.ashx?bc=Transparent&db=master&h=130&thn=1&w=130","$icon":"/sitecore/shell/themes/standard/~/media/8EA15044EE2C41DB81D60A9C42062814.ashx?h=16&thn=1&w=16&db=master"}]');
          model.set("items", items);
        });

        afterEach(function () {
          nodeApp.hide();
        });

        it("it should have a 'checkedItemIds' property", function () {
          expect(model.get("checkedItemIds")).toBeDefined();
        });

        it("it should have a 'checkedItems' property", function () {
          expect(model.get("checkedItems")).toBeDefined();
        });

        it("it should set 'checkedItemIds' to empty by default", function () {
          expect(model.get("checkedItemIds").length).toBe(0);
        });

        it("it should set 'checkedItems' to empty by default", function () {
          expect(model.get("checkedItems").length).toBe(0);
        });

        it("it should add a new raw object to the 'checkedItems', when I check an item in the Detail List", function () {
          $element.find('.sc-table tbody tr:first .sc-cb').click();
          expect(model.get("checkedItems").length).toBe(1);
          $element.find('.sc-table tbody tr:last .sc-cb').click();
          expect(model.get("checkedItems").length).toBe(2);
        });

        it("it should set all the checkboxes to true, when I click CheckAll checkbox in the header of the Detail List", function () {
          $element.find('.sc-table thead .sc-cball').click();
          $element.find('.sc-table tbody .sc-cb').each(function () {
            expect($(this).is(':checked')).toBe(true);
          });
        });

        it("it should set all the checkboxes to false, when all of the checkboxes are checked and I click CheckAll checkbox in the header of the Detail List", function () {
          $element.find('.sc-table tbody .sc-cb').each(function () {
            $(this).click();
          });
          $element.find('.sc-table thead .sc-cball').click();
          $element.find('.sc-table tbody .sc-cb').each(function () {
            expect($(this).is(':checked')).toBe(false);
          });
        });

        /*
        it("it should have 'checkAll' method to be defined inside viewModel", function () {
          model.viewModel.checkAll();
          $element.find('.sc-table tbody .sc-cb').each(function () {
            expect($(this).is(':checked')).toBe(true);
          });          
        });
                
        describe("when I call addrow", function () {
          it("it should execute insertcheck", function () {           
            model.viewModel.addrow();
            spyOn(model.viewModel, 'insertcheck');
            expect(model.viewModel.insertcheck).toHaveBeenCalled();
          });
        });
                
        it("it should have additional column with checkboxes", function () {
          _.each($element.find(".sc-table tbody tr"), function () {
            expect($(this).find("input.sc-cb")).toBe(true);
          }, $element);
        });
        */

        it("it should check row by item ID when I call checkItem function", function()
        {
          var firstItemId = "{C19E9164-FF99-4A05-B8C0-E9C931DA111F}";
          model.viewModel.checkItem(firstItemId);

          assertElementChecked(0);
        });
        
        it("it should check row by item object when I call checkItem function", function()
        {
          var firstItem = model.get("items")[0];
          model.viewModel.checkItem(firstItem);

          assertElementChecked(0);
        });
        
        it("it should uncheck row by item ID when I call uncheckItem function", function()
        {
          model.viewModel.checkItem("{C19E9164-FF99-4A05-B8C0-E9C931DA111F}");
          model.viewModel.uncheckItem("{C19E9164-FF99-4A05-B8C0-E9C931DA111F}");

          assertElementUnchecked(0);
        });
        
        it("it should uncheck row by item object when I call uncheckItem function", function()
        {
          var firstItem = model.get("items")[0];
          model.viewModel.checkItem(firstItem);
          model.viewModel.uncheckItem(firstItem);

          assertElementUnchecked(0);
        });
        
        it("it should check rows by item IDs when I call checkItems function", function()
        {
          var firstItemId = "{C19E9164-FF99-4A05-B8C0-E9C931DA111F}";
          var secondItemId = "{5217AD9F-7E79-44CA-8FD1-6B7389C48125}";

          model.viewModel.checkItems([firstItemId, secondItemId]);

          assertElementChecked(0);
          assertElementChecked(1);
        });
        
        it("it should check rows by item objects when I call checkItems function", function()
        {
          var dataItems = model.get("items");

          model.viewModel.checkItems([dataItems[0], dataItems[1]]);

          assertElementChecked(0);
          assertElementChecked(1);
        });
        
        it("it should uncheck rows by item IDs when I call uncheckItems function", function()
        {
          var firstItemId = "{C19E9164-FF99-4A05-B8C0-E9C931DA111F}";
          var secondItemId = "{5217AD9F-7E79-44CA-8FD1-6B7389C48125}";

          model.viewModel.checkItems([firstItemId, secondItemId]);
          model.viewModel.uncheckItems([firstItemId, secondItemId]);

          assertElementUnchecked(0);
          assertElementUnchecked(1);
        });
        
        it("it should uncheck rows by item objects when I call uncheckItems function", function()
        {
          var dataItems = model.get("items");

          model.viewModel.checkItems([dataItems[0], dataItems[1]]);
          model.viewModel.uncheckItems([dataItems[0], dataItems[1]]);
          
          assertElementUnchecked(0);
          assertElementUnchecked(1);
        });
        
        it("it should set check boxes on data change", function()
        {
          var dataItems = model.get("items");
          var firstItem = dataItems[0];
          var secondItem = dataItems[1];

          model.set("items", [secondItem]);
          model.viewModel.checkItem(firstItem);
          
          expect(model.get('checkedItemIds')).toContain(firstItem.itemId);
          expect(model.get('checkedItems').length).toBe(0);

          model.set("items", [secondItem, firstItem]);

          assertElementChecked(1);
        });

        it("it should clear checkedItems property on data change", function()
        {
          var dataItems = model.get("items");
          var firstItem = dataItems[0];
          var secondItem = dataItems[1];

          model.viewModel.checkItem(firstItem);
          
          expect(model.get('checkedItems').length).toBe(1);

          model.set("items", [secondItem]);

          expect(model.get('checkedItems').length).toBe(0);
        });

        it("it should add unknown IDs to checkedItemIds array when I call checkItems function", function()
        {
          model.set("items", []);

          var firstItemId = "{C19E9164-FF99-4A05-B8C0-E9C931DA111F}";
          var secondItemId = "{5217AD9F-7E79-44CA-8FD1-6B7389C48125}";

          model.viewModel.checkItems([firstItemId, secondItemId]);

          expect(model.get('checkedItemIds').length).toBe(2);
        });

        it("it should remove unknown IDs from checkedItemIds array when I call uncheckItems function", function()
        {
          model.set("items", []);

          var firstItemId = "{C19E9164-FF99-4A05-B8C0-E9C931DA111F}";
          var secondItemId = "{5217AD9F-7E79-44CA-8FD1-6B7389C48125}";

          model.viewModel.checkItems([firstItemId, secondItemId]);
          model.viewModel.uncheckItems([firstItemId, secondItemId]);

          expect(model.get('checkedItemIds').length).toBe(0);
        });

        function assertElementChecked(elementIndex)
        {
          var item = model.get("items")[elementIndex];

          var checked = $element.find('.sc-table tbody .sc-cb').eq(elementIndex).prop("checked");
          expect(checked).toBe(true);

          expect(model.get('checkedItemIds')).toContain(item.itemId);

          var containItem = _.some(model.get('checkedItems'), function(e) { return e.ItemId = item.itemId; });
          expect(containItem).toBeTruthy();
        }
        
        function assertElementUnchecked(elementIndex)
        {
          var checked = $element.find('.sc-table tbody .sc-cb').eq(elementIndex).prop("checked");
          expect(checked).toBe(false);

          expect(model.get('checkedItemIds').length).toBe(0);
          expect(model.get('checkedItems').length).toBe(0);
        }

      });


    });
  };

  runTests(jasmineEnv, setupTests, "MultiSelectList.html");
});


