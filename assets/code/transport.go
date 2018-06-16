package imgservice

import (
	"context"
	"encoding/json"
	"errors"
	"net/http"

	kithttp "github.com/go-kit/kit/transport/http"
)

func decodeRequest(
	_ context.Context, r *http.Request,
) (interface{}, error) {
	var body UploadRequest
	err := json.NewDecoder(
		r.Body
	).Decode(&body)
	if err != nil {
		return nil, errors.New("Oh no")
	}
	return body, nil
}

func MakeHandler(
	svc imgresizer.ImageService
) http.Handler {
	return kithttp.NewServer(
		MakeUploadEndpoint(svc),
		decodeRequest,
		kithttp.EncodeJSONResponse,
	)
}
