import { Location } from "../core/location";
export declare class FetchResponse {
    readonly response: Response;
    constructor(response: Response);
    get succeeded(): boolean;
    get failed(): boolean;
    get unprocessableEntity(): boolean;
    get redirected(): boolean;
    get location(): Location;
    get isHTML(): "" | RegExpMatchArray | null;
    get statusCode(): number;
    get contentType(): string | null;
    get responseText(): Promise<string>;
    get responseHTML(): Promise<string | undefined>;
    header(name: string): string | null;
}
