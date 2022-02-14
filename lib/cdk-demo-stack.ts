import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import * as path from 'path';

export class CdkDemoStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const getLunchSpotsLambda = new NodejsFunction(this, 'getLunchSpots', {
      handler: 'handler',
      entry: path.join(__dirname, '/../lambdas/getLunchSpots.ts'),
    });

    const getLunchSpotsIntegration = new LambdaIntegration(getLunchSpotsLambda);

    const api = new RestApi(this, 'sohoLunchSpots', {
      restApiName: 'Soho Lunch Spots',
    });

    const lunchSpots = api.root.addResource('lunch-spots');
    lunchSpots.addMethod('GET', getLunchSpotsIntegration);
  }
}
