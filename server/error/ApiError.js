class ApiError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }

    static badRequest(message = 'Неверные данные или отсутствующие параметры') {
        return new this(400, message);
    }

    static internal(message = 'Внутренняя ошибка сервера') {
        return new this(500, message);
    }

    static forbidden(message = 'Доступ запрещен') {
        return new this(403, message);
    }
}

module.exports = ApiError;