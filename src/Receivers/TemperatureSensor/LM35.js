var LM35 = require('../TemperatureSensor').TemperatureSensor;

LM35.prototype.getConversionFactor = function() {
	return this.input / this.baseVoltage;
}

LM35.prototype.getCelsius = function () {
	var v = new Number(this.getConversionFactor() * 100);
	return v.toFixed(2);
};

LM35.prototype.getFahrenheit = function () {
	var v = ((this.getConversionFactor() * 9) / 5 ) + 32;
	return v.toFixed(2);
};

exports.TemperatureSensor = LM35;