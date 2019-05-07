/**
 * Auto-generated action file for "App Engine Admin" API.
 *
 * Generated at: 2019-05-07T14:41:12.494Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-appengine-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'appengine.apps.services.versions.patch'
 * Endpoint Path: '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "appsId",
    "servicesId",
    "updateMask",
    "versionsId",
    "fields",
    "key",
    "oauth_token",
    "prettyPrint",
    "quotaUser",
    "uploadType",
    "upload_protocol"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "appsId": "appsId",
    "servicesId": "servicesId",
    "updateMask": "updateMask",
    "versionsId": "versionsId",
    "fields": "fields",
    "key": "key",
    "oauth_token": "oauth_token",
    "prettyPrint": "prettyPrint",
    "quotaUser": "quotaUser",
    "uploadType": "uploadType",
    "upload_protocol": "upload_protocol",
    "authFailAction": "authFailAction",
    "login": "login",
    "script": "script",
    "securityLevel": "securityLevel",
    "url": "url",
    "apiConfig": "apiConfig",
    "coolDownPeriod": "coolDownPeriod",
    "aggregationWindowLength": "aggregationWindowLength",
    "targetUtilization": "targetUtilization",
    "cpuUtilization": "cpuUtilization",
    "targetReadBytesPerSecond": "targetReadBytesPerSecond",
    "targetReadOpsPerSecond": "targetReadOpsPerSecond",
    "targetWriteBytesPerSecond": "targetWriteBytesPerSecond",
    "targetWriteOpsPerSecond": "targetWriteOpsPerSecond",
    "diskUtilization": "diskUtilization",
    "maxConcurrentRequests": "maxConcurrentRequests",
    "maxIdleInstances": "maxIdleInstances",
    "maxPendingLatency": "maxPendingLatency",
    "maxTotalInstances": "maxTotalInstances",
    "minIdleInstances": "minIdleInstances",
    "minPendingLatency": "minPendingLatency",
    "minTotalInstances": "minTotalInstances",
    "targetReceivedBytesPerSecond": "targetReceivedBytesPerSecond",
    "targetReceivedPacketsPerSecond": "targetReceivedPacketsPerSecond",
    "targetSentBytesPerSecond": "targetSentBytesPerSecond",
    "targetSentPacketsPerSecond": "targetSentPacketsPerSecond",
    "networkUtilization": "networkUtilization",
    "targetConcurrentRequests": "targetConcurrentRequests",
    "targetRequestCountPerSecond": "targetRequestCountPerSecond",
    "requestUtilization": "requestUtilization",
    "maxInstances": "maxInstances",
    "minInstances": "minInstances",
    "targetCpuUtilization": "targetCpuUtilization",
    "targetThroughputUtilization": "targetThroughputUtilization",
    "standardSchedulerSettings": "standardSchedulerSettings",
    "automaticScaling": "automaticScaling",
    "idleTimeout": "idleTimeout",
    "basicScaling": "basicScaling",
    "betaSettings": "betaSettings",
    "createTime": "createTime",
    "createdBy": "createdBy",
    "defaultExpiration": "defaultExpiration",
    "appYamlPath": "appYamlPath",
    "cloudBuildTimeout": "cloudBuildTimeout",
    "cloudBuildOptions": "cloudBuildOptions",
    "image": "image",
    "container": "container",
    "files": "files",
    "filesCount": "filesCount",
    "sourceUrl": "sourceUrl",
    "zip": "zip",
    "deployment": "deployment",
    "diskUsageBytes": "diskUsageBytes",
    "configId": "configId",
    "disableTraceSampling": "disableTraceSampling",
    "name": "name",
    "rolloutStrategy": "rolloutStrategy",
    "endpointsApiService": "endpointsApiService",
    "shell": "shell",
    "entrypoint": "entrypoint",
    "env": "env",
    "envVariables": "envVariables",
    "errorHandlers": "errorHandlers",
    "handlers": "handlers",
    "checkInterval": "checkInterval",
    "disableHealthCheck": "disableHealthCheck",
    "healthyThreshold": "healthyThreshold",
    "host": "host",
    "restartThreshold": "restartThreshold",
    "timeout": "timeout",
    "unhealthyThreshold": "unhealthyThreshold",
    "healthCheck": "healthCheck",
    "id": "id",
    "inboundServices": "inboundServices",
    "instanceClass": "instanceClass",
    "libraries": "libraries",
    "failureThreshold": "failureThreshold",
    "initialDelay": "initialDelay",
    "path": "path",
    "successThreshold": "successThreshold",
    "livenessCheck": "livenessCheck",
    "instances": "instances",
    "manualScaling": "manualScaling",
    "forwardedPorts": "forwardedPorts",
    "instanceTag": "instanceTag",
    "sessionAffinity": "sessionAffinity",
    "subnetworkName": "subnetworkName",
    "network": "network",
    "nobuildFilesRegex": "nobuildFilesRegex",
    "appStartTimeout": "appStartTimeout",
    "readinessCheck": "readinessCheck",
    "cpu": "cpu",
    "diskGb": "diskGb",
    "memoryGb": "memoryGb",
    "volumes": "volumes",
    "resources": "resources",
    "runtime": "runtime",
    "runtimeApiVersion": "runtimeApiVersion",
    "runtimeChannel": "runtimeChannel",
    "runtimeMainExecutablePath": "runtimeMainExecutablePath",
    "servingStatus": "servingStatus",
    "threadsafe": "threadsafe",
    "versionUrl": "versionUrl",
    "vm": "vm",
    "zones": "zones",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'appengine.apps.services.versions.patch',
        pathName: '/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}