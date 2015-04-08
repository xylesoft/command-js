var Command = function(entity, name) {
    this.reciever = entity;
    this.id = name;
};

Command.prototype.execute = function() {
	throw new Exception('Command::execute(): Needs to be overloaded for a specific implementation.');
};

exports.Command = Command;