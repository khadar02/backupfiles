getCpu();
function getCpu() {
        try {
                print("Executing computation script for feature: CPU");
				
				var stats = Cpu.get(0);
                output=getOutputTemplate();
				output.utilization=stats.cpuutilization;
                scriptOutput.add(output);
				
				print("Completed executing computation script for feature: CPU");
                return true;
            }
         catch (e) {
                print("failed in CPU" + "  " + e.stack);
                return false;
        }
}
function getOutputTemplate () {
        var output = {
				"name":"Cpu"
			};
        return output;
}