import { JustwatchEntity } from './entity/JustwatchEntity';
import { MediaEntity } from './entity/MediaEntity';
import { PhotoEntity } from './entity/PhotoEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './SpiderManMoviesTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { SpiderManMoviesEntityBase } from './SpiderManMoviesEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class SpiderManMoviesSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Justwatch(entopts?: Record<string, any>): JustwatchEntity;
    Media(entopts?: Record<string, any>): MediaEntity;
    Photo(entopts?: Record<string, any>): PhotoEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): SpiderManMoviesSDK;
    tester(testopts?: any, sdkopts?: any): SpiderManMoviesSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof SpiderManMoviesSDK;
export { stdutil, config, BaseFeature, SpiderManMoviesEntityBase, SpiderManMoviesSDK, SDK, };
