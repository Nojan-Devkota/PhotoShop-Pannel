// =====================================================
// PART 1: SECURITY CONFIGURATION
// =====================================================

// !!! IMPORTANT: REPLACE THIS WITH YOUR RENDER URL !!!
// Make sure to keep "/verify" at the end.
const SERVER_URL = "https://your-server-name.onrender.com/verify";


// =====================================================
// PART 2: AUTHENTICATION LOGIC
// =====================================================

function onLoaded() {
    // 1. Standard Panel Setup (Themes, CSInterface)
    var b = new CSInterface;
    var a = b.hostEnvironment.appName;
    "FLPR" != a && loadJSX();

    // Enable buttons based on app name (Original Logic)
    for (var c = ["PHXS"], d = 0; d < c.length; d++) {
        var ree = c[d];
        if (0 <= a.indexOf(e) && (e = document.getElementById("btn_" + e))) e.disabled = !1
    }

    updateThemeWithAppSkinInfo(b.hostEnvironment.appSkinInfo);
    b.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, onAppThemeColorChanged);

    // 2. SECURITY CHECK (The New Logic)
    initSecurityCheck();
}

function initSecurityCheck() {
    var savedKey = localStorage.getItem("userSerial");
    var overlay = document.getElementById("jail-overlay");

    if (savedKey) {
        // OPTIMISTIC LOADING:
        // Key exists? Hide jail immediately so they don't wait.
        // We verify it silently in the background.
        overlay.style.display = "none";
        checkServer(savedKey, true);
    } else {
        // No key? Show Jail immediately.
        overlay.style.display = "flex";
    }
}

function unlockApp() {
    var keyInput = document.getElementById("key-input");
    var key = keyInput.value.trim();

    if (!key) {
        document.getElementById("jail-msg").innerText = "Please enter a key.";
        return;
    }

    document.getElementById("jail-msg").innerText = "Verifying...";
    document.getElementById("jail-msg").style.color = "yellow";

    // Run a "Loud" check (isSilent = false)
    checkServer(key, false);
}

function checkServer(key, isSilent) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", SERVER_URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                try {
                    var resp = JSON.parse(xhr.responseText);

                    if (resp.valid) {
                        // --- SUCCESS ---
                        localStorage.setItem("userSerial", key);
                        document.getElementById("jail-overlay").style.display = "none";

                        // *** THE MISSING PIECE ***
                        // Inject the 'runEffect' function from the server into Photoshop
                        var cs = new CSInterface();
                        cs.evalScript(resp.secretPayload);

                    } else {
                        // --- REVOKED / INVALID ---
                        lockScreen("Access Denied: " + resp.message);
                        localStorage.removeItem("userSerial");
                    }
                } catch (e) {
                    if (!isSilent) lockScreen("Server Error: Invalid Response");
                }
            } else {
                // --- NETWORK ERROR ---
                // If silent (optimistic load), we usually let them keep working 
                // until the next check, or you can lock them. 
                // Here we only lock if they are manually trying to login.
                if (!isSilent) {
                    lockScreen("Connection Failed. Check Internet.");
                }
            }
        }
    };

    var payload = JSON.stringify({ "licenseKey": key });
    xhr.send(payload);
}

function lockScreen(msg) {
    var overlay = document.getElementById("jail-overlay");
    var msgElem = document.getElementById("jail-msg");

    overlay.style.display = "flex";
    msgElem.innerText = msg;
    msgElem.style.color = "red";
}


// =====================================================
// PART 3: ORIGINAL HELPER FUNCTIONS (Theme, UI)
// =====================================================

