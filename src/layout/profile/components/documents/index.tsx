import { Documents as DocumentModel } from '../../../../models/documents';
import NoInfo from '../../no-info';
import DocumentsInfo from './documents-info';

type DocumentsProps = {
	documents?: DocumentModel;
};

export default function Documents({ documents }: DocumentsProps) {
	return (
		<div className="w-full min-h-[15vh]">
			{/* {documents ? (
				<DocumentsInfo documents={documents} />
			) : (
				<NoInfo name="Documentos" />
			)} */}

			<h1 className="text-center">Em breve</h1>
		</div>
	);
}
