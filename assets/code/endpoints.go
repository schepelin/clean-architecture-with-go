package imgservice

import (
	"context"
	"encoding/base64"

	"github.com/go-kit/kit/endpoint"
)

type UploadRequest struct {
	Width  uint   `json:"width"`
	Height uint   `json:"height"`
	Raw    string `json:"image"`
}

type UploadResponse struct {
	ID      int    `json:"job_id"`
	ImageID string `json:"image_id"`
}

func MakeUploadEndpoint(
	svc imgresizer.ImageService,
) endpoint.Endpoint {
	return func(
		ctx context.Context,
		request interface{},
	) (interface{}, error) {
		req := request.(UploadRequest)
		raw, err := base64.StdEncoding.DecodeString(req.Raw)
		if err != nil {
			return nil, err
		}
		job, err := svc.UploadForResize(
			ctx, raw,
			req.Width,
			req.Height,
		)
		return UploadResponse{
			ID:      job.ID,
			ImageID: job.ImageID
		}, err
	}
}
