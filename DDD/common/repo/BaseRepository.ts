export abstract class BaseRepository<T> {
    public exists(t: T): Promise<boolean>;
}