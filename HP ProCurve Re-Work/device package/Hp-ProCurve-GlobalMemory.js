getGlobalMemory();
function getGlobalMemory() {
	try {
		print("Executing computation script for feature: Global Memory");
		for (var i = 0; i < GlobalMemory.size(); i++) {
			var stats = GlobalMemory.get(i);
			output1=getOutputTemplate();
			
			
			output1.TotalMemSlot=stats.hpGlobalMemSlotCnt;
			output1.AllocMemslots=stats.hpGlobalMemAllocSegCnt;
			output1.FreeMemslots=stats.hpGlobalMemFreeSegCnt;
			output1.TotalMemMB=((stats.hpGlobalMemTotalBytes)/1024)/1024;
			output1.AllocMemMB=((stats.hpGlobalMemAllocBytes)/1024)/1024;
			output1.FreeMemMB=((stats.hpGlobalMemFreeBytes)/1024)/1024;	
			
			output1.utilization=Math.round(((stats.hpGlobalMemAllocBytes)/(stats.hpGlobalMemTotalBytes))*100);
			output1.name="Global Memory";
			
			scriptOutput.add(output1);
			
			print("Completed executing computation script for feature: Global Memory");
			
		}
		return true;
	}
	catch (e) {
			print("failed in Global Memory" + "  " + e.stack);
			return false;
		}
}

function getOutputTemplate () {
	var output = {
	};
	return output;
}

getLocalMemory();
function getLocalMemory() {
	try {
		print("Executing computation script for feature: device LocalMemory");
		for (var i = 0; i < LocalMemory.size(); i++) {
			var stats = LocalMemory.get(i);
			output2=getOutputTemplate();
			
						
			output2.TotalMemSlot=stats.hpLocalMemSlotCnt;
			output2.AllocMemslots=stats.hpLocalMemAllocSegCnt;
			output2.FreeMemslots=stats.hpLocalMemFreeSegCnt;
			output2.TotalMemMB=((stats.hpLocalMemTotalBytes)/1024)/1024;
			output2.AllocMemMB=((stats.hpLocalMemAllocBytes)/1024)/1024;
			output2.FreeMemMB=((stats.hpLocalMemFreeBytes)/1024)/1024;
			
			output2.utilization=Math.round(((stats.hpLocalMemAllocBytes)/(stats.hpLocalMemTotalBytes))*100);
			
			output2.name="Local Memory";
			scriptOutput.add(output2);
			
			print("Completed executing computation script for feature: device Local Memory");
			
		}
		return true;
	}
	catch (e) {
			print("failed in device Local Memory" + "  " + e.stack);
			return false;
		}
}