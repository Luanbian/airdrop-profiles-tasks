export interface ResponseAPI<T = undefined> {
    transaction: string;
    code: string;
    message: string;
    args: string[];
    data: T;
}
