function mikrotik_processorload(data) {
data.point.addField("type", "ProcessorLoad1minRev");
return new java.lang.Double(data.processorLoad); 
}
