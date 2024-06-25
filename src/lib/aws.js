import { S3Client } from "@aws-sdk/client-s3";
import { AWS_ACCESSKEYID, AWS_SECRETACCESSKEY } from '$env/static/private';

export const s3Client = new S3Client({
	region: "us-east-2",
	credentials: {
	  accessKeyId: AWS_ACCESSKEYID,
	  secretAccessKey: AWS_SECRETACCESSKEY,
	},
});