$._ext_PHXS = {

        aler: function () {
                alert("Action Not Found Plese Load Action", "Action Issue", true);

                return;
        },


        forest: function () {


                try {
                        app.doAction('Forest', 'Effects_Reorder');

                } catch (e) { }
        },

        dust: function () {
                try {
                        app.doAction('Dust', 'Effects_Reorder');

                } catch (e) { }
        },
        a45: function () {
                try {
                        app.doAction('4-5', 'Effects_Reorder');

                } catch (e) { }
        },
        cs32: function () {
                try {
                        app.doAction('C_3-2', 'Effects_Reorder');

                } catch (e) { }
        },
        cs43: function () {
                try {
                        app.doAction('C_4-3', 'Effects_Reorder');

                } catch (e) { }
        },
        cs11: function () {
                try {
                        app.doAction('C_1-1', 'Effects_Reorder');

                } catch (e) { }
        },
        cs12: function () {
                try {
                        app.doAction('C_4-5', 'Effects_Reorder');

                } catch (e) { }
        },


        pp11: function () {
                try {
                        app.doAction('1-1', 'Effects_Reorder');

                } catch (e) { }
        },
        pp43: function () {
                try {
                        app.doAction('4-3', 'Effects_Reorder');

                } catch (e) { }
        },
        pp32: function () {
                try {
                        app.doAction('3-2', 'Effects_Reorder');

                } catch (e) { }
        },
        explosion: function () {
                try {
                        app.doAction('Explosion', 'Effects_Reorder');

                } catch (e) { }
        },
        bubbles: function () {
                try {
                        app.doAction('Bubbles', 'Effects_Reorder');

                } catch (e) { }
        },
        galaxy: function () {
                try {
                        app.doAction('Galaxy', 'Effects_Reorder');

                } catch (e) { }
        },



        fiffif: function () {
                try {
                        app.doAction('50:50', 'Effects_Reorder');

                } catch (e) { }
        },
        effectpreview: function () {
                try {
                        app.doAction('Effect_Preview', 'Effects_Reorder');

                } catch (e) { }
        },
        galaxy3PartI: function () {
                try {
                        app.doAction('Galaxy 3+ Part I', 'Effects_Reorder');

                } catch (e) { }
        },
        galaxy3PartII: function () {
                try {
                        app.doAction('Galaxy 3+ Part II', 'Effects_Reorder');

                } catch (e) { }
        },
        origintiff: function () {
                try {
                        app.doAction('TIFF Original', 'Effects_Reorder');

                } catch (e) { }
        },
        tiffsplit: function () {
                try {
                        app.doAction('TIFF Split', 'Effects_Reorder');

                } catch (e) { }
        },
        originaljpg: function () {
                try {
                        app.doAction('JPEG Original', 'Effects_Reorder');

                } catch (e) { }
        },
        flower: function () {
                try {
                        app.doAction('Flower', 'Effects_Reorder');

                } catch (e) { }
        },
        jpgsplit: function () {
                try {
                        app.doAction('JPEG Split', 'Effects_Reorder');

                } catch (e) { ac }
        },
        printsmall: function () {
                try {

                        app.doAction('Print Small', 'Effects_Reorder');

                } catch (e) { }
        },
        printlarge: function () {
                try {
                        app.doAction('Print Large', 'Effects_Reorder');

                } catch (e) { }
        },
        Jewelry: function () {
                try {
                        app.doAction('Jewelryexport', 'Effects_Reorder');

                } catch (e) { }
        },
        customerpreview: function () {
                try {
                        app.doAction('Customer Preview', 'Effects_Reorder');

                } catch (e) { }
        },
/*         hqprint: function () {
                try {
                        app.doAction('HQ-Print', 'Effects_Reorder');

                } catch (e) { }
        }, */
        hqprintpano: function () {
                try {
                        app.doAction('xxlprint', 'Effects_Reorder');

                } catch (e) { }
        },
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
                try {
                        app.doAction('A4', 'Effects_Reorder');

                } catch (e) { }
        },
        a3: function () {
                try {
                        app.doAction('A3', 'Effects_Reorder');

                } catch (e) { }
        },
        a2: function () {
                try {
                        app.doAction('A2', 'Effects_Reorder');

                } catch (e) { }
        },
        a1: function () {
                try {
                        app.doAction('A1', 'Effects_Reorder');

                } catch (e) { }
        },
        a0: function () {
                try {
                        app.doAction('A0', 'Effects_Reorder');

                } catch (e) { }
        },
        og: function () {
                try {
                        app.doAction('Original', 'Effects_Reorder');

                } catch (e) { }
        },
        p1: function () {
                try {
                        app.doAction('Panorama Part I', 'Effects_Reorder');

                } catch (e) { }
        },
        p2: function () {
                try {
                        app.doAction('Panorama Part II', 'Effects_Reorder');

                } catch (e) { }
        },
        pt: function () {
                try {
                        app.doAction('Panorama Text', 'Effects_Reorder');

                } catch (e) { }
        },
        p60: function () {
                try {
                        app.doAction('60 cm', 'Effects_Reorder');

                } catch (e) { }
        },
        p80: function () {
                try {
                        app.doAction('80 cm', 'Effects_Reorder');

                } catch (e) { }
        },
        p100: function () {
                try {
                        app.doAction('100 cm', 'Effects_Reorder');

                } catch (e) { }
        },
        p120: function () {
                try {
                        app.doAction('120 cm', 'Effects_Reorder');

                } catch (e) { }
        },
        p140: function () {
                try {
                        app.doAction('140 cm', 'Effects_Reorder');

                } catch (e) { }
        },
        p160: function () {
                try {
                        app.doAction('160 cm', 'Effects_Reorder');

                } catch (e) { }
        },
        pr: function () {
                try {
                        app.doAction('Customer Preview Pano', 'Effects_Reorder');

                } catch (e) { }
        },

        ocean: function () {
                try {
                        app.doAction('Ocean', 'Effects_Reorder');

                } catch (e) { }
        },
        
        Rock: function () {
                try {
                        app.doAction('Lava', 'Effects_Reorder');

                } catch (e) { }
        },
        Round: function () {
                try {
                        app.doAction('Round', 'Effects_Reorder');

                } catch (e) { }
        },
        jpegtiff: function () {
                try {
                        app.doAction('TIFF+JPEG_Original', 'Effects_Reorder');

                } catch (e) { }
        },
        jpegtiff_split: function () {
                try {
                        app.doAction('TIFF+JPEG_Split', 'Effects_Reorder');

                } catch (e) { }
        },       
        EX_PartII: function () {
                try {
                        app.doAction('EX3-Part_II', 'Effects_Reorder');

                } catch (e) { }
        },
        twoplusonone: function () {
                try {
                        app.doAction('2+ on 1 Decide', 'Effects_Reorder');

                } catch (e) { }
        },
        layoutchange: function () {
                try {
                        app.doAction('Layout Decide', 'Effects_Reorder');

                } catch (e) { }
        },
        addtext: function () {
                try {
                        app.doAction('Add Text Decide', 'Effects_Reorder');

                } catch (e) { }
        },
        label_summary: function () {
                try {
                        app.doAction('Label_Summary', 'Effects_Reorder');

                } catch (e) { }
        },
        label: function () {
                try {
                        app.doAction('Label', 'Effects_Reorder');

                } catch (e) { }
        },
        TIFF_Restore: function () {
                try {
                        app.doAction('TIFF_Restore', 'Effects_Reorder');

                } catch (e) { }
        },
        JPEG_Restore: function () {
                try {
                        app.doAction('JPEG_Restore', 'Effects_Reorder');

                } catch (e) { }
        },
        Restore: function () {
                try {
                        app.doAction('restore', 'Effects_Reorder');

                } catch (e) { }
        },
        split_image: function () {
                try {
                        app.doAction('Split Decide', 'Effects_Reorder');

                } catch (e) { }
        },
        Reset_layout: function () {
                try {
                        app.doAction('Reset Layout', 'Effects_Reorder');

                } catch (e) { }
        },
        Repair_Image: function () {
                try {
                        app.doAction('Fix Image Decide', 'Effects_Reorder');

                } catch (e) { }
        },
        Web_File: function () {
                try {
                        app.doAction('JPEG Web Original', 'Effects_Reorder');

                } catch (e) { }
        },
        Print_File: function () {
                try {
                        app.doAction('JPEG Original', 'Effects_Reorder');

                } catch (e) { }
        },
        Pro_File: function () {
                try {
                        app.doAction('TIFF Original', 'Effects_Reorder');

                } catch (e) { }
        },
        Water_Color: function () {
                try {
                        app.doAction('Watercolor', 'Effects_Reorder');

                } catch (e) { }
        },
        Watermark: function () {
                try {
                        app.doAction('Watermark', 'Effects_Reorder');

                } catch (e) { }
        },
        Pano_Flower: function () {
                try {
                        app.doAction('Pano_Flower', 'Effects_Reorder');

                } catch (e) { }
        },
        hq: function () {
                try {
                        app.doAction('hqprint', 'Effects_Reorder');

                } catch (e) { }
        },
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
