import { S3Client } from "@aws-sdk/client-s3";
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } from '$env/static/private';

export const s3Client = new S3Client({
	region: "us-east-2",
	credentials: {
	  accessKeyId: AWS_ACCESS_KEY_ID,
	  secretAccessKey: AWS_SECRET_ACCESS_KEY,
	},
});