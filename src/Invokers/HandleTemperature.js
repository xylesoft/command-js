var HandleTemperature = function() {

};

HandleTemperature.prototype.handle = function(command) {

	var now = new Date();
	var id = command.id;
	var eventId = 'handle_temperature:' + id;

	var eventRecord = {
		id: eventId,
		created: now.getTime(),
		changes: {
			temperature: command.execute()
		}
	};

	return eventRecord;
};

exports.HandleTemperature = HandleTemperature;