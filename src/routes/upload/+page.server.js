import { s3Client } from "$lib/aws"
import { generateUniqueString } from "$lib/utils"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { fail } from "@sveltejs/kit"

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const file = data.get("video");

		if (!file) {
			return fail(400, { message: "missing video :(" })
		}

		console.log('File Name:', file.name);
		console.log('File Size:', file.size);
		console.log('File Type:', file.type);

		const arrayBuffer = await file.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const hash = generateUniqueString(15);
		const fileNameParts = file.name.split('.');
		const fileExtension = fileNameParts.pop();
		const baseName = fileNameParts.join('.');
		const newFileName = `${baseName}-${hash}.${fileExtension}`;

		console.log(newFileName)
	
		const uploadParams = {
			Bucket: "best-bideo-search",
			Key: `input-files/${newFileName}`,
			Body: buffer,
			ContentType: file.type,
			Metadata: {
				originalname: baseName
			}
		};
			
		try {
			const data = await s3Client.send(new PutObjectCommand(uploadParams));
			return { succes: true };
		} catch (err) {
			return fail(500, { message: err })
		}
	}
};