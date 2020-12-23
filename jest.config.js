module.exports = {
	verbose: true,
	setupFilesAfterEnv: ['<rootDir>/__test__/setup.js'],
	testMatch: ['<rootDir>/__test__/**/*.test.js'],
	moduleNameMapper: {
		'@components/(.*)': '<rootDir>/resources/js/components/$1'
	}
}
