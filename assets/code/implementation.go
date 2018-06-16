package imgservice

type ImageService struct {
	Storage storage.ImgStorage
	Resizer imgresizer.ResizeService
	Hasher  imgresizer.Hasher
}

func NewService(
	s storage.ImgStorager,
	r imgresizer.ResizeService,
	h imgresizer.Hasher,
) *ImageService {
	return &ImageService{Storage: s, Hasher: hl, Resizer: r}
}

func (is *ImageService) UploadForResize(
	ctx context.Context,
	raw []byte,
	width, height uint
) (*ResizeJob, error) {
    img = imgresizer.Image{
        ID:        is.Hasher.Gen(raw),
        RawData:   raw,
    }
    err := is.Storage.CreateNewImage(ctx, img)
    if err != nil {
        return nil, err
	}
	job := imgresizer.ResizeJob{
		ImageID: img.ID,
		Width: width,
		Height: height,
	}
    job.ID, err := is.Storage.CreateResizeJob(
		ctx,
		job,
	)
    if err != nil {
        return nil, err
	}

    go is.Resizer.RunResizeJob(ctx, job.ID)
    return job, nil
}
