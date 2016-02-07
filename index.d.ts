declare var promiseify: promiseify;

interface Awaitable {
    <T>(...args): PromiseLike<T>;
}

interface promiseify {
    (func: Function): Awaitable;
}

export = promiseify;
