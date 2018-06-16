package imgresizer

type Image struct {
	ID      string
	RawData []byte
}

type ResizeJob struct {
	ID      int
	ImageID string
	Width   uint
	Height  uint
}

type ResizedImage struct {
	ID         int
	OriginalID string
	RawData    []byte
}