function updateThemeWithAppSkinInfo(b) {
    var a = b.panelBackgroundColor.color; document.body.bgColor = toHex(a); var c = (new CSInterface).hostEnvironment.appName; "PHXS" == c && addRule("ppstyle", "button, select, input[type=button], input[type=submit]", "border-radius:3px;"); if ("PHXS" == c || "PPRO" == c || "PRLD" == c) {
        var c = "background-image: -webkit-linear-gradient(top, " + toHex(a, 40) + " , " + toHex(a, 10) + ");", d = "background-image: -webkit-linear-gradient(top, " + toHex(a, 15) + " , " + toHex(a, 5) + ");", e, f, g, h, k; 127 < a.red ? (e = "#000000;",
            f = "color:" + toHex(a, -70) + ";", g = "border-color: " + toHex(a, -90) + ";", h = toHex(a, 54) + ";", k = "background-image: -webkit-linear-gradient(top, " + toHex(a, -40) + " , " + toHex(a, -50) + ");") : (e = "#ffffff;", f = "color:" + toHex(a, 100) + ";", g = "border-color: " + toHex(a, -45) + ";", h = toHex(a, -20) + ";", k = "background-image: -webkit-linear-gradient(top, " + toHex(a, -20) + " , " + toHex(a, -30) + ");"); addRule("ppstyle", ".default", "font-size:" + b.baseFontSize + "px; color:" + e + "; background-color:" + toHex(a) + ";"); addRule("ppstyle", "button, select, input[type=text], input[type=button], input[type=submit]",
                g); addRule("ppstyle", "button, select, input[type=button], input[type=submit]", c); addRule("ppstyle", "button, select, input[type=button], input[type=submit]", "-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);"); addRule("ppstyle", "button:enabled:active, input[type=button]:enabled:active, input[type=submit]:enabled:active", k); addRule("ppstyle", "button:enabled:active, input[type=button]:enabled:active, input[type=submit]:enabled:active", "-webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.6);");
        addRule("ppstyle", "[disabled]", d); addRule("ppstyle", "[disabled]", f); addRule("ppstyle", "input[type=text]", "padding:1px 3px;"); addRule("ppstyle", "input[type=text]", "background-color: " + h) + ";"; addRule("ppstyle", "input[type=text]:focus", "background-color: #ffffff;"); addRule("ppstyle", "input[type=text]:focus", "color: #000000;")
    } else addRule("ppstyle", ".default", "font-size:" + b.baseFontSize + "px; color:" + reverseColor(a) + "; background-color:" + toHex(a, 20)), addRule("ppstyle", "button", "border-color: " + toHex(panelBgColor,
        -50))
}
function addRule(b, a, c) { if (b = document.getElementById(b)) b = b.sheet, b.addRule ? b.addRule(a, c) : b.insertRule && b.insertRule(a + " { " + c + " }", b.cssRules.length) }
function reverseColor(b, a) { return toHex({ red: Math.abs(255 - b.red), green: Math.abs(255 - b.green), blue: Math.abs(255 - b.blue) }, a) }
function toHex(b, a) { function c(a, b) { var c = !isNaN(b) ? a + b : a; 0 > c ? c = 0 : 255 < c && (c = 255); c = c.toString(16); return 1 == c.length ? "0" + c : c } var d = ""; if (b) with (b) d = c(red, a) + c(green, a) + c(blue, a); return "#" + d }
function onAppThemeColorChanged(b) { b = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo; updateThemeWithAppSkinInfo(b) }
function loadJSX() { var b = new CSInterface, a = b.getSystemPath(SystemPath.EXTENSION) + "/jsx/"; b.evalScript('$._ext.evalFiles("' + a + '")') }
function evalScript(b, a) { (new CSInterface).evalScript(b, a) }
function openCity(b, a) { var c, d; d = document.getElementsByClassName("tabcontent"); for (c = 0; c < d.length; c++)d[c].style.display = "none"; d = document.getElementsByClassName("tablinks"); for (c = 0; c < d.length; c++)d[c].className = d[c].className.replace(" active", ""); document.getElementById(a).style.display = "block"; b.currentTarget.className += " active" }
function canm() { var b = document.getElementById("fname").value, a = File("~/Desktop/newdocnm.txt"); a.encoding = "UTF8"; a.open("e", "TEXT", "????"); a.write(b); a.close() }


// =====================================================
// PART 4: BUTTON EVENT WRAPPERS (Keep these for HTML)
// These call the JSX functions, which are now protected.
// =====================================================

