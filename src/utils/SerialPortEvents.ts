import { EventEmitter } from 'events';

export class SerialPortEvents extends EventEmitter {
	constructor() {
		super();
		this.setMaxListeners(50);
	}

	emit<T extends keyof SerialPortEventTypes>(event: T, ...parameters: Parameters<SerialPortEventTypes[T]>) {
		return super.emit(event, ...parameters);
	}

	on<T extends keyof SerialPortEventTypes>(event: T, listener: SerialPortEventTypes[T]) {
		return super.on(event, listener);
	}

	once<T extends keyof SerialPortEventTypes>(event: T, listener: SerialPortEventTypes[T]) {
		return super.once(event, listener);
	}
}

export type SerialPortEventTypes = {
	/**
	 * Event triggered when serialport library emits an error. The error is simply forwarded.
	 * @param {Error} e
	 */
	onError: (e: Error) => void;
};
