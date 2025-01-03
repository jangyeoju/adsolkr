import AddIcon from '@mui/icons-material/Add';
import {
  DragDropContext,
  Draggable,
  Droppable,
  resetServerContext,
} from 'react-beautiful-dnd';

import { uploadImage } from '@/lib/supabase/uploadImage';

import UploadableImage from './UploadableImage';

const ImageUploader = ({ images, maxLength = 10, onChange, onDelete }) => {
  function handleUploadImage(e) {
    const files = Array.from(e.target.files);

    onChange?.([
      ...images,
      ...files.slice(0, maxLength - images.length).map((file) => ({
        src: URL.createObjectURL(file),
        promise: uploadImage(file),
      })),
    ]);
  }

  resetServerContext();

  return (
    <DragDropContext
      onDragEnd={(param) => {
        const { source, destination } = param;

        const updated = [...images];
        const [imageToDrag] = updated.splice(source.index, 1);
        updated.splice(destination.index, 0, imageToDrag);

        onChange?.(updated);
      }}
    >
      <Droppable
        droppableId="images"
        isDropDisabled={false}
        isCombineEnabled={false}
        ignoreContainerClipping={false}
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex w-fit min-w-[100px] max-w-full items-center gap-1 overflow-auto border p-0.5"
          >
            {images.map(({ src, promise }, index) => (
              <Draggable
                key={src}
                draggableId={`${index}`}
                index={index}
                isDragDisabled={images.length <= 1}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    className="flex aspect-square h-[100px] flex-wrap items-center justify-center border"
                  >
                    <UploadableImage
                      src={src}
                      promise={promise}
                      onDelete={() => onDelete(index)}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {images.length < maxLength && (
              <label className="flex aspect-square size-[100px] cursor-pointer items-center justify-center border text-3xl text-gray-400 hover:bg-foreground/5">
                <input
                  className="absolute size-0 appearance-none"
                  type="file"
                  multiple={maxLength - images.length > 1}
                  accept="image/*"
                  onChange={handleUploadImage}
                />
                <AddIcon fontSize="inherit" />
              </label>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ImageUploader;