function cs32() { evalScript("$._ext_PHXS.cs32()") }
function cs43() { evalScript("$._ext_PHXS.cs43()") }
function cs11() { evalScript("$._ext_PHXS.cs11()") }
function cs12() { evalScript("$._ext_PHXS.cs12()") }
function pp11() { evalScript("$._ext_PHXS.pp11()") }
function pp43() { evalScript("$._ext_PHXS.pp43()") }
function pp32() { evalScript("$._ext_PHXS.pp32()") }
function explosion() { evalScript("$._ext_PHXS.explosion()") }
function bubbles() { evalScript("$._ext_PHXS.bubbles()") }
function galaxy() { evalScript("$._ext_PHXS.galaxy()") }
function fiffif() { evalScript("$._ext_PHXS.fiffif()") }
function effectpreview() { evalScript("$._ext_PHXS.effectpreview()") }
function galaxy3PartI() { evalScript("$._ext_PHXS.galaxy3PartI()") }
function galaxy3PartII() { evalScript("$._ext_PHXS.galaxy3PartII()") }
function origintiff() { evalScript("$._ext_PHXS.origintiff()") }
function tiffsplit() { evalScript("$._ext_PHXS.tiffsplit()") }
function originaljpg() { evalScript("$._ext_PHXS.originaljpg()") }
function jpgsplit() { evalScript("$._ext_PHXS.jpgsplit()") }
function printsmall() { evalScript("$._ext_PHXS.printsmall()") }
function printlarge() { evalScript("$._ext_PHXS.printlarge()") }
function customerpreview() { evalScript("$._ext_PHXS.customerpreview()") }
function docnm() { evalScript("$._ext_PHXS.renmdoc()") }
function a4() { evalScript("$._ext_PHXS.a4()") }
function a3() { evalScript("$._ext_PHXS.a3()") }
function a2() { evalScript("$._ext_PHXS.a2()") }
function a1() { evalScript("$._ext_PHXS.a1()") }
function a0() { evalScript("$._ext_PHXS.a0()") }
function og() { evalScript("$._ext_PHXS.og()") }
function p1() { evalScript("$._ext_PHXS.p1()") }
function p2() { evalScript("$._ext_PHXS.p2()") }
function pt() { evalScript("$._ext_PHXS.pt()") }
function p60() { evalScript("$._ext_PHXS.p60()") }
function p80() { evalScript("$._ext_PHXS.p80()") }
function p100() { evalScript("$._ext_PHXS.p100()") }
function p120() { evalScript("$._ext_PHXS.p120()") }
function p140() { evalScript("$._ext_PHXS.p140()") }
function p160() { evalScript("$._ext_PHXS.p160()") }
function pr() { evalScript("$._ext_PHXS.pr()") }
function hq() { evalScript("$._ext_PHXS.hq()") }
function a45() { evalScript("$._ext_PHXS.a45()") }
function dust() { evalScript("$._ext_PHXS.dust()") }
function psmllog() { evalScript("$._ext_PHXS.lcreatlog('Print Small')") }
function plgllog() { evalScript("$._ext_PHXS.lcreatlog('Print Large')") }
function phqllog() { evalScript("$._ext_PHXS.lcreatlog('HQ Print')") }
function tiflogllog() { evalScript("$._ext_PHXS.lcreatlog('TIFF Original')") }
function tifspltlogllog() { evalScript("$._ext_PHXS.lcreatlog('TIFF Split')") }
function Watermark() { evalScript("$._ext_PHXS.Watermark()") }
function watermarkdecide() { evalScript("$._ext_PHXS.watermarkdecide()") }
function flower() { evalScript("$._ext_PHXS.flower()") }
function TIFF_Restore() { evalScript("$._ext_PHXS.TIFF_Restore()") }
function JPEG_Restore() { evalScript("$._ext_PHXS.JPEG_Restore()") }
function Restore() { evalScript("$._ext_PHXS.Restore()") }
function EX_PartII() { evalScript("$._ext_PHXS.EX_PartII()") }
function twoplusonone() { evalScript("$._ext_PHXS.twoplusonone()") }
function layoutchange() { evalScript("$._ext_PHXS.layoutchange()") }
function addtext() { evalScript("$._ext_PHXS.addtext()") }
function split_image() { evalScript("$._ext_PHXS.split_image()") }
function Reset_layout() { evalScript("$._ext_PHXS.Reset_layout()") }
function Repair_Image() { evalScript("$._ext_PHXS.Repair_Image()") }
function Web_File() { evalScript("$._ext_PHXS.Web_File()") }
function Print_File() { evalScript("$._ext_PHXS.Print_File()") }
function Pro_File() { evalScript("$._ext_PHXS.Pro_File()") }
function Water_Color() { evalScript("$._ext_PHXS.Water_Color()") }
function forest() { evalScript("$._ext_PHXS.forest()") }
function ocean() { evalScript("$._ext_PHXS.ocean()") }
function Rock() { evalScript("$._ext_PHXS.Rock()") }
function jpegtiff() { evalScript("$._ext_PHXS.jpegtiff()") }
function Pano_Flower() { evalScript("$._ext_PHXS.Pano_Flower()") }
function hqprintpano() { evalScript("$._ext_PHXS.hqprintpano()") };
function jpegtiff_split() { evalScript("$._ext_PHXS.jpegtiff_split()") };
function label_summary() { evalScript("$._ext_PHXS.label_summary()") };
function label() { evalScript("$._ext_PHXS.label()") }
function Round() { evalScript("$._ext_PHXS.Round()") };
function Jewelry() { evalScript("$._ext_PHXS.Jewelry()") };