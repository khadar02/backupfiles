getHardware();

function getHardware() {
    try {
       print("Executing computation script for feature: Hardware");
        for (var i = 0; i < HwTable.size(); i++) {
            var stats = HwTable.get(i);
            output = getOutputTemplate();
            output.index= i;
            
            output.mfstring = stats.tmnxHwMfgString;
            
            output.mfboardnum = stats.tmnxHwMfgBoardNumber;
            
            output.serialnumber = stats.tmnxHwSerialNumber;
            
            output.hwclass = getStatus(stats.tmnxHwClass);
            
            output.hwname = stats.tmnxHwName;
      
            output.name = stats.tmnxHwName;
            
            output.adminstate = stats.tmnxHwAdminState;
            output.operatestate = stats.tmnxHwOperState;

            output.tmnxHwTempSensor = stats.tmnxHwTempSensor;
            output.hwtemperature = stats.tmnxHwTemperature;
            
            output.swcodeversion = stats.tmnxHwSoftwareCodeVersion;
            scriptOutput.add(output);
            print("Completed executing computation script for feature: Hardware");
        }

        scriptOutput.add(output);
        return true;
    } catch (e) {
        print("failed in Hardware" + "  " + e.stack);
        return false;
    }
}

function getOutputTemplate() {
    var output = {
      
    };
    return output;
}   

function getStatus(status) {
    switch (status) {
        case "1":
            return "Other";
        case "2":
            return "Unknown";
        case "3":
            return "chassis";
        case "4":
            return "container";
        case "5":
            return "powerSupply";
        case "6":
            return "fan";
        case "7":
            return "sensor";
        case "8":
            return "ioModule";
        case "9":
            return "cpmModule";
        case "10":
            return "fabricModule";
        case "11":
            return "mdaModule";
        case "12":
            return "flashDiskModule";
        case "13":
            return "port";
        case "14":
            return "mcm";
        case "15":
            return "ccm";
    }
}