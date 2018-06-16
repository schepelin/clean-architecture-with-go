package imgresizer

import "context"

//go:generate mockgen -source=services.go -destination ../mocks/mock_services.go -package mocks

type ImageService interface {
	UploadForResize(
		ctx context.Context,
		raw []byte,
		width, height uint,
	) (*ResizeJob, error)

	GetOriginalImage(
		ctx context.Context,
		imgID string,
	) (*Image, error)

	GetResizedImage(
		ctx context.Context,
		jobID int,
	) (*ResizedImage, error)
}

type ResizeService interface {
	RunResizeJob(
		ctx context.Context,
		jobID int,
	) error
}

// Supplimentary inteface for Image ID generation
type Hasher interface {
	Gen(raw []byte) string
}
