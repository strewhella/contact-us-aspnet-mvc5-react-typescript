export interface HttpResponse<T> {
    error?: boolean;
    loading?: boolean;
    body?: T;
}
