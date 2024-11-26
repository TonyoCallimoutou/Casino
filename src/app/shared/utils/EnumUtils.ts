export class EnumUtils {
    static getEnumValues(enumObject: any) : string[] {
        return Object.keys(enumObject).map(key => enumObject[key]);
    }
    static getEnumKeys(enumObject: any): string[] {
        return Object.keys(enumObject);
    }

    static getEnumByKeys(enumObject: any, keys: string): any {
        return enumObject[keys];
    }
}
