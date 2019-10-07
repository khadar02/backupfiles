getPower();

function getPower() {
	try {
		print("Executing computation script for feature: Power Supply");
		for (var i = 0; i < Power.size(); i++) {
			var stats = Power.get(i);
			output = getOutputTemplate();
			output.id = stats.tmnxChassisPowerSupplyId;

			if (stats.tmnxChassisPowerSupply1Status == 1) {
				output.statusValue = 0;
				output.statusString = "StateUnknown";
			} else if (stats.tmnxChassisPowerSupply1Status == 2) {
				output.statusValue = 0;
				output.statusString = "deviceNotEquipped";
			} else if (stats.tmnxChassisPowerSupply1Status == 3) {
				output.statusValue = 100;
				output.statusString = "deviceStateOk";
			} else if (stats.tmnxChassisPowerSupply1Status == 4) {
				output.statusValue = 0;
				output.statusString = "deviceStateFailed";
			} else if (stats.tmnxChassisPowerSupply1Status == 5) {
				output.statusValue = 0;
				output.statusString = "deviceStateOutOfService";
			} 
			else 
			{
				output.statusValue = 0;
				output.statusString = "Unknown";
			}

			if (stats.tmnxChassisPowerSupply2Status == 1) {
				output.statusValue = 0;
				output.statusString = "StateUnknown";
			} else if (stats.tmnxChassisPowerSupply2Status == 2) {
				output.statusValue = 0;
				output.statusString = "deviceNotEquipped";
			} else if (stats.tmnxChassisPowerSupply2Status == 3) {
				output.statusValue = 100;
				output.statusString = "deviceStateOk";
			} else if (stats.tmnxChassisPowerSupply2Status == 4) {
				output.statusValue = 0;
				output.statusString = "deviceStateFailed";
			} else if (stats.tmnxChassisPowerSupply2Status == 5) {
				output.statusValue = 0;
				output.statusString = "deviceStateOutOfService";
			} 
			else 
			{
				output.statusValue = 0;
				output.statusString = "Unknown";
			}

			output.label = "PowerSupply";

			scriptOutput.add(output);
			print("Completed executing computation script for feature: Power Supply");
		}
		return true;
	} catch (e) {
		print("failed in Power" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {
		"componentId": "PowerSupply",
		"metricName": "ciscoEnvMonSupplyState",
	};
	return output;
}