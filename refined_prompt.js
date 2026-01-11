/**
 * Converts a given string to camelCase format.
 *
 * @param {string|null|undefined} input - The input string to be converted. 
 *                                        Can be null or undefined, in which case an empty string is returned.
 * @returns {string} The camelCase version of the input string. 
 *                  Returns an empty string if the input is empty or consists only of whitespace.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * // returns 'helloWorld'
 * toCamelCase('hello world');
 *
 * @example
 * // returns 'myVariableName'
 * toCamelCase('my_variable-name');
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * @param {string|null|undefined} input - The input string to be converted. 
 *                                        Can be null or undefined, in which case an empty string is returned.
 * @returns {string} The dot.case version of the input string. 
 *                  Returns an empty string if the input is empty or consists only of whitespace.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * // returns 'hello.world'
 * toDotCase('Hello World');
 *
 * @example
 * // returns 'my.variable.name'
 * toDotCase('my_variable-name');
 */
function toCamelCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        return '';
    }

    // Throw error for non-string inputs
    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected a string, but received ${typeof input}`);
    }

    // Trim leading/trailing whitespace
    const trimmed = input.trim();

    // Handle empty strings
    if (trimmed.length === 0) {
        return '';
    }

    // Split by spaces, hyphens, and underscores
    const words = trimmed.split(/[\s\-_]+/);

    // Convert to camelCase
    return words
        .map((word, index) => {
            if (word.length === 0) return '';
            
            // First word: lowercase first character
            if (index === 0) {
                return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
            }
            
            // Subsequent words: capitalize first character
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Export for use in other modules
module.exports = toCamelCase;
function toDotCase(input) {
    // Handle null and undefined
    if (input === null || input === undefined) {
        return '';
    }

    // Throw error for non-string inputs
    if (typeof input !== 'string') {
        throw new Error(`Invalid input: expected a string, but received ${typeof input}`);
    }

    // Trim leading/trailing whitespace
    const trimmed = input.trim();

    // Handle empty strings
    if (trimmed.length === 0) {
        return '';
    }

    // Split by spaces, hyphens, and underscores
    const words = trimmed.split(/[\s\-_]+/);

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Export for use in other modules
module.exports.toDotCase = toDotCase;