'use strict';

const AWS = require('aws-sdk');
const codeDeploy = new AWS.CodeDeploy({apiVersion: '2014-10-06'});

module.exports.preHook = async (event) => {
    console.log('hook prehook run!')

    //Read the DeploymentId from the event payload.
    const deploymentId = event.DeploymentId;

    //Read the LifecycleEventHookExecutionId from the event payload
    const lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

    var status = 'Succeeded';

    // Prepare the validation test results with the deploymentId and
    // the lifecycleEventHookExecutionId for AWS CodeDeploy.
    const params = {
        deploymentId: deploymentId,
        lifecycleEventHookExecutionId: lifecycleEventHookExecutionId,
        status: status // status can be 'Succeeded' or 'Failed'
    };

    // Pass AWS CodeDeploy the prepared validation test results.
    return codeDeploy.putLifecycleEventHookExecutionStatus(params).promise();
};


module.exports.postHook = async (event) => {
    console.log('hook post run!')

    //Read the DeploymentId from the event payload.
    const deploymentId = event.DeploymentId;

    //Read the LifecycleEventHookExecutionId from the event payload
    const lifecycleEventHookExecutionId = event.LifecycleEventHookExecutionId;

    var status = 'Failed'

    // Prepare the validation test results with the deploymentId and
    // the lifecycleEventHookExecutionId for AWS CodeDeploy.
    const params = {
        deploymentId: deploymentId,
        lifecycleEventHookExecutionId: lifecycleEventHookExecutionId,
        status: status // status can be 'Succeeded' or 'Failed'
    };

    // Pass AWS CodeDeploy the prepared validation test results.
    return codeDeploy.putLifecycleEventHookExecutionStatus(params).promise();
};