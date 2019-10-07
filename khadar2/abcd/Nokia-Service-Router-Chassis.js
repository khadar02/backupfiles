getChassis();

function getChassis() {
    try {
        print("Executing computation script for feature: ChassisTable");
        for (var i = 0; i < ChassisTable.size(); i++) {
            var stats = ChassisTable.get(i);
            output = getOutputTemplate();
            output.index= i;
            
            output.chassisname = stats.tmnxChassisName;
           
            output.chassistype = stats.tmnxChassisType;
            output.powersupplies = stats.tmnxChassisNumPwrSupplies;
            
            output.fantrays = stats.tmnxChassisNumFanTrays;
            output.fans = stats.tmnxChassisNumFans;
             
            output.mfstring = stats.tmnxHwMfgString;
            
            output.mfboardnum = stats.tmnxHwMfgBoardNumber;
            
            output.serialnumber = stats.tmnxHwSerialNumber;
            
            output.hwclass = stats.tmnxHwClass;
            
            output.hwname = stats.tmnxHwName;
      
           
            output.adminstate = stats.tmnxHwAdminState;
            output.operatestate = stats.tmnxHwOperState;

            output.tmnxHwTempSensor = stats.tmnxHwTempSensor;
            output.hwtemperature = stats.tmnxHwTemperature;
            
            output.swcodeversion = stats.tmnxHwSoftwareCodeVersion;
              
            scriptOutput.add(output);
            print("Completed executing computation script for feature: ChassisTable");
        }


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

