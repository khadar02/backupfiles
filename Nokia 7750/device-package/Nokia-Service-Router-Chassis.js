getChassis();

function getChassis() {
    try {
       print("Executing computation script for feature: ChassisTable");
        for (var i = 0; i < ChassisTable.size(); i++) {
            var stats = ChassisTable.get(i);
            output = getOutputTemplate();
            output.index= i;
            output.chassisindex = stats.tmnxChassisIndex;
            output.chassisname = stats.tmnxChassisName;
           
            output.chassistype = stats.tmnxChassisType;
            output.powersupplies = stats.tmnxChassisNumPwrSupplies;
            
            output.fantrays = stats.tmnxChassisNumFanTrays;
            output.fans = stats.tmnxChassisNumFans;
            
           
            

            

            scriptOutput.add(output);
            print("Completed executing computation script for feature: ChassisTable");
        }

        scriptOutput.add(output);
        return true;
    } catch (e) {
        print("failed in ChassisTable" + "  " + e.stack);
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
