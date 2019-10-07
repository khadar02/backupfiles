processDeviceInterfaceInventory();

function processDeviceInterfaceInventory() {
	for (var i = 0; i < ifEntry.size(); i++) {
		var stats = ifEntry.get(i);
		var output = getOutputTemplate();
		output.ifIndex = stats.ifIndex;
		output.ifDescr = stats.ifDescr;
		output.ifType = stats.ifType;
		output.ifTypeLabel = getIfTypeLabel(stats.ifType);
		output.ifAdminStatus = stats.ifAdminStatus;
		output.ifAdminStatusLabel = getifAdminStatusLabel(stats.ifAdminStatus);
		output.ifOperStatus = stats.ifOperStatus;
		output.ifOperStatusLabel = getIfOperStatusLabel(stats.ifOperStatus)
		output.ifMtu = stats.ifMtu;
		output.ifSpeed = stats.ifSpeed;
		output.ifSpeedMbps = Math.round(stats.ifSpeed/1000000);
		if(stats.hpSwitchPortTrunkGroup != null && stats.hpSwitchPortTrunkGroup != 0) {
			output.ifTrunking = "Yes";
		}
		scriptOutput.add(output);
	}
	return true;
}

function getIfOperStatusLabel(ifOperStatus) {
	switch(ifOperStatus) {
        case 1:
            return "UP";
        case 2:
            return "DOWN";
        case 3:
            return "TESTING";
        case 4:
            return "UNKNOWN";
        case 5:
            return "DORMANT";
        case 6:
            return "NOTPRESENT";
        case 7:
            return "LOWERLAYERDOWN";
        default:
            return "UNKNOWN";
	}
}

function getifAdminStatusLabel(ifAdminStatus) {
	switch(ifAdminStatus) {
        case 1:
            return "UP";
        case 2:
            return "DOWN";
        case 3:
            return "TESTING";
        default:
            return "UNKNOWN";

    }
}

