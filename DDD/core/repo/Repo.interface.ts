export interface RepoInterface<T> {
    exists(t: T): Promise<boolean>;
}