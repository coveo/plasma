const testsContext = (<{ context?: Function }>require).context('./tests', true, /\.spec\.tsx$/);
testsContext.keys().forEach(testsContext);

const coverageContext = (<{ context?: Function }>require).context('./src', true, /.*\.tsx$/);
coverageContext.keys().forEach(coverageContext);
