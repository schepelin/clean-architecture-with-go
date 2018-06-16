package imgservice_test


func TestImageService_UploadForResize(t *testing.T) {

    mc := gomock.NewController(t)
	defer mc.Finish()
    stMock := mocks.NewMockImgStorage(mc)
	resMock := mocks.NewMockResizeService(mc)
    hashMock := mocks.NewMockHasher(mc)

    svc := imgservice.NewService(
		stMock,
		resMock,
		hashMock,
	)

    expHash := "imghash"
	stubImgRaw := []byte{10, 20, 03}
	expJodID := 1
    expImg := imgresizer.Image{
		ID:      expHash,
		RawData: stubImg,
	}
    expJob := imgresizer.ResizeJob {
		ImageID: expHash,
		width:   100,
		height:  200,
	}

    ctx := context.TODO()
    hashMock.EXPECT().Gen().Return(expHash)
    gomock.InOrder(
        storageMock.EXPECT().SaveImage(
			ctx, expImg,
		).Return(nil)
        storageMock.EXPECT().SaveResizeJob(
			ctx, expJob,
		).Return(expJodID, nil)
        resizerMock.EXPECT().RunResizeJob(
			ctx, expJob.ID,
		).Return(nil)
    )
    actualJob := svc.UploadForResize(
		ctx, stubImg, width, height,
	)
	assert.Equal(t, expJodID, actualJob.ID)
	assert.Equal(t, expJod.ImageID, actualJob.ImageID)
}