function getIfTypeLabel(ifType) {
	switch(ifType) {
		case 1:
            return "OTHER";
        case 2:
            return "REGULAR1822";
        case 3:
            return "HDH1822";
        case 4:
            return "DDNX25";
        case 5:
            return "RFC877X25";
        case 6:
            return "ETHERNETCSMACD";
        case 7:
            return "ISO88023CSMACD";
        case 8:
            return "ISO88024TOKENBUS";
        case 9:
            return "ISO88025TOKENRING";
        case 10:
            return "ISO88026MAN";
        case 11:
            return "STARLAN";
        case 12:
            return "PROTEON10MBIT";
        case 13:
            return "PROTEON80MBIT";
        case 14:
            return "HYPERCHANNEL";
        case 15:
            return "FDDI";
        case 16:
            return "LAPB";
        case 17:
            return "SDLC";
        case 18:
            return "DS1";
        case 19:
            return "E1";
        case 20:
            return "BASICISDN";
        case 21:
            return "PRIMARYISDN";
        case 22:
            return "PROPPOINTTOPOINTSERIAL";
        case 23:
            return "PPP";
        case 24:
            return "SOFTWARELOOPBACK";
        case 25:
            return "EON";
        case 26:
            return "ETHERNET3MBIT";
        case 27:
            return "NSIP";
        case 28:
            return "SLIP";
        case 29:
            return "ULTRA";
        case 30:
            return "DS3";
        case 31:
            return "SIP";
        case 32:
            return "FRAMERELAY";
        case 33:
            return "RS232";
        case 34:
            return "PARA";
        case 35:
            return "ARCNET";
        case 36:
            return "ARCNETPLUS";
        case 37:
            return "ATM";
        case 38:
            return "MIOX25";
        case 39:
            return "SONET";
        case 40:
            return "X25PLE";
        case 41:
            return "ISO88022LLC";
        case 42:
            return "LOCALTALK";
        case 43:
            return "SMDSDXI";
        case 44:
            return "FRAMERELAYSERVICE";
        case 45:
            return "V35";
        case 46:
            return "HSSI";
        case 47:
            return "HIPPI";
        case 48:
            return "MODEM";
        case 49:
            return "AAL5";
        case 50:
            return "SONETPATH";
        case 51:
            return "SONETVT";
        case 52:
            return "SMDSICIP";
        case 53:
            return "PROPVIRTUAL";
        case 54:
            return "PROPMULTIPLEXOR";
        case 55:
            return "IEEE80212";
        case 56:
            return "FIBRECHANNEL";
        case 57:
            return "HIPPIINTERFACE";
        case 58:
            return "FRAMERELAYINTERCONNECT";
        case 59:
            return "AFLANE8023";
        case 60:
            return "AFLANE8025";
        case 61:
            return "CCTEMUL";
        case 62:
            return "FASTETHER";
        case 63:
            return "ISDN";
        case 64:
            return "V11";
        case 65:
            return "V36";
        case 66:
            return "G703AT64K";
        case 67:
            return "G703AT2MB";
        case 68:
            return "QLLC";
        case 69:
            return "FASTETHERFX";
        case 70:
            return "CHANNEL";
        case 71:
            return "IEEE80211";
        case 72:
            return "IBM370PARCHAN";
        case 73:
            return "ESCON";
        case 74:
            return "DLSW";
        case 75:
            return "ISDNS";
        case 76:
            return "ISDNU";
        case 77:
            return "LAPD";
        case 78:
            return "IPSWITCH";
        case 79:
            return "RSRB";
        case 80:
            return "ATMLOGICAL";
        case 81:
            return "DS0";
        case 82:
            return "DS0BUNDLE";
        case 83:
            return "BSC";
        case 84:
            return "ASYNC";
        case 85:
            return "CNR";
        case 86:
            return "ISO88025DTR";
        case 87:
            return "EPLRS";
        case 88:
            return "ARAP";
        case 89:
            return "PROPCNLS";
        case 90:
            return "HOSTPAD";
        case 91:
            return "TERMPAD";
        case 92:
            return "FRAMERELAYMPI";
        case 93:
            return "X213";
        case 94:
            return "ADSL";
        case 95:
            return "RADSL";
        case 96:
            return "SDSL";
        case 97:
            return "VDSL";
        case 98:
            return "ISO88025CRFPINT";
        case 99:
            return "MYRINET";
        case 100:
            return "VOICEEM";
        case 101:
            return "VOICEFXO";
        case 102:
            return "VOICEFXS";
        case 103:
            return "VOICEENCAP";
        case 104:
            return "VOICEOVERIP";
        case 105:
            return "ATMDXI";
        case 106:
            return "ATMFUNI";
        case 107:
            return "ATMIMA ";
        case 108:
            return "PPPMULTILINKBUNDLE";
        case 109:
            return "IPOVERCDLC ";
        case 110:
            return "IPOVERCLAW ";
        case 111:
            return "STACKTOSTACK ";
        case 112:
            return "VIRTUALIPADDRESS ";
        case 113:
            return "MPC ";
        case 114:
            return "IPOVERATM ";
        case 115:
            return "ISO88025FIBER ";
        case 116:
            return "TDLC ";
        case 117:
            return "GIGABITETHERNET ";
        case 118:
            return "HDLC ";
        case 119:
            return "LAPF ";
        case 120:
            return "V37 ";
        case 121:
            return "X25MLP ";
        case 122:
            return "X25HUNTGROUP ";
        case 123:
            return "TRASNPHDLC ";
        case 124:
            return "INTERLEAVE ";
        case 125:
            return "FAST ";
        case 126:
            return "IP ";
        case 127:
            return "DOCSCABLEMACLAYER ";
        case 128:
            return "DOCSCABLEDOWNSTREAM ";
        case 129:
            return "DOCSCABLEUPSTREAM ";
        case 130:
            return "A12MPPSWITCH ";
        case 131:
            return "TUNNEL ";
        case 132:
            return "COFFEE ";
        case 133:
            return "CES ";
        case 134:
            return "ATMSUBINTERFACE ";
        case 135:
            return "L2VLAN ";
        case 136:
            return "L3IPVLAN ";
        case 137:
            return "L3IPXVLAN ";
        case 138:
            return "DIGITALPOWERLINE ";
        case 139:
            return "MEDIAMAILOVERIP ";
        case 140:
            return "DTM ";
        case 141:
            return "DCN ";
        case 142:
            return "IPFORWARD ";
        case 143:
            return "MSDSL ";
        case 144:
            return "IEEE1394 ";
        case 145:
            return "IF-GSN ";
        case 146:
            return "DVBRCCMACLAYER ";
        case 147:
            return "DVBRCCDOWNSTREAM ";
        case 148:
            return "DVBRCCUPSTREAM ";
        case 149:
            return "ATMVIRTUAL ";
        case 150:
            return "MPLSTUNNEL ";
        case 151:
            return "SRP ";
        case 152:
            return "VOICEOVERATM ";
        case 153:
            return "VOICEOVERFRAMERELAY ";
        case 154:
            return "IDSL ";
        case 155:
            return "COMPOSITELINK ";
        case 156:
            return "SS7SIGLINK ";
        case 157:
            return "PROPWIRELESSP2P ";
        case 158:
            return "FRFORWARD ";
        case 159:
            return "RFC1483 ";
        case 160:
            return "USB ";
        case 161:
            return "IEEE8023ADLAG ";
        case 162:
            return "BGPPOLICYACCOUNTING ";
        case 163:
            return "FRF16MFRBUNDLE ";
        case 164:
            return "H323GATEKEEPER ";
        case 165:
            return "H323PROXY ";
        case 166:
            return "MPLS ";
        case 167:
            return "MFSIGLINK ";
        case 168:
            return "HDSL2 ";
        case 169:
            return "SHDSL ";
        case 170:
            return "DS1FDL ";
        case 171:
            return "POS ";
        case 172:
            return "DVBASIIN ";
        case 173:
            return "DVBASIOUT ";
        case 174:
            return "PLC ";
        case 175:
            return "NFAS ";
        case 176:
            return "TR008 ";
        case 177:
            return "GR303RDT ";
        case 178:
            return "GR303IDT ";
        case 179:
            return "ISUP ";
        case 180:
            return "PROPDOCSWIRELESSMACLAYER ";
        case 181:
            return "PROPDOCSWIRELESSDOWNSTREAM ";
        case 182:
            return "PROPDOCSWIRELESSUPSTREAM ";
        case 183:
            return "HIPERLAN2 ";
        case 184:
            return "PROPBWAP2MP ";
        case 185:
            return "SONETOVERHEADCHANNEL ";
        case 186:
            return "DIGITALWRAPPEROVERHEADCHANNEL ";
        case 187:
            return "AAL2 ";
        case 188:
            return "RADIOMAC ";
        case 189:
            return "ATMRADIO ";
        case 190:
            return "IMT ";
        case 191:
            return "MVL ";
        case 192:
            return "REACHDSL ";
        case 193:
            return "FRDLCIENDPT ";
        case 194:
            return "ATMVCIENDPT ";
        case 195:
            return "OPTICALCHANNEL ";
        case 196:
            return "OPTICALTRANSPORT ";
        case 197:
            return "PROPATM ";
        case 198:
            return "VOICEOVERCABLE ";
        case 199:
            return "INFINIBAND ";
        case 200:
            return "TELINK ";
        case 201:
            return "Q2931 ";
        case 202:
            return "VIRTUALTG ";
        case 203:
            return "SIPTG ";
        case 204:
            return "SIPSIG ";
        case 205:
            return "DOCSCABLEUPSTREAMCHANNEL ";
        case 206:
            return "ECONET ";
        case 207:
            return "PON155 ";
        case 208:
            return "PON622 ";
        case 209:
            return "BRIDGE ";
        case 210:
            return "LINEGROUP ";
        case 211:
            return "VOICEEMFGD ";
        case 212:
            return "VOICEFGDEANA ";
        case 213:
            return "VOICEDID ";
        case 214:
            return "MPEGTRANSPORT ";
        case 215:
            return "SIXTOFOUR ";
        case 216:
            return "GTP ";
        case 217:
            return "PDNETHERLOOP1 ";
        case 218:
            return "PDNETHERLOOP2 ";
        case 219:
            return "OPTICALCHANNELGROUP ";
        case 220:
            return "HOMEPNA ";
        case 221:
            return "GFP ";
        case 222:
            return "CISCOISLVLAN ";
        case 223:
            return "ACTELISMETALOOP ";
        case 224:
            return "FCIPLINK ";
        case 225:
            return "RPR ";
        case 226:
            return "QAM ";
        case 227:
            return "LMP ";
        case 228:
            return "CBLVECTASTAR ";
        case 229:
            return "DOCSCABLEMCMTSDOWNSTREAM ";
        case 230:
            return "ADSL2 ";
        case 231:
            return " MACSECCONTROLLEDIF ";
        case 232:
            return "MACSECUNCONTROLLEDIF ";
        case 233:
            return "AVICIOPTICALETHER ";
        case 234:
            return "ATMBOND ";
        case 235:
            return "VOICEFGDOS ";
        case 236:
            return "MOCAVERSION1 ";
        case 237:
            return " IEEE80216WMAN ";
        case 238:
            return "ADSL2PLUS ";
        case 239:
            return "DVBRCSMACLAYER ";
        case 240:
            return "DVBTDM ";
        case 241:
            return "DVBRCSTDMA ";
        default:
            return "UNKNOWN";		
	}
}

function getOutputTemplate () {
	var output = {
		"ifIndex": 0,
		"ifDescr" : "",
		"ifType" : 1,
		"ifTypeLabel" : "",
		"ifAdminStatus" : 0,
		"ifAdminStatusLabel" : "",
		"ifOperStatus" : 0,
		"IfOperStatusLabel" : "",
		"ifMtu" : 0,
		"ifSpeed" : 0,
		"ifSpeedMbps" : 0,
		"ifTrunking" : "No"
	};
	return output;
}
