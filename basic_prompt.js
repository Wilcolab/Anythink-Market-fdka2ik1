function toCamelCase(input) {
	if (typeof input !== 'string') return '';
	const trimmed = input.trim();
	if (trimmed === '') return '';
	return trimmed
		.split(/[\s_-]+/)
		.map((word, index) => {
			const lower = word.toLowerCase();
			if (index === 0) return lower;
			return lower.charAt(0).toUpperCase() + lower.slice(1);
		})
		.join('');
}

module.exports = { toCamelCase };

