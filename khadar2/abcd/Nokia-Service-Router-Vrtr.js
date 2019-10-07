getvrtr();

function getvrtr() {
	try {
		print("Executing computation script for feature: Vrtr");
		for (var i = 0; i < Vrtr.size(); i++) {
			var stats = Vrtr.get(i);
			output = getOutputTemplate();

			output.name = stats.vRtrName;

			if (stats.vRtrOperState == 2) {
				output.vRtrOperState = 100;
				output.statusString = "InService";
			} else if (stats.vRtrOperState == 3) {
				output.vRtrOperState = 0;
				output.statusString = "outOfService";
			} else if (stats.vRtrOperState == 4) {
				output.vRtrOperState = 0;
				output.statusString = "transition";
			} else {
				output.vRtrOperState = 0;
				output.statusString = "Unknown";
			}

			scriptOutput.add(output);
			print("Completed executing computation script for feature: Vrtr");
		}
		return true;
	} catch (e) {
		print("failed in Vrtr" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {
		"componentId": "VirtualRouter",
		"metricName": "virtualrouter",
	};
	return output;
}
