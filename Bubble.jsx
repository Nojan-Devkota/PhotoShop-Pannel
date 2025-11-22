#target photoshop
app.bringToFront();

/* FLATTENED */
if (app.activeDocument.activeLayer.isBackgroundLayer) {
    // alert('Flattened image...');
    // Call function to duplicate all layers
    DupeSelectedLayers.main = function () {
        DupeSelectedLayers();
    };
    DupeSelectedLayers.main();
    alertMessage();
}

/* SINGLE (TRANSPARENT) LAYER BUG WORKAROUND */
else if (app.activeDocument.layers.length === 1) {
    // alert('Single layer image...');
    // Set the original doc
    var sourceDoc = app.activeDocument;
    // Add a randomly named temp layer
    app.activeDocument.artLayers.add();
    app.activeDocument.activeLayer.name = "2563@361#47&-TEMP_LAYER";
    // Select all layers and layer groups/sets!
    selectAllLayers();
    // Call function to duplicate all layers
    DupeSelectedLayers.main = function () {
        DupeSelectedLayers();
    };
    DupeSelectedLayers.main();
    // Select & remove temporary layer
    removeTempLayer(false);
    // Set the duplicated document
    var dupedDoc = app.activeDocument;
    // Switch back to the original doc
    app.activeDocument = sourceDoc;
    // Select & remove temporary layer
    removeTempLayer(false);
    // Set the duped doc as the active doc
    app.activeDocument = dupedDoc;
    alertMessage();
}

/* MULTIPLE LAYERS */
else {
    // alert('Multiple layer image...');
    // Select all layers and layer groups/sets!
    selectAllLayers();
    // Call function to duplicate all layers
    DupeSelectedLayers.main = function () {
        DupeSelectedLayers();
    };
    DupeSelectedLayers.main();
    alertMessage();
}

///// START FUNCTIONS /////

function selectAllLayers() {
    // https://feedback.photoshop.com/photoshop_family/topics/i-cant-record-sellect-all-layers-in-script-listener-and-in-actions
    var c2t = function (s) {
        return app.charIDToTypeID(s);
    };

    var s2t = function (s) {
        return app.stringIDToTypeID(s);
    };

    var descriptor = new ActionDescriptor();
    var descriptor2 = new ActionDescriptor();
    var reference = new ActionReference();
    var reference2 = new ActionReference();

    reference2.putEnumerated(s2t("layer"), s2t("ordinal"), s2t("targetEnum"));
    descriptor.putReference(c2t("null"), reference2);
    executeAction(s2t("selectAllLayers"), descriptor, DialogModes.NO);
    reference.putProperty(s2t("layer"), s2t("background"));
    descriptor2.putReference(c2t("null"), reference);
    descriptor2.putEnumerated(s2t("selectionModifier"), s2t("selectionModifierType"), s2t("addToSelection"));
    descriptor2.putBoolean(s2t("makeVisible"), false);
    try {
        executeAction(s2t("select"), descriptor2, DialogModes.NO);
    } catch (e) { }
}

// Duplicate all selected layers to new document  
function DupeSelectedLayers() {
    function step1(enabled, withDialog) {
        if (enabled !== undefined && !enabled)
            return;
        cTID = function (s) {
            return app.charIDToTypeID(s);
        };
        sTID = function (s) {
            return app.stringIDToTypeID(s);
        };
        var origFilename = app.activeDocument.name.replace(/\.[^\.]+$/, ''); // Remove filename extension from original
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        var doc = app.activeDocument;
        var first_layer_name='';
            //Set up Variable to access layer name
            var currentLayer = app.activeDocument.layers;
                first_layer_name = currentLayer[0].name;
        ref1.putClass(cTID('Dcmn'));
        desc1.putReference(cTID('null'), ref1);
        // Use the original document filename + suffix
        desc1.putString(cTID('Nm  '), first_layer_name + "_B");
        // Use the original document filename, beware overwriting the original file and losing all metadata!
        // desc1.putString(cTID('Nm  '), origFilename );               
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('Usng'), ref2);
        desc1.putInteger(cTID('Vrsn'), 5);
        executeAction(cTID('Mk  '), desc1, dialogMode);
    }

    step1();
}

function removeTempLayer(makeVisible) {
    // Select & remove temporary layer
    var c2t = function (s) {
        return app.charIDToTypeID(s);
    };
    var s2t = function (s) {
        return app.stringIDToTypeID(s);
    };
    var descriptor = new ActionDescriptor();
    var list = new ActionList();
    var reference = new ActionReference();
    reference.putName(s2t("layer"), "2563@361#47&-TEMP_LAYER");
    descriptor.putReference(c2t("null"), reference);
    descriptor.putBoolean(s2t("makeVisible"), makeVisible);
    list.putInteger(3);
    descriptor.putList(s2t("layerID"), list);
    executeAction(s2t("select"), descriptor, DialogModes.NO);
    app.activeDocument.activeLayer.remove();
}

function alertMessage() {;

}

///// FINISH FUNCTIONS /////