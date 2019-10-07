getSystemProperties();

function getSystemProperties() {
	try {
		print("Executing computation script for feature: FileSystem");

		var stats = ProductInformation.get(0);
		output = getOutputTemplate();

		output.MajorVersion = stats.sgiSwMajorVersion;
		output.MinorVersion = stats.sgiSwMinorVersion;
		output.VersionModifier = stats.sgiSwVersionModifier;
		
		output.osVersion = output.MajorVersion + "." + output.MinorVersion + "." + output.VersionModifier;
		scriptOutput.add(output);
		print("Completed executing computation script for feature: FileSystem");

		return true;
	} catch (e) {
		print("failed in FileSystem" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {

	};
	return output;
}