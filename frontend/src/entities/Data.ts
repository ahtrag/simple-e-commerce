export declare module MatchType {

    export interface Params {
        id: string;
    }

    export interface RootObject {
        path: string;
        url: string;
        isExact: boolean;
        params: Params;
    }
}

