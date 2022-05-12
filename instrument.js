const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

const { startTracing } = require('@splunk/otel');
const { getInstrumentations } = require('@splunk/otel/lib/instrumentations');
const {
  AwsInstrumentation,
} = require("@opentelemetry/instrumentation-aws-sdk");

startTracing({
  instrumentations: [
    ...getInstrumentations(),
    new AwsInstrumentation(),
  ]
});
