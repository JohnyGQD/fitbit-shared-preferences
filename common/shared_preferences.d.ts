/**
 * Store a value
 * @param key to identify the value
 * @param value 
 */
export declare function setItem(key: string, value: any);

/**
 * Read a value from the storage
 * @param key to identify the value
 */
export declare function getItem(key: string): any;

/**
 * Load data
 */
export declare function load(): boolean;

/**
 * Save data
 */
export declare function save(): boolean;