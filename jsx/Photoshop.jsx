$._ext_PHXS = {

    // 1. THE UNIVERSAL KEY PLACEHOLDER
    // This function exists locally so the code doesn't crash if clicked before loading.
    // The Server will overwrite this function with the REAL code (app.doAction...) upon verification.
    runEffect: function (name) {
        alert("Please unlock the panel to use the " + name + " effect.");
    },

    // 2. YOUR ORIGINAL FUNCTIONS (Now Protected)
    // I have replaced the actual logic with calls to the Universal Key.

    aler: function () {
        alert("Action Not Found Plese Load Action", "Action Issue", true);
        return;
    },

    forest: function () {
        this.runEffect('Forest');
    },

    dust: function () {
        this.runEffect('Dust');
    },

    a45: function () {
        this.runEffect('4-5');
    },

    cs32: function () {
        this.runEffect('C_3-2');
    },

    cs43: function () {
        this.runEffect('C_4-3');
    },

    cs11: function () {
        this.runEffect('C_1-1');
    },

    cs12: function () {
        this.runEffect('C_4-5');
    },

    pp11: function () {
        this.runEffect('1-1');
    },

    pp43: function () {
        this.runEffect('4-3');
    },

    pp32: function () {
        this.runEffect('3-2');
    },

    explosion: function () {
        this.runEffect('Explosion');
    },

    bubbles: function () {
        this.runEffect('Bubbles');
    },

    galaxy: function () {
        this.runEffect('Galaxy');
    },

    fiffif: function () {
        this.runEffect('50:50');
    },

    effectpreview: function () {
        this.runEffect('Effect_Preview');
    },

    galaxy3PartI: function () {
        this.runEffect('Galaxy 3+ Part I');
    },

    galaxy3PartII: function () {
        this.runEffect('Galaxy 3+ Part II');
    },

    origintiff: function () {
        this.runEffect('TIFF Original');
    },

    tiffsplit: function () {
        this.runEffect('TIFF Split');
    },

    originaljpg: function () {
        this.runEffect('JPEG Original');
    },

    flower: function () {
        this.runEffect('Flower');
    },

    jpgsplit: function () {
        this.runEffect('JPEG Split');
    },

    printsmall: function () {
        this.runEffect('Print Small');
    },

    printlarge: function () {
        this.runEffect('Print Large');
    },

    Jewelry: function () {
        this.runEffect('Jewelryexport');
    },

    customerpreview: function () {
        this.runEffect('Customer Preview');
    },

    /* hqprint: function () {
            try {
                    app.doAction('HQ-Print', 'Effects_Reorder');

            } catch (e) { }
    }, */

    hqprintpano: function () {
        this.runEffect('xxlprint');
    },

    // COMPLEX FUNCTION: Kept original logic (Option A)
    renmdoc: function () {
        try {
            var doc = activeDocument;
            var fn = '';
            fn += doc.fullName;
            var nm = prompt('Enter New Name To Rename This Document', doc.name.split('.', '1'), 'Enter New Name');
            if (nm === null) { return; }
            var docn = '';
            docn += doc.name;
            var dcns = docn.split('.');
            var pathe = '';
            pathe += doc.path;

            var f = File(pathe + '/' + nm + '.' + dcns[1]);

            doc.fullName.rename(f);
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            open(f)
        } catch (e) {

            alert(e, e);
            try {
                var desc1 = new ActionDescriptor();
                var desc2 = new ActionDescriptor();
                desc1.putObject(charIDToTypeID('As  '), charIDToTypeID('Pht3'), desc2);
                desc1.putPath(charIDToTypeID('In  '), new File("~/Desktop", nm));
                desc1.putInteger(charIDToTypeID('DocI'), 1125);
                executeAction(charIDToTypeID('save'), desc1, DialogModes.ALL);
            } catch (e) { alert(e, e) }
        }
    },

    a4: function () {
        this.runEffect('A4');
    },

    a3: function () {
        this.runEffect('A3');
    },

    a2: function () {
        this.runEffect('A2');
    },

    a1: function () {
        this.runEffect('A1');
    },

    a0: function () {
        this.runEffect('A0');
    },

    og: function () {
        this.runEffect('Original');
    },

    p1: function () {
        this.runEffect('Panorama Part I');
    },

    p2: function () {
        this.runEffect('Panorama Part II');
    },

    pt: function () {
        this.runEffect('Panorama Text');
    },

    p60: function () {
        this.runEffect('60 cm');
    },

    p80: function () {
        this.runEffect('80 cm');
    },

    p100: function () {
        this.runEffect('100 cm');
    },

    p120: function () {
        this.runEffect('120 cm');
    },

    p140: function () {
        this.runEffect('140 cm');
    },

    p160: function () {
        this.runEffect('160 cm');
    },

    pr: function () {
        this.runEffect('Customer Preview Pano');
    },

    ocean: function () {
        this.runEffect('Ocean');
    },

    Rock: function () {
        this.runEffect('Lava'); // Note: Your original code mapped 'Rock' to 'Lava' action
    },

    Round: function () {
        this.runEffect('Round');
    },

    jpegtiff: function () {
        this.runEffect('TIFF+JPEG_Original');
    },

    jpegtiff_split: function () {
        this.runEffect('TIFF+JPEG_Split');
    },

    EX_PartII: function () {
        this.runEffect('EX3-Part_II');
    },

    twoplusonone: function () {
        this.runEffect('2+ on 1 Decide');
    },

    layoutchange: function () {
        this.runEffect('Layout Decide');
    },

    addtext: function () {
        this.runEffect('Add Text Decide');
    },

    label_summary: function () {
        this.runEffect('Label_Summary');
    },

    label: function () {
        this.runEffect('Label');
    },

    TIFF_Restore: function () {
        this.runEffect('TIFF_Restore');
    },

    JPEG_Restore: function () {
        this.runEffect('JPEG_Restore');
    },

    Restore: function () {
        this.runEffect('restore');
    },

    split_image: function () {
        this.runEffect('Split Decide');
    },

    Reset_layout: function () {
        this.runEffect('Reset Layout');
    },

    Repair_Image: function () {
        this.runEffect('Fix Image Decide');
    },

    Web_File: function () {
        this.runEffect('JPEG Web Original');
    },

    Print_File: function () {
        this.runEffect('JPEG Original');
    },

    Pro_File: function () {
        this.runEffect('TIFF Original');
    },

    Water_Color: function () {
        this.runEffect('Watercolor');
    },

    Watermark: function () {
        this.runEffect('Watermark');
    },

    Pano_Flower: function () {
        this.runEffect('Pano_Flower');
    },

    hq: function () {
        this.runEffect('hqprint');
    },

    // LOGGING FUNCTION: Kept original logic (Option A)
    lcreatlog: function (a) {
        try {
            var lofol = new Folder('C:/Eyemazy/Exported Presets/Check'); if (!lofol.exists) { lofol.create() }
            var log = new File(lofol + '/' + 'Logfile.csv');
            var doc = app.activeDocument;
            var docnm = doc.name.split('.', '1');

            log.open("a");

            b = new Date();
            c = docnm;
            d = decodeURI(doc.path.fsName);
            log.writeln(a + "," + b + "," + c + "," + d + ",Success");
            log.close();
        } catch (e) { alert(e, e) }
    },
};