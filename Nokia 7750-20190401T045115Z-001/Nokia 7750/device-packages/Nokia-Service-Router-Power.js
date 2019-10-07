getPower();

function getPower() {
	try {
		print("Executing computation script for feature: Power Supply");
		for (var i = 0; i < power1.size(); i++) {
			var stats = power1.get(i);
						
			output1 = getOutputTemplate();
			output1.index = String(i)+ "";
			
			output1.id = stats.tmnxChassisPowerSupplyId;


			if (stats.tmnxChassisPowerSupply1Status == 2) {
				output1.statusValue = 0;
				output1.statusString = "Not Equipped";
			} else if (stats.tmnxChassisPowerSupply1Status == 3) {
				output1.statusValue = 100;
				output1.statusString = "Ok";
			} else if (stats.tmnxChassisPowerSupply1Status == 4) {
				output1.statusValue = 0;
				output1.statusString = "Failed";
			} else if (stats.tmnxChassisPowerSupply1Status == 5) {
				output1.statusValue = 0;
				output1.statusString = "Out Of Service";
			} else {
				output1.statusValue = 0;
				output1.statusString = "Unknown";
			}
			output1.label = "Power Supply-1" + " - " + output1.index;

			scriptOutput.add(output1);
			print("Completed executing computation script for feature: Power Supply1");
		}

		for (var i = 0; i < power2.size(); i++) {
			var stats = power2.get(i);
			output2 = getOutputTemplate();
			output2.index = String(i) + "";
			
			output2.id = stats.tmnxChassisPowerSupplyId;
			
			if (stats.tmnxChassisPowerSupply2Status == 1) {
				output2.statusValue = 0;
				output2.statusString = "StateUnknown";
			} else

			if (stats.tmnxChassisPowerSupply2Status == 2) {
				output2.statusValue = 0;
				output2.statusString = "Not Equipped";
			} else if (stats.tmnxChassisPowerSupply2Status == 3) {
				output2.statusValue = 100;
				output2.statusString = "Ok";
			} else if (stats.tmnxChassisPowerSupply2Status == 4) {
				output2.statusValue = 0;
				output2.statusString = "Failed";
			} else if (stats.tmnxChassisPowerSupply2Status == 5) {
				output2.statusValue = 0;
				output2.statusString = "Out Of Service";
			} else {
				output2.statusValue = 0;
				output2.statusString = "Unknown";
			}

			output2.label = "Power Supply-2" + " - " + output2.index;

			scriptOutput.add(output2);
			print("Completed executing computation script for feature: Power Supply2");
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