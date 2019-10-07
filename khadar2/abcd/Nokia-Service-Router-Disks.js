getDisk();

function getDisk() {
	try {
		print("Executing computation script for feature: Disk");
		for (var i = 0; i < Disk.size(); i++) {
			var stats = Disk.get(i);

			output = getOutputTemplate();
						
			if (stats.tmnxCpmFlashOperStatus == 1) {
				output.statusValue = 0;
				output.statusString = "StateUnknown";
			} 
			else if (stats.tmnxCpmFlashOperStatus == 2) 
			{
				output.statusValue = 0;
				output.statusString = "NotEquipped";
			}
			else if (stats.tmnxCpmFlashOperStatus == 3) 
			{
				output.statusValue = 100;
				output.statusString = "StateOk";
			}
			else if (stats.tmnxCpmFlashOperStatus == 4) 
			{
				output.statusValue = 0;
				output.statusString = "StateFailed";
			}
			else if (stats.tmnxCpmFlashOperStatus == 5) 
			{
				output.statusValue = 0;
				output.statusString = "StateOutOfService";
			}
			else
			{
				output.statusValue = 0;
				output.statusString = "Unknown";
			}

			var used = stats.tmnxCpmFlashUsed;

			var total = stats.tmnxCpmFlashCapacity;

			var available = total - used;

			output.usedGB = getRoundedToTwoDecimalPlaces(used /(1024* 1024 * 1024));

			output.availableGB = getRoundedToTwoDecimalPlaces(available /(1024* 1024 * 1024));

			output.totalGB = getRoundedToTwoDecimalPlaces(total /(1024* 1024 * 1024));

			var utilizationpercent = (output.usedGB / output.totalGB) *100;

			output.utilization = getRoundedToTwoDecimalPlaces(utilizationpercent);

			output.label = "Disk";

			scriptOutput.add(output);

			print("Completed executing computation script for feature: Disk");
		}
		return true;
	} catch (e) {
		print("failed in Disk" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {
		"componentId": "Disk",
		"metricName": "ciscoEnvMonFanState",
	};
	return output;
}
