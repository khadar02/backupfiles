getFanTable();

function getFanTable() {
	try {
		print("Executing computation script for feature: Fan");
		for (var i = 0; i < Fan.size(); i++) {
			var stats = Fan.get(i);

			output = getOutputTemplate();

			output.index = stats.tmnxChassisFanIndex;
			
			if (stats.tmnxChassisFanOperStatus == 1) {
				output.statusValue = 0;
				output.statusString = "Unknown";
			} 
			else if (stats.tmnxChassisFanOperStatus == 2) 
			{
				output.statusValue = 0;
				output.statusString = "Not Equipped";
			}
			else if (stats.tmnxChassisFanOperStatus == 3) 
			{
				output.statusValue = 100;
				output.statusString = "Ok";
			}
			else if (stats.tmnxChassisFanOperStatus == 4) 
			{
				output.statusValue = 0;
				output.statusString = "Failed";
			}
			else if (stats.tmnxChassisFanOperStatus == 5) 
			{
				output.statusValue = 0;
				output.statusString = "Out Of Service";
			}
			else
			{
				output.statusValue = 0;
				output.statusString = "Unknown";
			}

			output.fanspeed = getStatus(stats.tmnxChassisFanOperStatus);
			output.label = "Fan" + " - " + i ;
			scriptOutput.add(output);

			print("Completed executing computation script for feature: Fan");
		}
		return true;
	} catch (e) {
		print("failed in Fan" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {
		"componentId": "Fan",
		"metricName": "ciscoEnvMonFanState",
	};
	return output;
}

function getStatus(status) {
    switch (status) {
        case "0":
            return "notApplicable";
        case "1":
            return "Unknown";
        case "2":
            return "halfSpeed";
        case "3":
            return "fullSpeed";
        case "4":
            return "lowSpeed";
    }
}