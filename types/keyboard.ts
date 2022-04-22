interface SpecData {
	field_name: string;
	field_value: string;
}

interface FileData {
	file_cat: string;
	file_data: string;
}

export default interface Keyboard {
	name: string;
	cover_image: string;
	gallery_images: string[];
	specs: SpecData[];
	files: FileData[];
}