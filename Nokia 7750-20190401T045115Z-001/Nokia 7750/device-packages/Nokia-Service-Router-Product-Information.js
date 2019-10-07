getSystemProperties();

function getSystemProperties() {
	try {
		print("Executing computation script for feature: ProductInformation");

		var stats = ProductInformation.get(0);
		output = getOutputTemplate();

		output.MajorVersion = stats.sgiSwMajorVersion;
		output.MinorVersion = stats.sgiSwMinorVersion;
		output.VersionModifier = stats.sgiSwVersionModifier;
		
		output.osVersion = output.MajorVersion + "." + output.MinorVersion + "." + output.VersionModifier;
		scriptOutput.add(output);
		print("Completed executing computation script for feature: ProductInformation");

		for (var i = 0; i < SerialNumber.size(); i++) {
			var stats = SerialNumber.get(i);

			if (stats.tmnxHwName == "Chassis 1") {
				output.serialNumber = stats.tmnxHwSerialNumber;
			} 
		}
		return true;
	} catch (e) {
		print("failed in ProductInformation" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {

	};
	return output;
}
