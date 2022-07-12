import { uploadService } from '../api/upload-service';

export default class UploadService {
	static async uploadImage(bucketName: string, keyTo: string, image: File) {
		const response = await uploadService.post(
			`/image?bucketName=${bucketName}-${
				import.meta.env.VITE_MODE
			}&keyTo=${keyTo}`,
			{
				image
			},
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
		);

		return response.data;
	}
}
