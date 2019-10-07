function mikrotik_voltage(data) {
data.point.addField("type", "Input Voltage");
return new java.lang.Double(data.status); 
}
