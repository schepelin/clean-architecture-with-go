package main

import (
	"crypto/md5"
	"database/sql"
	"encoding/hex"
	"net/http"

	resizesvc "../bilinearresize"
	imgservice "../imgservice"
	pgstorage "../pgstorage"
)

type HasherMD5 struct{}

func (h HasherMD5) Gen(raw *[]byte) string {
	hash := md5.New()
	hash.Write(*raw)
	return hex.EncodeToString(hash.Sum(nil))
}

func main() {
	db, err := sql.Open(
		"postgres",
		"postgres://localhost/resize_db",
	)
	defer db.Close()
	pg := pgstorage.NewPgStorage(db)
	resizeScv := resizesvc.NewAsyncResize(pg)
	imgSvc := imgservice.NewService(
		pg,
		resizeScv,
		HasherMD5{},
	)

	uploadHandler := imgservice.MakeHandler(svc)
	mux := http.NewServeMux()
	mux.Handle("/image", uploadHandler)
	srv := &http.Server{
		Addr:    ":8080",
		Handler: mux,
	}
	srv.ListenAndServe()
}
