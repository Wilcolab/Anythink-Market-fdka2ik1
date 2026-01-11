function toKebabCase(input) {
    // Validate the input
    if (input === null || input === undefined || typeof input !== 'string') {
        throw new Error('Input must be a non-null string.');
    }

    // Normalize the string
    const normalized = input
        .trim()
        .toLowerCase()
        .replace(/[_\s]+/g, ' '); // Replace underscores and multiple spaces with a single space

    // Transform the string
    const kebabCase = normalized
        .split(' ')
        .join('-'); // Join words with hyphens

    return kebabCase;
}

// Example usage
try {
    console.log(toKebabCase('Hello World!')); // Output: hello-world!
    console.log(toKebabCase('  Multiple   Spaces  ')); // Output: multiple-spaces
    console.log(toKebabCase('Mixed_Delimiters_and Spaces')); // Output: mixed-delimiters-and-spaces
    console.log(toKebabCase(null)); // Throws error
} catch (error) {
    console.error(error.message);
}