getvrtrInterfaces();

function getvrtrInterfaces() {
	var dict = {};
	try {
		//print("Step:1");
		print("Executing computation script for feature: Vrtr");
		for (var i = 0; i < vRtrName1.size(); i++) {
			var stats = vRtrName1.get(i);
			print("For Step:1");
			dict[stats['TableIndex_oid']] = stats['vRtrName']
		}
		//print("Step:2");
		var outputTemp = {};
		for (var i = 0; i < VrtrIftable.size(); i++) {
			var stats = VrtrIftable.get(i);
			var arr = stats['TableIndex_oid'].split('.');
			print(dict);
			var rtrName = dict[arr[0]];
			print(arr);
			print(dict[arr[0]]);
			var ifIndex = arr[1];
			var d = {};
			d.vRtrIfType = getIfTypeLabel(stats.vRtrIfType);
			d.vRtrIfName = stats.vRtrIfName;
			d.vrtrName = rtrName;
			d.ifIndex = ifIndex;
			
			var vrtrtypename = d.vrtrName + "-"+ d.vRtrIfName;
			d.vrtr_type_name = vrtrtypename;

			if (stats.vRtrIfAdminState == 2) {
				d.vRtrIfAdminState = 100;
				d.vRtrIfAdminStateStatus = "UP";
			} else if (stats.vRtrIfAdminState == 3) {
				d.vRtrIfAdminState = 0;
				d.vRtrIfAdminStateStatus = "Down";
			} else {
				d.vRtrIfAdminState = 0;
				d.vRtrIfAdminStateStatus = "Down";
			}

			d.vRtrIfOperState = stats.vRtrIfOperState;

			if (stats.vRtrIfOperState == 2) {
				d.vRtrIfOperState = 100;
				d.statusString = "UP";
			} else {
				d.vRtrIfOperState = 0;
				d.statusString = "Down";
			}

			outputTemp[stats['TableIndex_oid']] = d;
		}
		//print("Step:3");
		for (var i = 0; i < VrtrIfStatstable.size(); i++) {
			var stats = VrtrIfStatstable.get(i);
			var arr = stats['TableIndex_oid'].split('.');
			var rtrName = dict[arr[0]];
			var ifIndex = arr[1];
			var d = {}
			outputTemp[stats['TableIndex_oid']].vRtrIfRxBytes = stats.vRtrIfRxBytes;
			outputTemp[stats['TableIndex_oid']].vRtrIfTxBytes = stats.vRtrIfTxBytes;
			outputTemp[stats['TableIndex_oid']].vRtrIfRxPkts = stats.vRtrIfRxPkts;
			outputTemp[stats['TableIndex_oid']].vRtrIfTxPkts = stats.vRtrIfTxPkts;
			outputTemp[stats['TableIndex_oid']].vrtrName = rtrName;
			outputTemp[stats['TableIndex_oid']].ifIndex = ifIndex;
			outputTemp[stats['TableIndex_oid']].componentId = "operation-state";
			outputTemp[stats['TableIndex_oid']].metricName = "operation-state";
			outputTemp[stats['TableIndex_oid']].componentIdRB = "rx-bytes";
			outputTemp[stats['TableIndex_oid']].metricNameRB = "rx-bytes";
			outputTemp[stats['TableIndex_oid']].componentIdTB = "tx-bytes";
			outputTemp[stats['TableIndex_oid']].metricNameTB = "tx-bytes";
			outputTemp[stats['TableIndex_oid']].componentIdRP = "rx-pkts";
			outputTemp[stats['TableIndex_oid']].metricNameRP = "rx-pkts";
			outputTemp[stats['TableIndex_oid']].componentIdTP = "tx-pkts";
			outputTemp[stats['TableIndex_oid']].metricNameTP = "tx-pkts";
		}
		//print("Step:4");
		var output = {}
		for (var key in outputTemp) {
			scriptOutput.add(outputTemp[key]);
		}
		print("Completed executing computation script for feature: Vrtr");
		return true;
	} catch (e) {
		print("failed in Vrtr" + "  " + e.stack);
		return false;
	}
}

function getOutputTemplate() {
	var output = {};
	return output;
}

function getIfTypeLabel(vRtrIfType) {
	switch (vRtrIfType) {
		case 1:
			return "network";
		case 2:
			return "service";
		case 3:
			return "serviceIes";
		case 4:
			return "serviceRtdVpls";
		case 5:
			return "serviceVprn";
		case 6:
			return "serviceIesSubscriber";
		case 7:
			return "serviceIesGroup";
		case 8:
			return "serviceVprnSubscriber";
		case 9:
			return "serviceVprnGroup";
		case 10:
			return "serviceIesRedundant";
		case 11:
			return "serviceVprnRedundant";
		case 12:
			return "serviceVpls";
		case 13:
			return "serviceIesCem";
		case 14:
			return "serviceVprnCem";
		case 15:
			return "serviceVprnIPsec";
		case 16:
			return "serviceVprnIPMirror";
		case 17:
			return "serviceVideo";
		case 18:
			return "serviceVplsVideo";
		case 19:
			return "multiHomingPrimary";
		case 20:
			return "multiHomingSecondary";
		case 21:
			return "serviceIesTunnel";
		case 22:
			return "serviceIpReas";
		case 23:
			return "networkIpReas";
		case 24:
			return "networkVprn";
		case 25:
			return "tmsService";
		case 26:
			return "serviceIesAarp";
		case 27:
			return "serviceVprnAarp";
		case 28:
			return "serviceIesAa";
		case 29:
			return "serviceVprnAa";
		case 30:
			return "unnumMplsTp";
		default:
			return "Unknown";
	}
}