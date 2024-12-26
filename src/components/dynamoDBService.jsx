import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import { awsConfig } from './config';

const client = new DynamoDB(awsConfig);
const ddbDoc = DynamoDBDocument.from(client);

export const saveContactMessage = async (contactData) => {
  const params = {
    TableName: 'ContactMessages',
    Item: {
      messageId: Date.now().toString(),
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
      timestamp: new Date().toISOString()
    }
  };

  try {
    await ddbDoc.put(params);
    return { success: true };
  } catch (error) {
    console.error('Error saving to DynamoDB:', error);
    throw error;
  }
};