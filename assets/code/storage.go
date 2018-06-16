package storage

//go:generate mockgen -source=storage.go -destination ../mocks/mock_storage.go -package mocks

import (
	"context"

	imgresizer "../imgresizer"
)

type ImgStorage interface {
	SaveImage(
		ctx context.Context,
		img imgresizer.Image
	) error

	GetImage(
		ctx context.Context,
		imgID string
	) (*imgresizer.Image, error)

	SaveResizeJob(
		ctx context.Context,
		job imgresizer.ResizeJob
	) (jobID int, err error)

	GetResizedImage(
		ctx context.Context,
		jobID int
	) (*imgresizer.ResizedImage, error)
}
